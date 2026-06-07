# CheckInn Final Presentation Website

Static React site for the COMP 3350 final project presentation.
Vite + React + Tailwind + a few shadcn-style components written inline.

## Run locally

```bash
cd website
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build      # outputs to website/dist
npm run preview    # serves the built site locally
```

## Deploy on Vercel

1. Push the repo to GitHub or GitLab.
2. On vercel.com, "Add New Project", point it at the repo.
3. Set **Root Directory** to `website`. Framework auto-detects as Vite.
4. Deploy. Vercel gives you a `*.vercel.app` URL.
5. Drop that URL into the top-level `README.md` so the grader can find it.

`vercel.json` already sets `buildCommand`, `outputDirectory`, and framework.

## What still needs filling in

Search the codebase for `TODO`. The placeholders are:

- `Hero.jsx` — hero screenshot
- `Demo.jsx` — demo video embed URL, four screen screenshots
- `Architecture.jsx` — Mermaid diagram as PNG/SVG
- `Team.jsx` — each member's `role`, `contributions`, `skills`
- `Nav.jsx` — GitLab repo URL (currently points to `code.cs.umanitoba.ca`)

## Folder layout

```
website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── lib/utils.js
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Overview.jsx
        ├── Demo.jsx
        ├── Architecture.jsx
        ├── Reflection.jsx
        ├── Team.jsx
        ├── Footer.jsx
        └── ui/
            ├── button.jsx
            ├── card.jsx
            ├── badge.jsx
            ├── separator.jsx
            └── accordion.jsx
```
