# Security notes

This site is designed for static hosting on GitHub Pages.

## Current security posture

- No backend server
- No user accounts
- No database
- No payment handling
- No third-party JavaScript
- Local CSS and JavaScript only
- External links use `rel="noreferrer"`
- Homepage includes a restrictive Content Security Policy meta tag

## Deployment checklist

1. In GitHub Pages settings, deploy from `main` and `/root`.
2. Add the custom domain `edinburgharts.info`.
3. Wait for GitHub Pages DNS checks to pass.
4. Turn on `Enforce HTTPS` when GitHub allows it.
5. Keep the domain verified in GitHub to reduce subdomain takeover risk.
6. Avoid adding third-party scripts unless they are genuinely needed.

## If adding forms later

Use a trusted form provider or a tiny backend with spam protection. Do not put API keys or private credentials in frontend files.
