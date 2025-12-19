# SkillSwapCash - Cloudflare Pages Deployment

This guide explains how to deploy the SkillSwapCash React application to Cloudflare Pages.

## Prerequisites

- Cloudflare account
- Wrangler CLI installed: `npm install -g wrangler`
- Node.js 18+ installed

## Deployment Steps

### Option 1: Deploy via Wrangler CLI

1. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

2. **Build the application:**
   ```bash
   cd skillswapcash
   npm install
   npm run build
   ```

3. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy dist --project-name=skillswapcash
   ```

### Option 2: Deploy via Cloudflare Dashboard

1. **Login to Cloudflare Dashboard:**
   - Go to https://dash.cloudflare.com
   - Navigate to Pages

2. **Connect to GitHub:**
   - Click "Create a project"
   - Connect your GitHub repository
   - Select the `nrk8286/a` repository
   - Select the `copilot/build-skillswapcash-frontend` branch

3. **Configure Build Settings:**
   - **Build command:** `cd skillswapcash && npm install && npm run build`
   - **Build output directory:** `skillswapcash/dist`
   - **Root directory:** `/`
   - **Environment variables:** (optional)
     - `NODE_VERSION`: `18`

4. **Deploy:**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your application

## Build Configuration

The project is configured with the following settings:

- **Framework:** React (Vite)
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18+

## Environment Variables (Optional)

If you need to configure API endpoints or Stripe keys:

1. In Cloudflare Pages dashboard, go to Settings > Environment variables
2. Add the following variables:
   ```
   VITE_API_BASE_URL=https://skillswapcash.com/api/v1
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

## Deployment URL

After deployment, your application will be available at:
- Production: `https://skillswapcash.pages.dev`
- Custom domain: Configure in Cloudflare Pages settings

## Continuous Deployment

Once connected to GitHub:
- Every push to the branch will trigger a new deployment
- Pull request previews are automatically created
- Rollback to previous deployments is available in the dashboard

## Local Preview

To preview the production build locally:

```bash
cd skillswapcash
npm run build
npm run preview
```

## Troubleshooting

### Build Fails

If the build fails, check:
1. Node version (should be 18+)
2. All dependencies are installed
3. Build command is correct
4. Build output directory is set to `skillswapcash/dist`

### Routing Issues

For client-side routing to work properly:
1. Cloudflare Pages automatically handles SPA routing
2. Create a `public/_redirects` file if needed:
   ```
   /* /index.html 200
   ```

## Support

For issues with Cloudflare Pages deployment:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
