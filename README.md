# DiverseMinds Therapy

Independent React/Vite website for DiverseMinds Special Education Needs & Consult Ltd.

## Stack

- React 18 with Vite
- React Router with Vercel SPA rewrites
- Tailwind CSS and Framer Motion
- Browser-local blog/inquiry fallback data for the existing client experience
- Optional Vercel serverless inquiry endpoint at `POST /api/inquiries`

## Development

```bash
npm ci
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Vercel configuration

Use the default Vite settings: build command `npm run build`, output directory `dist`, and install command `npm ci`. `vercel.json` preserves direct navigation to client-side routes while leaving `/api/*` requests available to serverless functions.

For inquiry delivery, configure these server-side environment variables in Vercel:

- `INQUIRY_WEBHOOK_URL` — optional HTTPS endpoint that receives validated inquiry JSON.
- `INQUIRY_WEBHOOK_TOKEN` — optional bearer token for that endpoint.

No secrets belong in `VITE_*` variables or committed files. If the delivery variables are not configured, the browser still retains a local copy for the current visitor, but no centralized notification is sent; configure the variables before relying on production lead capture.

## Content data

The blog manager uses browser-local storage in this portable build. A shared production blog database and administrator authentication require a separately provisioned database/auth provider; these are intentionally not fabricated or embedded in the frontend.
