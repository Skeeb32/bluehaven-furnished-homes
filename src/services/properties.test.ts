import {test} from 'node:test';
import assert from 'node:assert/strict';
import {filterProperties,dateError} from './properties';
import {properties} from '../data/catalog';

test('search filters compose city, bedrooms, price, type, and amenities',()=>{
 const homes=filterProperties(properties,{city:'chicago',bedrooms:'1',maxPrice:3500,type:'Apartment',amenities:['Wi-Fi']});
 assert.ok(homes.length>0);
 assert.ok(homes.every(p=>p.city==='chicago'&&p.bedrooms===1&&p.monthlyPrice<=3500&&p.type==='Apartment'&&p.amenities.includes('Wi-Fi')));
});
test('sorting is numeric and preserves filtered results',()=>{
 const homes=filterProperties(properties,{city:'boston',sort:'price-low'});
 assert.equal(homes[0].monthlyPrice,Math.min(...homes.map(p=>p.monthlyPrice)));
 assert.equal(filterProperties(properties,{sort:'price-high'})[0].monthlyPrice,Math.max(...properties.map(p=>p.monthlyPrice)));
});
test('date validation rejects partial, malformed, and under-30-night stays',()=>{
 assert.match(dateError('2026-11-01')||'',/both/);
 assert.match(dateError('not-a-date','2026-12-10')||'',/valid/);
 assert.match(dateError('2026-11-01','2026-11-30')||'',/30 nights/);
 assert.equal(dateError('2026-11-01','2026-12-01'),null);
});
test('date filtering checks both ends against the mock availability window',()=>{
 const home=properties.find(p=>p.id==='chicago-1')!;
 assert.equal(filterProperties([home],{moveIn:'2026-10-22',moveOut:'2026-12-01'}).length,0);
 assert.equal(filterProperties([home],{moveIn:'2026-11-01',moveOut:'2026-12-01'}).length,1);
 assert.equal(filterProperties([home],{moveIn:'2027-01-01',moveOut:'2029-01-01'}).length,0);
});
