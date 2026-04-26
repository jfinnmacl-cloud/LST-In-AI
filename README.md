# Local Systems Theory Public App

A complete Vite + React public intake app for Local Systems Theory. It includes the landing page, curriculum map, readiness questionnaire, track result, follow-up application, local intake archive, and JSON export flow.

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Current behavior

- Public landing page
- Root and applied LST principles
- Public curriculum module map
- Thesis buttons that unlock progressively after assessment and application
- 20-question readiness assessment
- Core / Intermediate / Advanced scoring
- Domain scoring profile
- Follow-up application after questionnaire completion
- Required-field and email validation
- Review step before final application submission
- Browser-local application archive
- Per-application and full-archive JSON export

## Next integration step

Replace `saveStoredApplication()` in `src/App.jsx` with your backend call, database insert, or form handler. The local storage archive is intentionally kept as a deployable standalone fallback.
