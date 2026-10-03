# The Pragmatic Architect

Architecture posts, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321/pragmatic-architect/
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Writing a post

Add a Markdown file to `src/content/posts/`:

```markdown
---
title: 'My post'
description: 'One-line summary shown in lists and previews.'
pubDate: 2026-10-03
tags: ['decisions']
draft: false   # set to true to hide from the site
---

Post body…
```

The filename becomes the URL slug, so `my-post.md` is served at `/posts/my-post/`.

## Deploy

Pushes to `main` build and publish the site via `.github/workflows/deploy.yml`.
To enable it, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
The site is served at `https://glgit.github.io/pragmatic-architect/`. If you use a custom domain
or rename the repo, update `site` and `base` in `astro.config.mjs`.
