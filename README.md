# Mritunjay Mishra — Portfolio

Personal portfolio website for Mritunjay Mishra (Fintech Operations, KYB & Risk Compliance Specialist).

## Deploying to GitHub Pages

The repository is pre-configured with **automated GitHub Actions deployment** and relative base paths (`base: './'`).

### Quick Setup (Recommended — Automated via GitHub Actions):

1. **Push this codebase to a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository settings:**
   - Go to your GitHub repository on `github.com`.
   - Click on **Settings** (tab at the top).
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.

3. **That's it!**
   - The included workflow file (`.github/workflows/deploy.yml`) will automatically trigger on push, compile the Vite app, and deploy the live site.
   - You can see the live URL in the Pages tab or under the repository's Deployments section (e.g. `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`).

---

### Manual Build (Alternative):

If you prefer to manually build and commit the static files:
```bash
# 1. Install dependencies
npm install

# 2. Build for production (outputs to /dist)
npm run build
```
You can deploy the contents of the `dist/` directory to your hosting branch (like `gh-pages`) or any static hosting provider.
