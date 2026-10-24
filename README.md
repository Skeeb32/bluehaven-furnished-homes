# Bluehaven frontend demo

An independent, responsive furnished-homes frontend inspired by the broad layout and search patterns of Blueground. Bluehaven branding, mock inventory, and original implementation are used throughout. Unsplash images are illustrative photography and are not photographs of the listed mock homes. This project is not affiliated with Blueground.

## Run locally

Requires Node.js 20 or later.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Production build: `npm run build`. Type check: `npm run typecheck`. Focused search and date checks: `npm test`.

## Pages

- `/` homepage, search, featured destinations, benefits and FAQs
- `/destinations` destination collection
- `/furnished-apartments-chicago-usa` (also New York, Los Angeles, and Boston) city landing pages
- `/search?city=chicago&moveIn=2026-11-01&moveOut=2026-12-01` search results and URL-backed filters
- `/properties/:id` property details, gallery, date validation and inquiry preview
- `/saved`, `/about`, `/corporate-housing`, `/contact`, `/login`, `/signup`

## Structure

`src/data/catalog.ts` centralizes typed destinations, 24 sample homes, amenity sets, and illustrative images. `src/services/properties.ts` provides the async mock-backed property service and search/date logic. UI components consume that service rather than embedding property arrays. `VITE_API_BASE_URL` is a reserved configuration point for a future API; the app explicitly reports that the current mode is mock. Replace the service implementation when a real backend contract is available.

`src/services/auth.ts` defines an injectable auth client interface with a deliberately unavailable implementation. No credentials, local account records, sessions, or pretend successful sign-ins are created. Login/signup screens explain this status. Contact and property inquiry flows display an on-page draft preview and do not transmit it.

## Notes

The map panel is a schematic interaction preview, not a real map or precise property location. Property availability and monthly prices are internally consistent mock data. Booking, payment, database, API, and authentication integrations remain future work. External image and font assets require an internet connection.
