# ⚡ Quick Start Guide

Get your Leandro Sepúlveda cybersecurity portfolio up and running in 5 minutes!

## 🚀 5-Minute Setup

### Step 1: Install Dependencies (1 min)

```bash
npm install
```

### Step 2: Start Development Server (30 sec)

```bash
npm run dev
```

### Step 3: Open Browser (10 sec)

Visit: [http://localhost:3000](http://localhost:3000)

### Step 4: Make Basic Changes (3 min)

Open `portfolio.jsx` and find these lines:

**Change your name/initials (line ~140):**
```javascript
LS  // → Change to your initials
```

**Change email (line ~1200):**
```javascript
leandro@cybersec.dev  // → your@email.com
```

**Change your title (line ~60 in content.en):**
```javascript
title: 'Cybersecurity Engineer & Ethical Hacker'
```

Save the file - it auto-reloads!

---

## 📋 Essential Customizations (First Session)

### 1. Update Contact Info (2 min)

Search and replace in `portfolio.jsx`:
```
leandro@cybersec.dev → your@email.com
LeandroSepulveda → YourGitHub
LeandroSepúlveda → YourLinkedIn
+56 9 XXXX XXXX → your phone
```

### 2. Add Your Projects (5 min)

Find `ProjectsSection` in `portfolio.jsx`, update:

```javascript
const projects = [
  {
    title: 'Your Project',
    desc: 'What you built',
    tech: ['Python', 'Linux'],
    status: 'Complete',
    github: 'https://github.com/you/repo',
    live: '#',
  },
];
```

### 3. Update Skills (3 min)

Find `SkillsSection`, edit skill levels:

```javascript
const skills = {
  'Offensive Security': [
    { name: 'Metasploit', level: 85 },  // Change level
  ],
};
```

---

## 🎯 Common Tasks

### Change Colors

Edit `tailwind.config.js` line 11-13:
```javascript
cyan: {
  400: '#0ea5e9',  // ← Change color codes here
}
```

### Add Social Link

In `Footer` component (~line 1350):
```javascript
<motion.a href="https://yourlink.com">
  <YourIcon size={20} />
</motion.a>
```

### Update Blog Articles

Find `BlogSection` (~line 750):
```javascript
const articles = [
  { title: 'Your Article', excerpt: '...', date: 'May 2025' },
];
```

### Change Language Strings

Edit `content` object at top:
```javascript
const content = {
  en: { /* English */ },
  es: { /* Spanish */ },
};
```

---

## 🧪 Testing

### Mobile Testing

1. Open DevTools (F12)
2. Click device icon (Ctrl+Shift+M)
3. Test all sections

### Build & Test

```bash
npm run build
npm start
```

---

## 🚢 Deploy in 5 Steps

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOU/portfolio.git
git push -u origin main
```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your portfolio repo
5. Click "Deploy" ✨

**Done! Your site is live!**

---

## 📁 File Structure Quick Reference

```
portfolio/
├── portfolio.jsx          ← Main component (edit here!)
├── globals.css            ← Global styles
├── tailwind.config.js     ← Colors & styling config
├── package.json           ← Dependencies
├── README.md              ← Full documentation
├── CUSTOMIZATION.md       ← Detailed changes guide
└── DEPLOYMENT.md          ← Deployment guide
```

---

## 🔍 Find & Replace Guide

Use your editor's Find & Replace (Ctrl+H):

| Find | Replace |
|------|---------|
| `leandro@cybersec.dev` | your@email.com |
| `LeandroSepulveda` | YourGithubUsername |
| `LeandroSepúlveda` | Your LinkedIn |
| `Cybersecurity Engineer & Ethical Hacker` | Your Title |
| `+56 9 XXXX XXXX` | Your Phone |

---

## 💡 Quick Tips

1. **Auto-reload**: Changes save automatically during dev
2. **Ctrl+Shift+M**: Mobile view in Chrome DevTools
3. **Ctrl+H**: Find & Replace in VS Code
4. **Ctrl+`**: Terminal in VS Code
5. **npm run build**: Test production build

---

## ✅ Pre-Deployment Checklist

Before deploying:

- [ ] All contact info updated
- [ ] Projects links work
- [ ] Mobile version looks good
- [ ] No console errors (F12)
- [ ] Language toggle works
- [ ] Built successfully (`npm run build`)

---

## 🆘 Quick Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Dependencies won't install:**
```bash
rm package-lock.json
npm install
```

**Site looks broken:**
```bash
rm -rf .next
npm run dev
```

**Git not working:**
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

---

## 📚 Next Steps

1. ✅ Run locally: `npm run dev`
2. ✅ Customize in `portfolio.jsx`
3. ✅ Test on mobile
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel
6. ✅ Share on LinkedIn!

---

## 📖 Detailed Guides

- **Full Setup**: See `README.md`
- **Customization**: See `CUSTOMIZATION.md`
- **Deployment**: See `DEPLOYMENT.md`

---

## 🎯 Feature Highlights

Your portfolio includes:

✨ **Hero Section** - Animated intro
📱 **Responsive** - Works on all devices
🎨 **Dark Theme** - Professional cybersec look
🌐 **Bilingual** - English/Spanish
💻 **Projects** - Showcase your work
📊 **Dashboard** - SOC-style metrics
📝 **Blog** - Share your knowledge
🎓 **Timeline** - Show your journey
📧 **Contact** - Easy reach out
🚀 **Fast** - Lightning-quick performance

---

**You're all set! Deploy and share your amazing portfolio! 🎉**

Questions? Check the full guides or reach out on GitHub.
