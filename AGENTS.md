# AGENTS.md

## Cursor Cloud specific instructions

### What this project is
A fully static personal portfolio website. There is no build system, package manager, framework, or backend. It is just three files served as-is: `index.html`, `styles.css`, and `script.js` (vanilla JS, with Font Awesome / Google Fonts loaded from CDNs). See `README.md` and `QUICK_START.md` for feature and customization details.

### Dependencies
None to install — there is no `package.json`, `requirements.txt`, lockfile, or similar. The only runtime requirement is Python 3 (already present) to serve the static files. The update script is therefore effectively a no-op.

### Running (development)
Serve the directory with any static file server, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/`. Opening `index.html` directly via `file://` also works but a server is preferred (matches the `.vscode` Live Server config on port 5501).

### Lint / test / build
There are no lint, test, or build steps configured for this repo — it is plain static HTML/CSS/JS. Verification is done by loading the page in a browser and exercising the interactive features (nav smooth-scroll, mobile menu, contact form, scroll-to-top).

### Non-obvious caveat: contact form uses `mailto:`
The contact form (`#contactForm` in `index.html`, handler in `script.js`) does not POST to a backend. On submit it (1) shows a green in-page success notification, then (2) sets `window.location.href` to a `mailto:` link. On a VM/desktop with no configured email client, step 2 pops an OS "Choose preferred application / mail reader" dialog. This is expected behavior, not a bug — dismiss the dialog. The success notification is the signal that the form logic ran correctly.
