import type {Destination,Property} from '../types';
export const photo=(id:string,w=1200)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const interiors=[
 photo('photo-1600210492486-724fe5c67fb0'),photo('photo-1600607687920-4e2a09cf159d'),photo('photo-1600566753086-00f18fb6b3ea'),photo('photo-1616486338812-3dadae4b4ace'),photo('photo-1600607687939-ce8a6c25118c'),photo('photo-1615874959474-d609969a20ed'),photo('photo-1600210491892-03d54c0aaf87')];
export const destinations:Destination[]=[
{id:'chicago',name:'Chicago',region:'Illinois, USA',image:photo('photo-1494522358652-f30e61a60313'),description:'A city of beautiful contrasts. Find your place among lakefront paths, extraordinary architecture, and neighborhoods with a personality all their own.',neighborhoods:['River North','Gold Coast','The Loop','West Loop']},
{id:'new-york',name:'New York',region:'New York, USA',image:photo('photo-1485871981521-5b1fd3805eee'),description:'Make the city your neighborhood. From quiet mornings in Brooklyn to evenings in Manhattan, settle into your own New York rhythm.',neighborhoods:['Chelsea','Upper West Side','Brooklyn Heights','Midtown']},
{id:'los-angeles',name:'Los Angeles',region:'California, USA',image:photo('photo-1534190760961-74e8c1c5c3da'),description:'Sun-filled days and space to make your own. Discover thoughtfully furnished homes from the coast to the heart of the city.',neighborhoods:['Santa Monica','West Hollywood','Downtown','Silver Lake']},
{id:'boston',name:'Boston',region:'Massachusetts, USA',image:photo('photo-1501979376754-2ff867a4f659'),description:'Historic streets, waterside walks, and a fresh start. Feel at home in one of America’s most walkable cities.',neighborhoods:['Back Bay','Seaport','Beacon Hill','South End']}
];
export const allAmenities=['Wi-Fi','Pet friendly','Gym','In-unit laundry','Balcony','Parking'];
export const properties:Property[]=destinations.flatMap((city,ci)=>Array.from({length:6},(_,i)=>({
 id:`${city.id}-${i+1}`,title:['The light-filled retreat','A home above the city','The neighborhood hideaway','Room to unwind','The sunlit loft','Your city sanctuary'][i],city:city.id,neighborhood:city.neighborhoods[i%4],
 description:`Settle into a thoughtfully furnished home in ${city.neighborhoods[i%4]}, ${city.name}. A comfortable living area, fully equipped kitchen, and dedicated workspace make everyday life feel effortless. Step outside to discover neighborhood cafés, local shops, and convenient transit. Photography is illustrative and does not depict a bookable property.`,
 monthlyPrice:2200+ci*450+i*325,currency:'USD',bedrooms:i%3,bathrooms:i%3===2?2:1,area:510+i*125,images:[interiors[(i+ci)%7],interiors[(i+ci+2)%7],interiors[(i+ci+4)%7]],
 amenities:['Wi-Fi','In-unit laundry',...(i%2===0?['Pet friendly','Gym']:['Balcony']),...(i%3===0?['Parking']:[])],availableFrom:i%2===0?'2026-10-23':'2026-11-01',availableUntil:'2028-12-31',type:i===4?'Loft':'Apartment',point:[18+(i%3)*25,23+Math.floor(i/3)*35]
})));
