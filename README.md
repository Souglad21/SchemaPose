# SchemaPose project website

Static project page for **SchemaPose: RGB-Based Category-Level Pose Estimation with Parametric Category Schema**, NeurIPS 2026.

## Preview

Run from this directory:

```sh
python -m http.server 8000
```

Open http://localhost:8000. No installation or build step is needed.

## Publish on GitHub Pages

Upload this directory's contents to the root of [Souglad21/SchemaPose](https://github.com/Souglad21/SchemaPose). In **Settings → Pages**, choose **Deploy from a branch**, **main**, and **/(root)**, then save.

Expected URL: https://souglad21.github.io/SchemaPose/

## Update

- Edit text, captions, the table, and resource buttons in `index.html`.
- Edit layout and colors in `style.css`; interactions are in `script.js`.
- Figures are in `assets/figures/`.
- The eight complete demo videos are in `assets/videos/`, with cover frames in `assets/posters/`. Videos use H.264 and support progressive playback.

Paper and code buttons currently display **Coming soon**. When ready, replace their disabled buttons with links.
