# Dorsett Does It — Marketing Site

Production React + TypeScript site for Dorsett Does It LLC. Vite + Tailwind + React Router. A2P 10DLC compliant SMS forms with full Privacy Policy and Terms of Service.

## Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (multi-page routing)

## Local development

```bash
npm install
npm run dev      # starts dev server at http://localhost:5173
npm run build    # outputs production build to /dist
npm run preview  # preview the production build locally
```

## Pages
- `/` — Home
- `/about-us` — About
- `/services` — Services
- `/get-a-estimate` — Estimate form (A2P-compliant)
- `/privacy-policy` — Privacy Policy (includes SMS Non-Sharing clause)
- `/terms-of-service` — Terms

## A2P 10DLC Compliance Checklist
- ✅ Business name + logo in header and footer ("Dorsett Does It LLC")
- ✅ Clear services description, no placeholder text
- ✅ Phone field on estimate form is **optional**
- ✅ SMS consent checkbox is **not pre-checked** and only appears when a phone number is entered
- ✅ Full SMS disclosure text next to consent checkbox
- ✅ Privacy Policy includes required SMS non-sharing disclosure
- ✅ Terms of Service includes STOP / HELP language, carrier disclosure, message frequency
- ✅ Footer links to Privacy Policy and Terms

## Deployment to Cloudflare Pages
The `public/_redirects` file is already configured for SPA routing. Cloudflare Pages will detect this and handle deep links correctly.

Build settings on Cloudflare:
- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18 or higher

## Chat widget
The LeadConnector chat widget is embedded in `index.html`. To swap or remove it, edit the `<script>` tag at the bottom of `<body>`.
