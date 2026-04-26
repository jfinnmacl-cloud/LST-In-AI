# LST Public App - Deployment Guide

## Build for Production

```bash
npm run build
```

This creates a `dist` folder with all static files.

## Hosting Options

### Option 1: Standard Web Hosting (cPanel, Plesk, etc.)
1. Upload the contents of the `dist` folder to your web root (usually `public_html`, `www`, or `htdocs`)
2. The `.htaccess` file in `dist` handles SPA routing automatically
3. Done!

### Option 2: Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- The `_redirects` file is already included

### Option 3: Vercel
- Build command: `npm run build`
- Output directory: `dist`
- The `_redirects` file is already included

### Option 4: GitHub Pages
- Use the `dist` folder as the source
- Enable SPA routing with the included files

### Option 5: IIS (Windows Hosting)
- Upload `dist` contents to your web root
- The `web.config` file handles routing

## Files Included in Build

- `index.html` - Entry point
- `_redirects` - Netlify/Vercel SPA routing
- `.htaccess` - Apache SPA routing
- `web.config` - IIS SPA routing
- `assets/` - All CSS, JS, and static assets

## Mobile & Desktop Ready

✓ Fully responsive design
✓ Mobile-first approach
✓ Touch-optimized (44px minimum touch targets)
✓ Desktop enhanced (eerie effects, cursor trails, particle effects)
✓ Works on all modern browsers
✓ Respects `prefers-reduced-motion` for accessibility

## Eerie Features

- Glitch effects that intensify during questionnaire
- Particle systems (desktop only)
- Scanline effects
- Mouse-follow glow
- Ripple effects on buttons
- Responsive horror-themed UI
- Framer Motion animations

## Post-Deployment Checklist

- [ ] Test on mobile device
- [ ] Test on desktop
- [ ] Verify all routes work (refresh on `/questionnaire`, `/modules`, etc.)
- [ ] Check browser console for errors
- [ ] Test questionnaire flow
- [ ] Verify application form works
- [ ] Test archive/export functionality

## Support

For issues, check browser console or contact your hosting provider if routing fails.
