# Tekspot - Next.js Modular Starter

Production-ready [Next.js](https://nextjs.org) starter using the latest App Router stack:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project architecture

This project follows a feature-first modular structure:

```text
src/
  app/                    # Routing layer only (pages, layouts, route handlers)
  config/                 # App-level config/constants
  features/               # Business modules grouped by domain
    home/
      components/
      data/
      index.ts
  shared/                 # Reusable cross-feature code
    components/ui/
    lib/
```

## Modular code practices

1. Keep route files thin and compose page UI from `features/*`.
2. Co-locate feature code (components, hooks, data, services) by domain.
3. Place reusable primitives/utilities in `shared/*` only when truly generic.
4. Avoid deep relative imports by using aliases (`@/features/*`, `@/shared/*`, etc.).
5. Centralize app-level constants and metadata inside `config/*`.

## Useful scripts

- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run lint` - run ESLint
