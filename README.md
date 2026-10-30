# MahakumbhStays

Premium presentation-led prototype for a Nashik–Trimbakeshwar accommodation marketplace.

## Run locally

Install dependencies, build the React app, and start the Express server:

```powershell
cd 'D:\webakoof\booking marketplace'
npm install
npm run build
npm start
```

Then visit `http://localhost:4173`.

Use `npm run dev` for Vite hot reload during frontend development. The Node server serves the production build and falls back to `index.html` for React routes.

## Prototype scope

- Responsive hospitality marketplace homepage
- Separate Explore, Property Details, Kumbh 2027, Partner, and Support pages
- Search form with date validation and query state
- Category/location filtering and sorting
- 10 fictional demo properties with transparent demo labels
- Property details, demo booking checkout, simulated payment and confirmation flow
- Group enquiry and partner enquiry interactions
- Saved-stay heart interactions, FAQ accordion, mobile navigation and language preview

No real bookings, payments, authentication, inventory, or customer data are processed. The full-stack architecture in the supplied master brief is the next implementation phase.
