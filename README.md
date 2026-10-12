# Anagha S K · Portfolio

Personal portfolio of Anagha S K, AI Engineer at Techcrafter, Bengaluru. I build computer-vision solutions for factory floors, and this site shows that work along with a bit of the person behind it.

Built with Vite, React, TypeScript and three.js.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the built dist/
```

The dev server is also reachable from other devices on the same network, so you can open it on your phone using your computer's local IP address.

No environment variables or API keys are needed.


To change what the site says, edit `src/content/site.ts`. To swap the resume, replace `public/Anagha-S-K-Resume.pdf` and keep the same filename.

## Deploy

The site is a static single-page app, ready for Vercel. `vercel.json` rewrites every route to `index.html` so project pages work on refresh.

1. Push this repo to GitHub.
2. Import it in Vercel. The defaults work: build command `npm run build`, output directory `dist`.

After deploying, set the full address of the share image in `index.html` (the `og:image` tag) so link previews work.

## More

- `PRODUCT.md`: who the site is for and what it should do.
- `DESIGN.md`: the design system and visual decisions.

## Contact

[anagha.sakaray@gmail.com](mailto:anagha.sakaray@gmail.com) · [LinkedIn](https://www.linkedin.com/in/anagha-s-k-88aa0a259/) · [GitHub](https://github.com/Anagha-S-K)
