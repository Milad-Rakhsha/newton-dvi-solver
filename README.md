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
