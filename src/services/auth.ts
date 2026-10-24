import type {AuthClient} from '../types';
const unavailable=async():Promise<never>=>{throw new Error('Authentication is not connected in this preview.')};
export const authClient:AuthClient={getUser:async()=>null,signIn:unavailable,signUp:unavailable,signOut:unavailable};
export interface InquiryDraft {propertyId?:string;name:string;email:string;message:string;moveIn?:string;moveOut?:string}
export interface InquiryService {submit(draft:InquiryDraft):Promise<{id:string}>}
// Inject a real InquiryService only after a backend is configured. The UI only previews drafts.
