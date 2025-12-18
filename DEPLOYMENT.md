# GitHub Pages Deployment Troubleshooting

## Current Setup

- **Base Path**: `/Portfolio-Website/`
- **Build Output**: `docs/` folder
- **GitHub Actions**: Configured for automatic deployment

## If You See a Blank Page

### Step 1: Check GitHub Pages Settings

1. Go to: https://github.com/shruthisenthilarasu/Portfolio-Website/settings/pages
2. Under "Source", you have TWO options:

   **Option A: Use GitHub Actions (Recommended)**
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy on every push
   - Your site will be at: `https://shruthisenthilarasu.github.io/Portfolio-Website/`

   **Option B: Use docs folder (Alternative)**
   - Select "Deploy from a branch"
   - Branch: `main`
   - Folder: `/docs`
   - Your site will be at: `https://shruthisenthilarasu.github.io/Portfolio-Website/`

### Step 2: Check GitHub Actions

1. Go to: https://github.com/shruthisenthilarasu/Portfolio-Website/actions
2. Check if the "Deploy to GitHub Pages" workflow has run
3. If it failed, check the error logs
4. If it succeeded, wait 1-2 minutes for the site to update

### Step 3: Verify the Correct URL

Make sure you're visiting:
- ✅ `https://shruthisenthilarasu.github.io/Portfolio-Website/`
- ❌ NOT `https://shruthisenthilarasu.github.io/` (this will be blank)

### Step 4: Check Browser Console

1. Open browser developer tools (F12 or Cmd+Option+I)
2. Go to the "Console" tab
3. Look for any red error messages
4. Common issues:
   - 404 errors for assets → Check asset paths
   - CORS errors → GitHub Pages configuration issue
   - React errors → Check the error message

### Step 5: Clear Cache

1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Or clear browser cache completely

### Step 6: Manual Deployment (If GitHub Actions isn't working)

If GitHub Actions isn't working, you can deploy manually:

```bash
npm run build
git add docs
git commit -m "Update GitHub Pages"
git push origin main
```

Then in GitHub Settings → Pages, select "Deploy from a branch" → `main` → `/docs`

## Current Configuration

- ✅ Vite base path: `/Portfolio-Website/`
- ✅ React Router basename: `/Portfolio-Website`
- ✅ 404.html redirect file created
- ✅ Build outputs to `docs/` folder
- ✅ GitHub Actions workflow configured

## Still Having Issues?

1. Check the browser console for specific error messages
2. Verify the GitHub Pages URL is correct (must include `/Portfolio-Website/`)
3. Check that the `docs` folder contains `index.html` and `assets/` folder
4. Verify GitHub Pages is enabled in repository settings

