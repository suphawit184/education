<!-- Short, focused instructions for AI coding agents working on this repo -->
# Copilot / AI agent instructions — education (React + Vite)

This file captures project-specific knowledge an automated coding assistant needs to be immediately productive.

- Project type: React (JSX) app scaffolded with Vite and Tailwind CSS. Entry point: `src/main.jsx` -> `src/App.jsx`.
- Dev commands (package.json):
  - Start dev server: `npm run dev` (runs `vite`)
  - Build production: `npm run build` (runs `vite build`)
  - Preview build: `npm run preview` (runs `vite preview`)
  - Lint: `npm run lint` (runs `eslint .`)

- Key files to read before editing:
  - `src/main.jsx` — app bootstrap, imports `index.css` and `App.jsx`.
  - `src/App.jsx` — main application UI and primary state handling (Topic selection). Many UI strings are in Thai.
  - `src/Component/htmlpage.jsx` — detailed content view for Topic 1; receives an `onBack` prop from `App.jsx`.
  - `vite.config.js`, `tailwind.config.js`, `index.html` — build/webserver configuration and Tailwind content paths.

- Styling conventions:
  - Uses Tailwind classes throughout (`tailwind.config.js` references `./src/**/*.{js,ts,jsx,tsx}` and `index.html`).
  - `src/index.css` imports Tailwind. Avoid adding global styles unless needed; prefer Tailwind utility classes.

- Patterns and component-level conventions discovered:
  - `App.jsx` contains small local components (e.g., `TopicCard`) defined in the same file — follow that pattern for similar small, single-file components.
  - State is handled with React hooks (useState). Navigation between views is local state toggling (no router used). If adding navigation, prefer the existing approach or introduce `react-router-dom` consciously (it is available as a dependency).
  - Click behavior: `TopicCard` uses `onClick` to call functions passed from the parent. When modifying interactive pieces, preserve prop-driven callbacks (e.g., `HtmlPage` expects `onBack`).

- Tests & CI: No tests or CI configs were found. Do not add heavy infra without confirming with the project owner.

- When editing UX text: many UI strings and comments are in Thai. Maintain language consistency when adding strings unless instructed otherwise.

- Linting and formatting:
  - ESLint is configured via dependencies; run `npm run lint` to surface lint issues. There is no project-level ESLint config file in the repository root; be conservative with automatic rule additions.

- Common change guidelines (do these in this order):
  1. Run `npm run dev` locally to verify HMR changes.
 2. Make small, single-purpose edits and run the dev server to visually confirm styling/behavior.
 3. Run `npm run build` to verify production bundling for changes touching build config or imports.

- Examples from the codebase:
  - To implement a new page similar to Topic 1, create a new component under `src/Component/` exported as default and call it from `App.jsx` using the same pattern (pass `onBack` callback to return to the main view).
  - To add Tailwind utilities, update JSX classes in-place (e.g., `className="p-6 rounded-xl shadow-lg ..."`) and verify in the dev server.

- Integration points and external deps:
  - `react`, `react-dom`, `react-router-dom` (installed but not used in current router flow).
  - Vite plugins: `@vitejs/plugin-react` and `@tailwindcss/vite` are configured in `vite.config.js`.

- Edge cases and gotchas found:
  - The codebase mixes Thai comments and copy with English/JSX identifiers — watch for encoding or copy mistakes when editing text nodes.
  - There is no `.eslintrc` or Prettier config in the repository; style consistency follows the template's defaults. Keep edits minimal and opt for small, focused commits.

If anything in this file is unclear or you want additional examples (e.g., component extraction, adding routes, or introducing tests), tell me what to expand and I'll iterate.
