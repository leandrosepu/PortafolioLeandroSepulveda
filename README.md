# Leandro Sepúlveda - Cybersecurity Portfolio

A modern, professional cybersecurity portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Multilingual (English/Spanish) with a sleek SOC dashboard aesthetic.

## 🎨 Features

- **Modern Design**: Dark, minimalist cybersecurity aesthetic inspired by SOC dashboards, Vercel, Linear, and Stripe
- **Responsive**: Fully responsive mobile-first design
- **Multilingual**: Support for English and Spanish (toggle at the top)
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Sections**:
  - Hero with animated grid background
  - About section with focus areas
  - Skills with animated progress bars
  - Projects with GitHub and live demo links
  - Live SOC Dashboard with metrics
  - Security writeups/blog section
  - Certifications roadmap
  - Timeline of cybersecurity journey
  - Contact form and social links
  - Footer

## 🚀 Tech Stack

- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: React 18+
- **Language**: TypeScript
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 16+ and npm/yarn/pnpm installed
- Basic understanding of React and Next.js

## 🛠️ Installation

1. **Clone or download this project**:
```bash
git clone https://github.com/leandrosepulveda/portfolio.git
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── portfolio.jsx           # Main portfolio component
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🎯 Customization

### Change Personal Information

Edit `portfolio.jsx` to update:

```javascript
// Contact information
email: 'leandro@cybersec.dev'
github: 'LeandroSepulveda'
linkedin: 'LeandroSepúlveda'
phone: '+56 9 XXXX XXXX'
```

### Update Projects

In the `ProjectsSection` component, modify the `projects` array:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    desc: 'Your project description',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    status: 'Active',
    github: 'https://github.com/yourrepo',
    live: 'https://your-demo.com',
  },
  // Add more projects...
];
```

### Customize Skills

Update the `skills` object in `SkillsSection`:

```javascript
const skills = {
  'Offensive Security': [
    { name: 'Your Skill', level: 85 },
    // More skills...
  ],
  // More categories...
};
```

### Add Blog Articles

Modify the `articles` array in `BlogSection`:

```javascript
const articles = [
  {
    title: 'Your Article Title',
    excerpt: 'Your article excerpt',
    date: 'May 2025',
  },
  // More articles...
];
```

### Update Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      cyan: { /* your colors */ },
      blue: { /* your colors */ },
    },
  },
},
```

### Modify Content (Multi-language)

The `content` object at the top of `portfolio.jsx` contains all text:

```javascript
const content = {
  en: { /* English content */ },
  es: { /* Spanish content */ },
};
```

Edit both language versions for any text changes.

## 📱 Responsive Breakpoints

The site is mobile-first and responsive:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy automatically
5. Your site will be live!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build command: `next build && next export`
4. Set output directory to `out`

### Deploy to Other Hosting

1. Build: `npm run build`
2. Start: `npm start`
3. Deploy the built application to your hosting provider

## 🎨 Design Inspiration

- SOC Dashboards (realistic security operations centers)
- Vercel (modern SaaS design)
- Linear (clean task management interface)
- Stripe (premium payment platform UI)
- Enterprise Cybersecurity Platforms

## ✨ Key Features Explained

### Hero Section
- Animated grid background
- Gradient text
- CTA buttons with hover effects
- Availability badge with pulse animation

### About Section
- Professional biography
- Focus areas grid
- Smooth scroll reveal animations

### Skills Section
- Animated progress bars
- Categorized skills
- Hover effects and transitions

### Projects Section
- Professional project cards
- Technology tags
- GitHub and live demo links
- Status indicators
- Hover animations

### SOC Dashboard
- Live metrics display
- Terminal-style logs
- Security score visualization
- Threat level indicators

### Blog/Writeups
- Article cards with excerpts
- Publication dates
- Read more buttons
- Hover animations

### Certifications
- Badge-style certificates
- Status indicators (Pursuing/Roadmap)
- Icon representations

### Timeline
- Cybersecurity journey visualization
- Animated milestones
- Professional roadmap

### Contact
- Contact form
- Direct contact information
- Social media links
- Availability status

## 🔧 Maintenance

### Regular Updates

1. **Update dependencies**: `npm update`
2. **Check for security vulnerabilities**: `npm audit`
3. **Update content regularly**: Keep projects and skills current

### Performance Optimization

- Images are optimized
- Code splitting is automatic
- Lazy loading for better performance
- Minimal bundle size

## 📊 Analytics (Optional)

To add analytics, integrate:
- Google Analytics
- Vercel Analytics
- Plausible
- Fathom Analytics

Add to `layout.tsx` after the `<body>` tag.

## 🤝 Contributing

This is a personal portfolio. Feel free to fork and customize for your own use.

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 💡 Tips for Success

1. **Keep it updated**: Regularly add new projects and skills
2. **Add real links**: Update GitHub, LinkedIn, and contact information
3. **Custom domain**: Use a custom domain (leandrosepulveda.dev)
4. **SEO**: The metadata in `layout.tsx` is already optimized
5. **Performance**: Site is lightning-fast out of the box
6. **Mobile-first**: Always test on mobile devices

## 🆘 Troubleshooting

### Port 3000 is already in use
```bash
npm run dev -- -p 3001
```

### Dependencies installation fails
```bash
rm package-lock.json
npm install
```

### Build fails
```bash
npm run lint
# Fix any errors reported
npm run build
```

## 📞 Support

For issues or questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Check the [Framer Motion documentation](https://www.framer.com/motion/)

## 🎓 Learning Resources

- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Framer Motion Guide](https://www.framer.com/motion/)

## 🌐 Multilingual Support

The portfolio supports English and Spanish. To add another language:

1. Add language content to the `content` object
2. Add language selector in `LanguageToggle`
3. Update all components to use the language content

Example:
```javascript
const content = {
  en: { /* English */ },
  es: { /* Spanish */ },
  fr: { /* French - add here */ },
};
```

## 🎯 Next Steps

1. **Customize**: Update all personal information
2. **Add Projects**: Add real projects with links
3. **Get Domain**: Set up custom domain
4. **Deploy**: Deploy to Vercel or hosting of choice
5. **Monitor**: Set up analytics
6. **Network**: Share on LinkedIn and GitHub

---

**Built with ❤️ for cybersecurity professionals**

Made with Next.js, React, Tailwind CSS, and Framer Motion.
