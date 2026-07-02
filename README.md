# Borna Nobari — Portfolio

A personal portfolio site with a dark, terminal / IDE-inspired theme. Built from
scratch with **React + Vite + TypeScript** and plain CSS — no UI framework.

## Features

- Terminal / code-editor aesthetic (window chrome, `// comment` headings, syntax-color palette)
- Light / dark theme toggle, persisted to `localStorage`
- Typewriter effect on the hero role, blinking cursor
- Scroll-reveal animations via `IntersectionObserver`
- Fully responsive (desktop / tablet / mobile) with accessible focus states
- Sections: Hero · About · Projects · Experience · Stack · Contact

## Tech stack

React 18 · Vite 5 · TypeScript · CSS custom properties (theming)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.tsx              # composes the sections + hooks
  data.ts              # projects, jobs, skills, roles
  index.css            # full design system (CSS variables + [data-theme])
  hooks/               # useTypewriter, useScrollReveal, useTheme, useScrollSpy
  components/          # TopBar, Hero, About, Projects, Experience, Contact, SectionHeading
public/
  portrait.jpg         # hero photo
```

## Customization

- Edit copy and data in [`src/data.ts`](src/data.ts) and the section components.
- Swap the hero photo by replacing `public/portrait.jpg`.
- Colors live as CSS custom properties at the top of [`src/index.css`](src/index.css);
  `[data-theme="light"]` overrides the palette for light mode.
