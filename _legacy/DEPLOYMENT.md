# Deployment Instructions

## 🌐 Step-by-Step Deployment Guide

Your portfolio website is ready to deploy! Choose your preferred platform below.

---

## Option 1: GitHub Pages (Recommended - Free)

### Prerequisites

- GitHub account
- Git installed on your machine

### Steps

**Step 1: Create GitHub Repository**

1. Go to [GitHub](https://github.com)
2. Click "+" → "New repository"
3. Repository name: `ak`
4. Add description: "My Portfolio Website"
5. Click "Create repository"

**Step 2: Configure Git Locally**

```bash
cd /Volumes/MacDisk-1/PROJECTS/MY_PROJECTS/ak

# Initialize git (if not done already)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio website commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/ak.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Step 3: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Scroll left to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/root"
6. Click "Save"
7. Wait ~1-2 minutes for deployment

**Step 4: Access Your Portfolio**

- Your site will be live at: `https://YOUR_USERNAME.github.io/ak/`
- Example: `https://anilachary67.github.io/ak/`

**Step 5: Update Repository Links (Optional)**

- Go to repository "Settings" → "General"
- Update description and website URL

---

## Option 2: Netlify (Very Easy - Free)

### Steps

**Step 1: Connect GitHub**

1. Go to [Netlify](https://netlify.com)
2. Click "Sign up" → Choose "GitHub"
3. Authorize Netlify to access your GitHub

**Step 2: Deploy Site**

1. Click "New site from Git"
2. Select your "ak" repository
3. Keep default settings:
   - Build command: (leave empty)
   - Publish directory: `/` or `.`
4. Click "Deploy site"

**Step 3: Access Your Portfolio**

- Your site will be live in ~30 seconds
- Netlify will assign a random subdomain
- You can see it at the top of the Deploy logs

**Step 4: Customize Domain (Optional)**

1. Go to "Site settings" → "Site details"
2. Click "Change site name"
3. Enter a custom name (e.g., `anil-portfolio`)
4. Your URL: `https://anil-portfolio.netlify.app`

**Step 5: Use Custom Domain (Premium)**

- Click "Domain settings"
- Connect your own domain (requires DNS setup)

---

## Option 3: Vercel (Easy - Free)

### Steps

**Step 1: Connect GitHub**

1. Go to [Vercel](https://vercel.com)
2. Click "Sign up" → Choose "Continue with GitHub"
3. Authorize Vercel

**Step 2: Deploy**

1. Click "New Project"
2. Select the "ak" repository
3. Keep all default settings
4. Click "Deploy"

**Step 3: Access Your Portfolio**

- Your site deploys automatically
- Check the deployment URL (provided on the dashboard)
- Automatic deployments on every GitHub push

---

## Option 4: Traditional Web Hosting

If you have web hosting (GoDaddy, Bluehost, etc.):

### Via FTP

1. Get FTP credentials from your hosting provider
2. Use an FTP client (FileZilla, Cyberduck, WinSCP)
3. Connect to your server:
   - Host: your-domain.com
   - Username: your-ftp-username
   - Password: your-ftp-password
4. Upload all files to `public_html/` or `www/` folder
5. Access via `https://your-domain.com`

### Via cPanel File Manager

1. Log in to cPanel
2. Open "File Manager"
3. Navigate to `public_html`
4. Upload all files
5. Access via `https://your-domain.com`

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Portfolio loads without errors
- [ ] All navigation links work
- [ ] Social media links are correct
- [ ] Resume PDF downloads
- [ ] Contact form works
- [ ] Mobile view is responsive
- [ ] Images load properly
- [ ] All animations/effects work
- [ ] Page loads in under 3 seconds
- [ ] No console errors (F12)

---

## Update & Maintain Your Portfolio

### Making Changes with GitHub Pages/Netlify

Any changes you push to GitHub automatically deploy:

```bash
# Edit files locally
# Make your changes...

# Commit and push
git add .
git commit -m "Update portfolio: added new project"
git push origin main

# Changes go live automatically in ~30 seconds
```

### Rolling Back Changes

If something breaks:

```bash
# View commit history
git log --oneline

# Revert to previous version
git revert [commit-hash]
git push origin main
```

---

## Performance Optimization

### Optimize Images (When Added)

- Use TinyPNG or ImageOptim to compress
- Use modern formats: WebP, AVIF
- Recommended size: max 100KB per image

### Minify Code (Optional)

- Use online tools or build processes
- Reduces file sizes by 20-30%

### Monitor Performance

- Use Lighthouse (Chrome DevTools)
- Use PageSpeed Insights
- Aim for 90+ scores

---

## SSL Certificate

Most platforms provide FREE SSL:

- **GitHub Pages**: Automatic HTTPS
- **Netlify**: Automatic HTTPS
- **Vercel**: Automatic HTTPS
- **Traditional Hosting**: Ask provider for free SSL

---

## Custom Domain Setup

If you want your own domain (e.g., anil-portfolio.dev):

### Option 1: Use Netlify

1. Purchase domain from Namecheap, GoDaddy, etc.
2. In Netlify: Site settings → Domain management
3. Add your custom domain
4. Update nameservers (instructions provided)
5. Wait 24-48 hours for DNS propagation

### Option 2: Use Traditional Hosting

1. Purchase domain
2. Point domain nameservers to host
3. Upload files via FTP/cPanel
4. Setup SSL certificate

---

## Monitoring & Analytics

### Add Google Analytics

Edit `index.html`, add before `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

Get your ID from Google Analytics dashboard.

### Monitor Uptime

Use free services:

- [Uptime Robot](https://uptimerobot.com) - Alerts if site goes down
- [Pingdom](https://www.pingdom.com) - Performance monitoring
- [StatusCake](https://www.statuscake.com) - Uptime monitoring

---

## Troubleshooting Deployments

| Issue              | Solution                                    |
| ------------------ | ------------------------------------------- |
| Site shows 404     | Check file paths, ensure index.html in root |
| Styles not loading | Clear cache, check CSS file path            |
| Links broken       | Verify all URLs in HTML                     |
| Mobile menu broken | Check JavaScript errors (F12)               |
| Slow loading       | Optimize images, minify CSS/JS              |
| Deploy failed      | Check for syntax errors in HTML/CSS         |

---

## Next Steps After Deployment

1. **Share Your Portfolio**

   - LinkedIn profile link
   - Resume/CV
   - Email signature
   - GitHub profile

2. **Monitor Engagement**

   - Track views with Analytics
   - Monitor uptime
   - Check contact form submissions

3. **Keep It Updated**

   - Add new projects
   - Update experience
   - Refresh skills
   - Regular commits to GitHub

4. **Security**
   - Enable 2FA on GitHub
   - Keep dependencies updated
   - Monitor for vulnerabilities

---

## Support Resources

- **GitHub Pages Help**: https://docs.github.com/en/pages
- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **HTML/CSS Help**: https://developer.mozilla.org

---

## Questions?

Refer to platform-specific documentation or contact platform support:

- GitHub: support.github.com
- Netlify: support.netlify.com
- Vercel: vercel.com/support

---

**Your portfolio is now live on the internet! 🎉**

Remember to update your social profiles and start networking! 💼
