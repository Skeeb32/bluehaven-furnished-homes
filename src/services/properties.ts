import {properties,destinations} from '../data/catalog';
import type {Property,SearchFilters,Destination} from '../types';
export function dateError(moveIn?:string,moveOut?:string):string|null {
 if(!moveIn&&!moveOut)return null;
 if(!moveIn||!moveOut)return 'Choose both a move-in and a move-out date.';
 if(!/^\d{4}-\d{2}-\d{2}$/.test(moveIn)||!/^\d{4}-\d{2}-\d{2}$/.test(moveOut)||!Number.isFinite(Date.parse(moveIn))||!Number.isFinite(Date.parse(moveOut)))return 'Please enter valid dates.';
 if(new Date(moveIn).toISOString().slice(0,10)!==moveIn||new Date(moveOut).toISOString().slice(0,10)!==moveOut)return 'Please enter valid dates.';
 const days=(Date.parse(moveOut)-Date.parse(moveIn))/86400000;
 if(days<30)return 'Choose a stay of at least 30 nights.';
 return null;
}
export function filterProperties(items:Property[],f:SearchFilters={}):Property[]{
 if(dateError(f.moveIn,f.moveOut))return [];
 const result=items.filter(p=>(!f.city||p.city===f.city)&&(!f.bedrooms||String(p.bedrooms)===f.bedrooms)&&(!f.maxPrice||p.monthlyPrice<=f.maxPrice)&&(!f.type||p.type===f.type)&&(!f.amenities?.length||f.amenities.every(a=>p.amenities.includes(a)))&&(!f.moveIn||p.availableFrom<=f.moveIn)&&(!f.moveOut||p.availableUntil>=f.moveOut)&&(!f.saved||f.saved.includes(p.id)));
 return result.sort((a,b)=>f.sort==='price-low'?a.monthlyPrice-b.monthlyPrice:f.sort==='price-high'?b.monthlyPrice-a.monthlyPrice:f.sort==='area'?b.area-a.area:a.id.localeCompare(b.id));
}
export interface PropertyService {list(filters?:SearchFilters):Promise<Property[]>;getById(id:string):Promise<Property|null>}
export const propertyService:PropertyService={async list(filters){return filterProperties(properties,filters)},async getById(id){return properties.find(p=>p.id===id)??null}};
export const destinationService={async list():Promise<Destination[]>{return destinations}};
export const apiConfig={baseUrl:import.meta.env?.VITE_API_BASE_URL??'',mode:'mock' as const};
