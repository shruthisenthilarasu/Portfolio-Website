# Portfolio Website

A modern, minimal personal portfolio website with a newspaper-style editorial design, built with React, TypeScript, and Tailwind CSS.

## Features

- **Newspaper-style Design**: Clean, editorial layout inspired by classic newspapers
- **Responsive**: Fully responsive design for desktop, tablet, and mobile
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **SEO-Friendly**: Semantic HTML and optimized structure

## Development

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Builds the site to the `docs` folder for GitHub Pages deployment.

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The GitHub Action will automatically build and deploy your site
   - Check the "Actions" tab in your repository to see the deployment status
   - Your site will be available at: `https://shruthisenthilarasu.github.io/Portfolio-Website/`

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run build
git add docs
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Then in repository settings, set the source to the `/docs` folder.

## Project Structure

```
Portfolio Website/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── .github/
│   └── workflows/     # GitHub Actions workflows
└── docs/              # Build output (for GitHub Pages)
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Hosting

## License

Personal portfolio project - all rights reserved.

