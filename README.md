# Literary Cosmos Atlas

An interactive Chinese atlas of global literary theory and current research. Forty-two book portals connect classic movements, methods, thematic frontiers, regional fields, and synthesis volumes to source-led knowledge worlds.

## Highlights

- GSAP entrance, pinned bookshelf navigation, book-opening transitions, and staged research reveals.
- Three.js Earth, moon, orbital books, geographic theory markers, atmospheric light, and meteor trails.
- Phaser lunar campaign with three waves, boss phases, upgrades, skills, power allocation, touch controls, pause, and restart.
- Forty-two searchable volumes and a relationship constellation with desktop and mobile-specific views.
- Two complete editorial sources exposed as 2,022 research blocks, 149 table fragments, 16 figures, and supplementary front matter, appendices, directories, resources, and references.
- Twenty-six new source-mapped volumes with eight automatically graded, primary-source-cited questions each.
- Responsive, accessible static site with no production build step.

## Research Corpus

The generated files are `data/research-atlas.json` and `frontier-catalog.js`. Rebuild them after changing either editorial source:

```powershell
$env:LITERARY_SKIP_PORTRAITS='1'
python tools/build_research_atlas.py
```

The generator validates chapter continuity, complete block assignment, eight questions per new volume, source citations, and balanced answer positions before writing output. Omit `LITERARY_SKIP_PORTRAITS` when intentionally refreshing Wikimedia Commons portraits.

## Local Preview

```shell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173`.

## Deployment

This repository is designed for GitHub-connected deployments on Vercel or Netlify.

- Vercel: import the GitHub repository and keep the default static output settings.
- Netlify: publish directory is `.` and build command is empty, as defined in `netlify.toml`.

Production endpoints:

- `https://literarycosmo.qzz.io/`
- `https://literary-cosmos-atlas.vercel.app/`
- `https://literary-cosmos-atlas.netlify.app/`
