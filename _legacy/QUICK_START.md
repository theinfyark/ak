# Quick Start Guide - Portfolio Website

## 🚀 Get Started in 30 Seconds

### 1. View Your Portfolio Locally

**Option A: Open in Browser Directly**

```bash
# Navigate to your project folder and open index.html in your browser
# macOS:
open index.html

# Linux/Windows:
# Right-click index.html → Open with → Your Browser
```

**Option B: Use Local Server (Recommended)**

```bash
# Navigate to project directory
cd /Volumes/MacDisk-1/PROJECTS/MY_PROJECTS/ak

# Start a local server
python3 -m http.server 8000

# Open browser and visit:
# http://localhost:8000
```

---

## 📁 File Overview

| File                   | Purpose                               |
| ---------------------- | ------------------------------------- |
| `index.html`           | Main portfolio content (all sections) |
| `styles.css`           | Visual styling & responsive design    |
| `script.js`            | Interactive features & animations     |
| `AnilKumarPResume.pdf` | Your resume (linked in portfolio)     |
| `README.md`            | Detailed documentation                |

---

## ✨ Features Your Portfolio Includes

✅ **Professional Design**

- Modern gradient color scheme
- Smooth animations
- Professional typography

✅ **Full Content**

- Executive summary
- 8+ years experience timeline
- All technical skills organized by category
- Notable projects (InsureAI, NBSI, AR Cards, etc.)
- Achievements & awards
- Contact information

✅ **Interactive Elements**

- Smooth navigation
- Mobile-responsive menu
- Social media links (GitHub, LinkedIn, Email, Phone)
- Animated scroll effects
- Contact form
- Scroll-to-top button

✅ **Mobile Optimized**

- Works on all devices
- Touch-friendly navigation
- Responsive images and text

---

## 🎨 Quick Customization

### Change Primary Color

Edit `styles.css`, line 11:

```css
--primary-color: #0066ff; /* Change this to any hex color */
```

### Update Your Name

Edit `index.html`, line 56:

```html
<h1 class="hero-title">
  Hi, I'm <span class="highlight">YOUR NAME HERE</span>
</h1>
```

### Update Contact Information

Edit `index.html`, lines 73-81 for social links
Edit `index.html`, lines 313-328 for contact details

### Add/Remove Experience

Edit Experience section in `index.html` (lines 100-180)

### Add/Remove Skills

Edit Skills section in `index.html` (lines 195-240)

### Add/Remove Projects

Edit Projects section in `index.html` (lines 265-310)

---

## 🌐 Deploy Your Portfolio

### Deploy to GitHub Pages (Free, Easiest)

```bash
# 1. Initialize git (if not already done)
git init
git add .
git commit -m "Create portfolio website"

# 2. Go to GitHub and create a new repository named "ak"
# 3. Push your code
git remote add origin https://github.com/YOUR_USERNAME/ak.git
git branch -M main
git push -u origin main

# 4. Go to repository Settings → Pages
# 5. Select "Deploy from a branch" and choose "main"
# 6. Your site will be live at: https://YOUR_USERNAME.github.io/ak/
```

### Deploy to Netlify (Free)

```bash
# 1. Go to netlify.com
# 2. Click "New site from Git"
# 3. Connect your GitHub repository
# 4. Deploy automatically whenever you push to GitHub

# Your site will be live at: https://[custom-name].netlify.app
```

### Deploy to Vercel (Free)

```bash
# 1. Go to vercel.com
# 2. Click "New Project"
# 3. Import from GitHub
# 4. Vercel handles deployment automatically

# Your site will be live at: https://[project-name].vercel.app
```

---

## 📱 Testing Checklist

- [ ] Open index.html in browser
- [ ] Click navigation links (smooth scroll works?)
- [ ] Check mobile view (hamburger menu works?)
- [ ] Hover over buttons (animations work?)
- [ ] Click social media links
- [ ] Test contact form
- [ ] Scroll through entire page
- [ ] Test on different screen sizes

---

## ⌨️ Keyboard Shortcuts

| Key | Action          |
| --- | --------------- |
| `/` | Jump to home    |
| `c` | Jump to contact |

---

## 🔗 Your Social Links to Update

Edit these in `index.html`:

```html
<!-- GitHub -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">
  <!-- LinkedIn -->
  <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
    <!-- Email -->
    <a href="mailto:YOUR_EMAIL@gmail.com">
      <!-- Phone -->
      <a href="tel:+91XXXXXXXXXX"></a></a></a
></a>
```

---

## 📞 Contact Information Currently Set

- **Email**: anilachary.p@gmail.com
- **Phone**: +91 9885155454
- **Location**: Bengaluru, India
- **GitHub**: github.io/anilachary67

⚠️ **Update these with your own information!**

---

## 🐛 Troubleshooting

**Portfolio not loading?**

- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing mode
- Check browser console (F12 → Console)

**Styles look wrong?**

- Ensure styles.css is in the same folder as index.html
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

**Mobile menu not working?**

- Check script.js is loaded
- Test in different browser
- Check browser console for errors

**Links don't work?**

- Verify URLs are correct
- Test in new tab/window
- Check for typos in href attributes

---

## 💡 Next Steps

1. **✅ View locally** - Open index.html in browser
2. **✏️ Customize** - Update your information
3. **🧪 Test** - Click through all sections and links
4. **📤 Deploy** - Push to GitHub and set up GitHub Pages
5. **🎉 Share** - Send your portfolio link to recruiters!

---

## 📚 Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Font Awesome Icons](https://fontawesome.com)
- [GitHub Pages Guide](https://pages.github.com)

---

## 📧 Quick Update Summary

Your portfolio includes:

- ✅ Your full resume content
- ✅ 8+ years experience timeline
- ✅ All your technical skills
- ✅ Notable projects
- ✅ Achievements & awards
- ✅ Contact information
- ✅ Social media links
- ✅ Professional design

**Everything is ready to go! Just customize with your personal touches and deploy.** 🚀

---

Happy networking! 🎉
