# Dashun Yan — Academic Homepage (v2.1)

Static academic website prepared for GitHub Pages at:

`https://empty917.github.io/phd_work/`

No build tools or framework are required.

## Project pages

- `projects/work1/` — **CasiaHand** project page (implemented in v2)
- `projects/spice/` — **SPICE** project page (retained from v1)
- `projects/work3/` — reserved standalone page for Work 03

Standalone URLs after deployment:

- `https://empty917.github.io/phd_work/projects/work1/`
- `https://empty917.github.io/phd_work/projects/spice/`
- `https://empty917.github.io/phd_work/projects/work3/`

## Work 01 — CasiaHand

The page summarizes:

- 15-DoF / 7-actuator anthropomorphic hand architecture
- palm-integrated tendon drive
- fully actuated thumb + under-actuated non-thumb fingers
- rigid-flexible composite finger design
- motor-tendon-spring position control
- force and payload performance
- the proposed three-level under-actuated hand dexterity benchmark
- thumb evaluation, GRASP-taxonomy coordination evaluation, and dynamic hand-object interaction evaluation

The published IEEE PDF is **not bundled in this package**. The page links to the DOI instead:

`https://doi.org/10.1109/LRA.2025.3555161`

If you later want to host an author-allowed manuscript, add that file separately and change the paper button.

### CasiaHand video filenames

Copy these files into:

`assets/videos/casiahand/`

using these **exact case-sensitive filenames**:

1. `Video_1_Dexterity.mp4` — 720 × 1280 (9:16 portrait)
2. `Video_2_Payloadtest.mp4` — 720 × 960 (3:4 portrait)
3. `Video_3_ThumbgripEvaluation.mp4` — 1440 × 720 (2:1 landscape)
4. `Video_4_GRASPtaxonomyEvaluation.mp4` — 1280 × 720 (16:9 landscape)
5. `Video_5_Hand-objectEvaluation.mp4` — 1280 × 720 (16:9 landscape)

The HTML is already wired to these paths and now reserves each video's native aspect ratio before the media file is present. When a valid MP4 loads, the placeholder automatically disappears and the browser video player becomes visible. **No HTML edit is required.**

## Work 02 — SPICE video filenames

### GAG module — 3 slots

- `assets/videos/gag/gag-01.mp4`
- `assets/videos/gag/gag-02.mp4`
- `assets/videos/gag/gag-03.mp4`

### Spatial Reasoning Capability Evaluation — 8 slots, 2 × 4 on desktop

- `assets/videos/spatial_reasoning/spatial-01.mp4` ... `spatial-08.mp4`

### Zero-shot Grasp Evaluation — 8 slots, 4 × 2 on desktop

- `assets/videos/zero_shot/zeroshot-01.mp4` ... `zeroshot-08.mp4`

## Anonymous-review setting for SPICE

The SPICE page currently contains:

```html
<meta name="robots" content="noindex, nofollow" />
```

This reduces normal search-engine indexing during anonymous review, but it does **not** make the URL private. Anyone who knows the URL can still open it.

When anonymous review is over, remove that line from:

`projects/spice/index.html`

and commit the change.

## GitHub Pages deployment to `phd_work`

1. Create the public repository `empty917/phd_work`.
2. Upload the **contents of this folder** to the repository root. Do not upload the outer `academic_homepage_v2` directory as another nested folder.
3. Repository root should contain `index.html`, `.nojekyll`, `assets/`, `projects/`, and `README.md`.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`.
7. Save and wait for deployment.

The final homepage should be:

`https://empty917.github.io/phd_work/`

## Adding the videos later

For CasiaHand:

1. On your local copy, open `assets/videos/casiahand/`.
2. Copy the five MP4 files there with the exact filenames listed above.
3. Test locally if desired.
4. Upload/commit the five MP4 files to the same folder in GitHub.
5. GitHub Pages will redeploy automatically.

For SPICE, follow the equivalent paths listed above.

## Local preview

From the website root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.
