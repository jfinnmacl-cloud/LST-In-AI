# Local Systems Theory in AI — Course Scaffold

This scaffold contains a static, deployable landing page for **Local Systems Theory in AI**.

It includes:

- landing page course summary
- Core / Intermediate / Advanced track descriptions
- 33-week curriculum outline
- 20-question placement assessment
- score calculation and track placement
- enrollment applicant form that appears only after all 20 questions are answered
- local storage application capture
- JSON export for submitted applications
- markdown source documents for syllabus, questionnaire, and social media copy

## Run locally

```bash
npm run start
```

Then open:

```text
http://localhost:4173
```

No build system is required. This is plain HTML, CSS, and JavaScript.

## File structure

```text
lst-ai-course-scaffold/
├── package.json
├── README.md
└── src/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── app.js
    │   └── course-data.js
    └── content/
        ├── syllabus.md
        ├── questionnaire.md
        └── social-media-copy.md
```

## Placement scoring

Each assessment answer is worth 1 to 4 points.

| Score | Track |
|---:|---|
| 20–43 | Core |
| 44–66 | Intermediate |
| 67–80 | Advanced |

## Deployment

Because the site is static, you can deploy the `src/` folder to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any standard static host.

## Next implementation steps

1. Replace localStorage submission with a backend endpoint or form service.
2. Add email confirmation.
3. Add admin dashboard for reviewing applications.
4. Add authentication if students need private track dashboards.
5. Split course modules into track-specific pages.
