# DiverseMinds independent deployment plan

## Architecture

Keep the existing React/Vite frontend, routes, Tailwind styling, animations, content, and responsive structure. Use a Vercel static build with a SPA rewrite for browser routes. Use a Vercel serverless function for support inquiry validation and optional server-side webhook delivery. Keep browser-local storage as the fallback for the current blog and inquiry experience until a shared production database and administrator authentication are provisioned.

## Portability rules

No client code depends on proprietary platform SDKs, runtime APIs, generated metadata, or platform-hosted deployment files. Secrets are server-side environment variables only. External inquiry delivery is configured with `INQUIRY_WEBHOOK_URL` and `INQUIRY_WEBHOOK_TOKEN`.

## Delivery constraints

The current workspace has no verified Vercel account or repository connector. Code can be prepared and tested locally; Vercel connection, production environment variables, and final deployment require the user's authorized Vercel/Git provider access.
