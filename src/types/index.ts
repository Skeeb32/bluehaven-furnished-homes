export interface Destination {id:string; name:string; region:string; image:string; description:string; neighborhoods:string[]}
export interface Property {id:string; title:string; city:string; neighborhood:string; description:string; monthlyPrice:number; currency:'USD'; bedrooms:number; bathrooms:number; area:number; images:string[]; amenities:string[]; availableFrom:string; availableUntil:string; type:'Apartment'|'Loft'; point:[number,number]}
export interface SearchFilters {city?:string; moveIn?:string; moveOut?:string; bedrooms?:string; maxPrice?:number; type?:string; amenities?:string[]; sort?:string; saved?:string[]}
export interface AuthUser {id:string; email:string; displayName:string}
export interface AuthClient {getUser():Promise<AuthUser|null>; signIn(email:string,password:string):Promise<AuthUser>; signUp(email:string,password:string):Promise<AuthUser>; signOut():Promise<void>}
