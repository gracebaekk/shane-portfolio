# Shane Choi | Portfolio

Next.js 15 (App Router) + Tailwind CSS v4. Currently the homepage only.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

- **Projects** live in `src/lib/projects.ts`. Each entry drives a card on the homepage.
  Every project renders a colored placeholder tile until you set `cover` to an image
  path: drop files in `public/work/` and set e.g. `cover: "/work/kasa.jpg"`.
- **Bio, contact links, and skill tags** are inline in `src/app/page.tsx`.
- **Resume** is linked at `/resume.pdf`; put the file at `public/resume.pdf`.
- **Colors and fonts** are defined once in the `@theme` block of `src/app/globals.css`.

## Not built yet

Individual case study pages (`/work/[slug]`) and the full `/photo` page. Project cards
already link to `/work/<slug>`, so those routes are the next thing to add.
