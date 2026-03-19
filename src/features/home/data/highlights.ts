export const highlights = [
  {
    title: "Feature-first modules",
    description:
      "Keep domain logic close together in `features/*` so components, hooks, and services scale cleanly.",
  },
  {
    title: "Shared layer hygiene",
    description:
      "Common UI and helpers live in `shared/*`, avoiding copy-paste and reducing coupling between features.",
  },
  {
    title: "Config over hardcoding",
    description:
      "Project metadata and constants are centralized in `config/*` for easier changes across environments.",
  },
] as const;

export const folderGuide = [
  "`src/app` - routes, layouts, route handlers only",
  "`src/features` - business domains (home, auth, dashboard, etc.)",
  "`src/shared` - reusable UI primitives, libs, hooks, and types",
  "`src/config` - app-level configuration and constants",
] as const;

