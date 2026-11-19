# DIVERSMINDS THERAPY LTD — Manus import plan

## Implementation

Import the exported Base44 React/Vite source as the visual and routing baseline. Keep the landing page sections, therapy service presentation, inquiry form fields, blog listing/detail pages, admin blog manager, navigation, responsive Tailwind styling, and existing imagery/content structure. Replace the Base44-only auth/entity transport with a local Manus-compatible persistence shim backed by browser storage so the imported application works without the original Base44 runtime.

## Project structure

- `src/pages/` contains Home, Blog, BlogPost, and AdminBlog routes.
- `src/components/landing/` contains the therapy landing page sections and inquiry form.
- `src/components/ui/` contains the imported Radix/Tailwind UI primitives.
- `src/api/base44Client.js` provides the compatibility data layer used by the imported pages.
- `public/manus-routes.json` declares the application routes for Manus Preview.

## Design

- **Design Movement:** Compassionate editorial wellness site (0.07)
- **Alternative:** Soft clinical SaaS (0.06)
- **Alternative:** Bright community education hub (0.08)

Chosen direction: retain the imported compassionate editorial wellness style.

- **Core Principles:** warm reassurance, clear service discovery, calm whitespace, and accessible action paths.
- **Color Philosophy:** purple-to-blue gradients signal trust, hope, and continuity while white space keeps the site gentle rather than clinical.
- **Layout Paradigm:** long-form guided journey from empathy and services to inquiry, with the blog as a separate resource layer.
- **Signature Elements:** gradient CTA buttons, rounded cards, and soft section transitions.
- **Interaction Philosophy:** low-friction exploration with visible contact paths and a form that asks only for relevant support context.
- **Animation:** restrained fade/slide reveals and gentle hover emphasis.
- **Typography System:** the imported Tailwind hierarchy with bold dark headings and relaxed gray body copy.
- **Brand Essence:** compassionate, practical support for families navigating special education needs; caring, clear, responsive.
- **Brand Voice:** reassuring and specific. Example lines: “Let’s find the right support.” and “Location is not a barrier.”
