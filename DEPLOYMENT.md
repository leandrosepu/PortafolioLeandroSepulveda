# 🚀 Deployment Guide

Complete guide to deploy your Leandro Sepúlveda cybersecurity portfolio.

## 🎯 Recommended: Deploy to Vercel (Free & Easy)

Vercel is the creator of Next.js and the easiest way to deploy.

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Import Project"
5. Select your portfolio repository
6. Click "Import"
7. Vercel will auto-detect Next.js settings
8. Click "Deploy"
9. Wait for deployment to complete
10. Your site is live! 🎉

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to "Settings" → "Domains"
3. Add your custom domain (e.g., leandrosepulveda.dev)
4. Follow Vercel's DNS instructions
5. Update nameservers at your domain registrar

---

## 🌐 Alternative: Deploy to Netlify

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Build command: `next build && next export`
6. Publish directory: `out`
7. Click "Deploy site"

---

## 🏢 Deploy to AWS Amplify

### Step 1: Connect Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "Create app"
3. Select "GitHub"
4. Authorize AWS
5. Select your repository

### Step 2: Configure Build Settings

```
Build command: npm run build
Base directory: (leave blank)
Start command: npm start
Publish directory: .next
```

### Step 3: Deploy

1. Click "Save and deploy"
2. Wait for deployment
3. Your app is live!

---

## 🐳 Deploy with Docker

### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🐧 Deploy to Linux Server

### Prerequisites

- Linux server with Node.js 16+ installed
- SSH access to server
- Domain name (optional)

### Step 1: Connect to Server

```bash
ssh user@your-server-ip
```

### Step 2: Clone Repository

```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
npm install
```

### Step 3: Build

```bash
npm run build
```

### Step 4: Setup Process Manager (PM2)

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

### Step 5: Setup Nginx Reverse Proxy

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name leandrosepulveda.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: SSL Certificate (Let's Encrypt)

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d leandrosepulveda.dev
```

---

## 📦 Deploy to Other Platforms

### Heroku (Paid)

```bash
heroku create your-app-name
git push heroku main
```

### Railway.app

1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Automatic deployment

### Fly.io

1. Install `flyctl`: `curl -L https://fly.io/install.sh | sh`
2. Deploy: `fly deploy`

---

## 🔍 Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All navigation links work
- [ ] Language toggle works (EN/ES)
- [ ] Contact form submits (if integrated)
- [ ] Responsive design on mobile
- [ ] All animations smooth
- [ ] Social media links correct
- [ ] Google Analytics set up (optional)
- [ ] SEO metadata correct
- [ ] Performance is good (Lighthouse score)

### Run Lighthouse Check

1. Open your deployed site in Chrome
2. Press F12 (DevTools)
3. Go to "Lighthouse" tab
4. Click "Analyze page load"
5. Aim for 90+ score

---

## 📊 Setup Analytics (Optional)

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add property for your domain
3. Get measurement ID
4. Add to `layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YOUR_ID');`}
</Script>
```

### Vercel Analytics

Automatic with Vercel deployment!

---

## 🔄 Continuous Deployment

With Vercel/Netlify, just push to main branch:

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin main
```

Deployment happens automatically! ✨

---

## 🆘 Troubleshooting

### Site is slow

1. Run Lighthouse audit
2. Optimize images
3. Enable caching headers
4. Use CDN (Vercel does this automatically)

### Can't access from domain

1. Check DNS settings
2. Wait 24 hours for propagation
3. Verify nameservers are updated
4. Test with `nslookup yourdomain.com`

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### Port already in use

```bash
# Use different port
npm run dev -- -p 3001
```

---

## 📈 Performance Tips

1. **Images**: Use Next.js Image component
2. **Code splitting**: Already done by Next.js
3. **Caching**: Set up HTTP caching headers
4. **CDN**: Use Vercel (built-in) or Cloudflare
5. **Monitoring**: Set up uptime monitoring

### Add Uptime Monitor (Free)

Use [UptimeRobot.com](https://uptimerobot.com) to monitor your site 24/7.

---

## 🎓 Learning Resources

- [Vercel Deployment Docs](https://vercel.com/docs/concepts/deployments/overview)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Netlify Deployment](https://docs.netlify.com/)
- [Docker Tutorial](https://docs.docker.com/get-started/)

---

## 💡 Pro Tips

1. **Use environment variables** for sensitive data
2. **Set up automatic backups** of your GitHub repo
3. **Monitor site performance** regularly
4. **Update dependencies** monthly: `npm update`
5. **Test locally** before deploying: `npm run dev`

---

**Your portfolio is now ready for the world! 🌍**

Share your deployed site on LinkedIn, GitHub, and with potential employers!

Good luck with your cybersecurity career! 🚀
