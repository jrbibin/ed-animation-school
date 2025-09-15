# 🚀 Netlify Deployment Guide for ED Animation School

## Quick Setup (Recommended)

### Method 1: Direct GitHub Integration

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ED Animation School website"
   git branch -M main
   git remote add origin https://github.com/yourusername/ed-animation-school.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - **Build settings:**
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Method 2: Drag & Drop Deployment

1. **Build your project locally:**
   ```bash
   npm run netlify-deploy
   ```

2. **Deploy manually:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to Netlify

## 📁 Project Configuration

✅ **netlify.toml** - Already configured with:
- Build settings
- SPA redirects
- Performance headers
- Security headers

✅ **package.json** - Updated with:
- `netlify-deploy` script
- All necessary dependencies

## 🎯 What's Included

### Automatic Features:
- ✅ **HTTPS SSL Certificate**
- ✅ **Global CDN**
- ✅ **Automatic deployments** (when connected to GitHub)
- ✅ **Preview deployments** for pull requests
- ✅ **Form handling** (if you add contact forms)
- ✅ **Custom domain support**

### Performance Optimizations:
- ✅ **Asset caching** (1 year for static assets)
- ✅ **Gzip compression**
- ✅ **SPA routing** support
- ✅ **Security headers**

## 🌐 Custom Domain Setup

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `edanimationschool.com`)

2. **Update DNS records:**
   - Add CNAME record: `www` → `your-site-name.netlify.app`
   - Add A record: `@` → `75.2.60.5`

## 📊 Free Tier Limits

- ✅ **100GB bandwidth/month**
- ✅ **300 build minutes/month**
- ✅ **Unlimited sites**
- ✅ **1 concurrent build**

## 🔧 Environment Variables (if needed)

1. **In Netlify Dashboard:**
   - Go to Site settings → Environment variables
   - Add any required variables

## 🚨 Troubleshooting

### Build Fails?
- Check Node.js version (set to 18 in netlify.toml)
- Verify all dependencies are in package.json
- Check build logs in Netlify dashboard

### 404 Errors?
- SPA redirects are configured in netlify.toml
- Ensure publish directory is set to `dist`

### Slow Loading?
- Assets are automatically cached
- Use Netlify's built-in analytics to monitor

## 🎉 Your Site Will Be Live At:
`https://your-site-name.netlify.app`

---

**Need help?** Check Netlify's excellent documentation or their community forum!