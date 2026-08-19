# Dashun Yan — Academic Homepage (v1)

Static academic website designed for GitHub Pages. No build tools or framework are required.

## Structure

- `index.html` — academic homepage
- `projects/work1/` — reserved standalone page for Work 01
- `projects/spice/` — SPICE project page (implemented)
- `projects/work3/` — reserved standalone page for Work 03
- `assets/papers/SPICE_Revision_Manuscript.pdf` — current SPICE manuscript
- `assets/images/spice/` — figures extracted from the manuscript
- `assets/videos/` — upload experiment videos here

## Video filenames already wired into the page

### GAG module — 3 slots

- `assets/videos/gag/gag-01.mp4`
- `assets/videos/gag/gag-02.mp4`
- `assets/videos/gag/gag-03.mp4`

### Spatial Reasoning Capability Evaluation — 8 slots, 2 × 4 on desktop

- `assets/videos/spatial_reasoning/spatial-01.mp4` ... `spatial-08.mp4`

### Zero-shot Grasp Evaluation — 8 slots, 4 × 2 on desktop

- `assets/videos/zero_shot/zeroshot-01.mp4` ... `zeroshot-08.mp4`

If these exact files are uploaded, placeholders automatically disappear once the browser loads each video. No HTML change is required.

## GitHub Pages deployment

### Recommended: personal root site

1. Create a repository named `empty917.github.io` under the `empty917` account.
2. Copy all files from this folder to the repository root.
3. Push to the `main` branch.
4. In **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`.
5. The homepage will be available at `https://empty917.github.io/`.
6. Standalone project links will be:
   - `https://empty917.github.io/projects/work1/`
   - `https://empty917.github.io/projects/spice/`
   - `https://empty917.github.io/projects/work3/`

### Alternative: reuse `mywork_demonstration_page`

If you replace the content of the existing `mywork_demonstration_page` repository and enable Pages, relative links still work. The site URL will normally be under `https://empty917.github.io/mywork_demonstration_page/`.

## Easy edits

- Profile portrait: add `assets/images/profile.jpg` and replace the `profile-placeholder` block in `index.html` with an `<img>`.
- GitHub/ORCID links: already populated.
- Google Scholar / Email / CV: add once public URLs/files are ready.
- Change project titles for Work 01 / Work 03 without changing their stable URLs.

## Local preview

From this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.
