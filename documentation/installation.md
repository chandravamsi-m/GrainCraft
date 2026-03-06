# Installation Guide

To get GrainCraft up and running on your local machine or server, follow these simple steps.

## 1. Local Preview
Since GrainCraft is a static HTML template, you can preview it by opening `index.html` directly in any modern browser. However, for the best experience (including module support), we recommend using a simple local server.

### Using VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Click **Go Live** in the bottom right corner.

### Using Node.js (npx)
If you have Node.js installed, run:
```bash
npx serve .
```

## 2. Deployment
To deploy GrainCraft, simply upload the contents of the project folder to your web host via FTP or use a service like Netlify, Vercel, or GitHub Pages.

### Netlify/Vercel
1. Connector your GitHub repository.
2. Set the build command to `(empty)` and the publish directory to `.`.
3. Deploy!
