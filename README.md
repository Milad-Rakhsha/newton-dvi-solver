# Newton DVI

Project website for Newton DVI: GPU-accelerated multibody dynamics with
frictional contact, including robot-learning results and Go2 policy transfer.

The website is served from [`index.html`](index.html) at the repository root:

https://milad-rakhsha.github.io/newton-dvi-solver/

## Enable GitHub Pages

1. Open this repository’s **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main**, choose **/ (root)**, and click **Save**.

GitHub publishes the root `index.html`. The `.nojekyll` file preserves the static
site without a build step. Future pushes to `main` update the website.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/.

## Website maintenance

- `index.html`: page content and task-to-video/plot mappings.
- `assets/style.css`: visual styling.
- `assets/showcase.js`: coordinated task video, plot, and caption updates.
- `assets/images/` and `assets/videos/`: the media used by the page.

After modifying CSS or JavaScript, refresh its `?v=` content hash in
`index.html` so returning visitors receive the updated asset. Videos are
ordinary Git files, including the compressed Go2 hardware recording.

## RL figure sources

The seven task plots are copied without restyling from
`Newton-DVI-tech-report/results/reinforcement_learning/figures/`.
The current source figures were rendered on October 22, 2026; their run
selection is recorded in the report's `LATEST_RESULTS.md` and
`processed/develop_matrix_20261014/manifest.json`. These include H1's
recovery-10 rerun, Humanoid's MJWarp reference, and the three-solver DR Legs
comparison with Kamino P-ADMM.

| Website image in `assets/images/` | Source figure |
| --- | --- |
| `learning-current-ant.png` | `ant_jacobi_mjwarp_apgd_progress.png` |
| `learning-humanoid.png` | `humanoid_jacobi_mjwarp_apgd_progress.png` |
| `learning-current-h1.png` | `h1_jacobi_mjwarp_apgd_progress.png` |
| `learning-updated-g1.png` | `g1_jacobi_mjwarp_apgd_progress.png` |
| `learning-current-go2.png` | `go2_jacobi_mjwarp_apgd_progress.png` |
| `learning-current-anymal-c.png` | `anymal_c_jacobi_mjwarp_apgd_progress.png` |
| `drlegs-dvi-kamino-comparison.png` | `dr_legs_solver_comparison.png` |

When replacing a plot, update its `?v=` value in every `index.html` reference
to the first 12 characters of the image's SHA-256 hash. Check the task caption
and any numerical findings against the source summary as well.
