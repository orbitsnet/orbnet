# GitHub Pages Deployment Guide - Orbit Net

## ✅ Setup Complete

Your Orbit Net website has been configured for automatic deployment to GitHub Pages.

## 🔗 Repository
- **GitHub Repository**: https://github.com/orbitsnet/orbnet
- **Custom Domain**: orbitsnet.com

## 🚀 Automatic Deployment

The website will automatically deploy whenever you push changes to the `main` branch.

### How it works:
1. You make changes to the code locally
2. Commit your changes: `git add . && git commit -m "Your message"`
3. Push to GitHub: `git push origin main`
4. GitHub Actions automatically builds and deploys your site
5. Your website updates at orbitsnet.com within 1-2 minutes

## 📁 Files Created

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
2. **`public/CNAME`** - Custom domain configuration for orbitsnet.com
3. **`public/404.html`** - Custom 404 error page
4. **`vite.config.ts`** - Updated with base path configuration

## 🔄 Making Updates

To update your website:

```bash
# Navigate to project directory
cd "d:\Campaign website\New  website 1\orbit net\swift-connect-hub"

# Make your changes, then:
git add .
git commit -m "Description of your changes"
git push origin main
```

## 📊 Monitoring Deployments

1. Go to: https://github.com/orbitsnet/orbnet/actions
2. You'll see all deployment runs
3. Green checkmark = successful deployment
4. Red X = deployment failed (check logs for errors)

## 🌐 Domain Configuration

Your custom domain `orbitsnet.com` is configured via the CNAME file. Make sure your DNS settings point to:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Or use CNAME record pointing to: `orbitsnet.github.io`

## 🛠️ Build Process

The deployment process:
1. Checks out your code
2. Installs Node.js 20
3. Installs dependencies (`npm ci`)
4. Builds the project (`npm run build`)
5. Deploys the `dist` folder to GitHub Pages

## ⚡ Local Development

To run locally:
```bash
npm run dev
```
Site will be available at: http://localhost:8080

## 📝 Important Notes

- Changes pushed to `main` branch deploy automatically
- Build time: ~2-3 minutes
- DNS propagation can take up to 24 hours for new domains
- The CNAME file ensures your custom domain is preserved

## 🎉 Your Website is Live!

Once GitHub Actions completes the first deployment, your website will be live at:
- https://orbitsnet.com
- https://www.orbitsnet.com (if configured)

---

**Last Updated**: December 16, 2025
**Contact**: (888) 964-3161
