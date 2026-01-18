# Agent Guidelines for NovaArcade Project

## Project Overview

This is a static HTML website for NovaArcade, a mobile gaming center. The project consists of:

- `html/index.html` – Main HTML file with embedded styles, scripts, and Tailwind CSS
- `html/test.json` – A placeholder JSON file
- `LICENSE` – GNU GPL v3 license

No build system, package manager, or JavaScript framework is currently set up. The HTML uses CDN for Tailwind CSS, Font Awesome, Google Fonts, and includes an import map for React and Google GenAI (though not currently used).

## Build, Lint, and Test Commands

### Build Commands

No build process is defined. The site is static HTML/CSS/JavaScript.

To serve the site locally for testing:

```bash
# Using Python (if installed)
python3 -m http.server 8000 --directory html/

# Using Node.js `serve` (install globally: npm install -g serve)
npx serve html/

# Using any static file server
```

### Linting and Formatting

No linting or formatting configuration exists. If you add JavaScript/TypeScript, consider setting up ESLint and Prettier.

Suggested setup (optional):

```bash
npm init -y
npm install --save-dev eslint prettier eslint-config-prettier
npx eslint --init
```

**Running lint** (when lint script is added):
- `npm run lint` or `npx eslint . --fix`

### Testing

No testing framework is configured. For static HTML, manual browser testing is sufficient.

If adding JavaScript, consider Jest or Vitest.

**Running a single test** (when tests are added):
- **Jest**: `npm test -- <test-file>` or `npx jest path/to/test.spec.js`
- **Vitest**: `npm test -- --run path/to/test.spec.ts` or `npx vitest run path/to/test.spec.ts`

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements.
- Indent with 4 spaces (as seen in existing code).
- Use Chinese comments for Chinese audience; English comments for technical notes.
- Include `lang="zh-CN"` attribute on `<html>` for Chinese language.
- Use Tailwind CSS utility classes for styling; avoid inline `style` attributes except for dynamic styles.
- Place `<script>` tags at the end of `<body>` unless they are module imports.
- Use `type="module"` for ES modules; reference external scripts via CDN.

### CSS

- Use Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`.
- Custom styles should be placed in `<style>` blocks within `<head>`.
- Use CSS custom properties (variables) for theming if needed.
- Follow BEM naming if writing custom CSS (though Tailwind is preferred).

### JavaScript

- Use modern ES6+ syntax (const/let, arrow functions, template literals).
- Use `function` declarations for top-level functions (as seen in `renderGames`).
- Use `addEventListener` for DOM events; avoid inline `on*` attributes.
- Prefer template literals over string concatenation for HTML generation.
- Use descriptive variable names in camelCase.
- Use Chinese string literals for user‑facing text.
- Avoid global variables; encapsulate logic in IIFE or modules if needed.

### TypeScript (if added)

- Use strict mode (`"strict": true`).
- Define interfaces for data structures (like `Game`).
- Use `.tsx` for React components (if React is introduced).
- Place TypeScript source files in a `src/` directory, compile to `html/` or a `dist/` folder.
- **Running type check**: `npm run typecheck` or `npx tsc --noEmit`.

### Naming Conventions

- **Files**: kebab-case (e.g., `game-card.tsx`, `privacy-modal.html`).
- **Variables/functions**: camelCase.
- **Constants**: UPPER_SNAKE_CASE.
- **CSS classes**: kebab-case (Tailwind uses this automatically).
- **Component names**: PascalCase (if using React).

### Imports

- For CDN dependencies, use `<script>` and `<link>` tags in `<head>`.
- For ES modules, use `<script type="module">` with `import` statements.
- If using a bundler (like Vite), follow standard ES module imports.

### Error Handling

- Use `try...catch` for async operations that may fail (fetch, localStorage).
- Validate user input before processing.
- Provide fallback UI content if dynamic rendering fails (e.g., skeleton screens).

## File Structure

```
.
├── html/
│   ├── index.html          # Main page
│   ├── index.css           # (future) Custom CSS
│   ├── index.tsx           # (future) TypeScript entry
│   └── test.json           # Test data
├── src/                    # (future) Source code
├── public/                 # (future) Static assets
├── LICENSE
└── AGENTS.md              # This file
```

## Git Conventions

- Commit messages in Chinese (as observed in history).
- Use present tense, imperative mood: “增加声明” not “增加了声明”.
- Keep commits focused; one logical change per commit.
- Branch naming: `feature/<name>`, `fix/<name>`, `docs/<name>`.

## Agent Workflow

1. **Understand the scope** – Check if the task requires changes to HTML, CSS, JavaScript, or adding new tools.
2. **Preserve existing style** – Follow the existing code patterns (Chinese comments, Tailwind, 4‑space indents).
3. **Test manually** – Open `html/index.html` in a browser after changes.
4. **Run lint/test/typecheck if available** – If a lint script is added later, run it before committing. If TypeScript is used, run type checking.
5. **Commit changes** – Use descriptive commit messages in Chinese.

## Adding New Dependencies

If the project evolves to include a package manager:

1. Create `package.json` with `npm init -y`.
2. Install dependencies with `npm install <package>`.
3. Update `.gitignore` to exclude `node_modules/`.
4. Document the new setup in this file.

## Cursor / Copilot Rules

No `.cursorrules` or `.github/copilot-instructions.md` found. If added later, they should be followed.

## Security Notes

- Never commit secrets (API keys, passwords, `.env` files).
- Use HTTPS for CDN links.
- Sanitize any user‑generated content to prevent XSS.
- Follow privacy‑by‑design principles as outlined in the HTML’s privacy section.

## Performance

- Minimize render‑blocking resources.
- Use lazy loading for images.
- Consider adding a service worker for offline capability.

---

*This document is intended for AI agents working on the repository. Update it as the project evolves.*