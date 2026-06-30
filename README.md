# Literary Cosmos Atlas

An interactive Chinese atlas of global literary theory. Each movement is presented as a book in a scrolling shelf; opening a book enters a dedicated knowledge world with concepts, reading methods, text cases, portraits, and representative works.

## Highlights

- GSAP powered preloader, pinned bookshelf scrolling, modal world transitions, and staged content reveals.
- Three.js real Earth scene with satellite map textures, night lights, moving clouds, atmosphere glow, rotating compass, and hover sparkle effects.
- Anime.js micro-interactions for magnetic buttons, sparks, and book feedback.
- Responsive static site with no build step.

## Local Preview

```shell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173`.

## Deployment

This repository is designed for GitHub-connected deployments on Vercel or Netlify.

- Vercel: import the GitHub repository and keep the default static output settings.
- Netlify: publish directory is `.` and build command is empty, as defined in `netlify.toml`.
