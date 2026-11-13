# aidrding.fyi

Single-page academic profile for Ding Rui.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Publish

The repository includes a `CNAME` file for `aidrding.fyi`. To publish with GitHub Pages:

1. Push this repository to GitHub.
2. Enable Pages from the `main` branch root.
3. Point the apex `A` records in Cloudflare DNS to GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. Point `www` to the GitHub Pages hostname with a `CNAME` record.
5. Enable HTTPS after GitHub finishes certificate provisioning.

The page remains usable without JavaScript. The copy-email buttons are progressively enhanced.
