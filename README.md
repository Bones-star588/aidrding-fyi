# aidrding.fyi

Single-page academic profile for Ding Rui.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Publish

The GitHub Pages workflow publishes the site without the custom-domain file, so the
GitHub Pages URL remains available while DNS is being prepared.

To connect `aidrding.fyi` after GitHub Pages is live:

1. In the GitHub repository, open **Settings → Pages** and set the custom domain to
   `aidrding.fyi`.
2. Point the apex `A` records in Cloudflare DNS to GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Point `www` to `Bones-star588.github.io` with a `CNAME` record.
4. Enable HTTPS after GitHub finishes certificate provisioning.

The page remains usable without JavaScript. The copy-email buttons are progressively enhanced.
