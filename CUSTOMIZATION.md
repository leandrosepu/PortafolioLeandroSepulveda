# 🎨 Customization Guide

Complete guide to personalize your Leandro Sepúlveda cybersecurity portfolio.

## 📝 Step-by-Step Customization

### 1. Update Personal Information

Edit `portfolio.jsx` and replace all instances:

#### Contact Information
```javascript
// Around line 1200 in ContactSection
email: 'lea.sepuf@gmail.com'        // → your email
github: 'leandrosepu'          // → your GitHub username
linkedin: 'Leandro Sepúlveda'        // → your LinkedIn profile
phone: '+56 9 74858025'            // → your phone
```

#### Navigation Logo
```javascript
// Around line 140 in Navigation
<motion.div
  className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
>
  LS  // → Your initials (e.g., "JS", "AP", etc.)
</motion.div>
```

---

### 2. Update Hero Section

Edit the hero content in the `content` object:

```javascript
hero: {
  title: 'Cybersecurity Engineering Student & Ethical Hacker',
  subtitle: 'Focused on Offensive Security, Linux, Networks, SIEM Engineering, and Threat Analysis.',
  available: 'Open to Internships & Cybersecurity Opportunities',
  cta1: 'View Projects',
  cta2: 'Contact Me',
},
```

**In Spanish:**
```javascript
hero: {
  title: 'Ingeniero de Ciberseguridad & Ético Hacker',
  subtitle: 'Especializado en Seguridad Ofensiva, Redes, Linux y Análisis de Amenazas.',
  available: 'Disponible para Pasantías',
  cta1: 'Ver Proyectos',
  cta2: 'Contáctame',
}
```

---

### 3. Update About Section

Edit the bio content:

```javascript
about: {
  title: 'About Me',
  bio: [
    'I am a Cybersecurity Engineering student passionate about offensive security, Linux systems, networking, and security analysis.',
    
    'Currently focused on building practical experience through home labs, cybersecurity research, Python automation, and network security projects.',
    
    'My goal is to become a professional Pentester and eventually specialize in cybersecurity leadership and enterprise security architecture.',
  ],
},
```

Replace with your actual background and experience.

---

### 4. Add Your Projects

Find the `ProjectsSection` component and update the `projects` array:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    desc: 'Description of what you built and why it matters',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    status: 'Active',  // or 'Complete'
    github: 'https://github.com/yourusername/your-repo',
    live: 'https://your-project-url.com',  // or '#' if no live demo
  },
  // Add more projects (up to 4-6 is good)
];
```

**Example project:**
```javascript
{
  title: 'Active Directory Pentest Lab',
  desc: 'Configured complete Active Directory environment with simulated vulnerabilities for security testing and research.',
  tech: ['Active Directory', 'Windows Server', 'Kali Linux', 'Metasploit'],
  status: 'Active',
  github: 'https://github.com/leandrosepulveda/ad-lab',
  live: 'https://ad-lab.leandrosepulveda.dev',
}
```

---

### 5. Customize Skills Section

Update the `skills` object in `SkillsSection`:

```javascript
const skills = {
  'Offensive Security': [
    { name: 'Web Pentesting', level: 72 },
    { name: 'Vulnerability Assessment', level: 70 },
    { name: 'Burp Suite', level: 68 },
    { name: 'OWASP Testing', level: 65 },
  ],

  'Networking & Infrastructure': [
    { name: 'TCP/IP', level: 80 },
    { name: 'Cisco Networking', level: 78 },
    { name: 'Packet Tracer', level: 85 },
    { name: 'Network Analysis', level: 72 },
  ],

  'Linux & Systems': [
    { name: 'Linux Administration', level: 74 },
    { name: 'Bash Scripting', level: 65 },
    { name: 'System Hardening', level: 60 },
    { name: 'Virtualization', level: 70 },
  ],

  'Programming & Automation': [
    { name: 'Python', level: 70 },
    { name: 'Git & GitHub', level: 72 },
    { name: 'Automation Scripts', level: 66 },
    { name: 'JavaScript', level: 55 },
  ],

  'Cybersecurity Operations': [
    { name: 'SIEM Fundamentals', level: 60 },
    { name: 'Threat Analysis', level: 62 },
    { name: 'OSINT', level: 68 },
    { name: 'Security Monitoring', level: 58 },
  ],
};

**Skill Level Guidelines:**
- 50-60: Beginner
- 60-75: Intermediate
- 75-85: Advanced
- 85-95: Expert
- 95+: Master

---

### 6. Update Blog/Writeups

Edit the `articles` array in `BlogSection`:

```javascript
const articles = [
  {
    title: 'Your Article Title',
    excerpt: 'Brief summary of your article',
    date: 'May 2025',
  },
];
```

Add links by updating the component:

```javascript
<motion.a
  href="https://your-blog-or-writeup-url"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 hover:text-blue-300"
>
  {t.blog.readMore} →
</motion.a>
```

---

### 7. Update Certifications

Edit the `certs` array in `CertificationsSection`:

```javascript
const certs = [
  { name: 'Cisco Network Essentials', icon: Network, status: 'active' },
  { name: 'Linux Fundamentals', icon: Terminal, status: 'active' },
  { name: 'CompTIA Security+', icon: Shield, status: 'roadmap' },
  { name: 'eJPT', icon: Lock, status: 'roadmap' },
  { name: 'PNPT', icon: Bug, status: 'roadmap' },
  { name: 'OSCP', icon: AlertCircle, status: 'future' },
];
```

**Customize icons** - replace `Shield`, `Network`, etc. with other Lucide icons:

Available icons: `Lock`, `Code2`, `Terminal`, `Radio`, `Zap`, `Globe`, `Database`, `Server`, `Key`, `Bug`, `Search`, `Eye`, `AlertCircle`, `CheckCircle`, etc.

---

### 8. Update Timeline

Edit the `stages` in the `timeline` object:

```javascript
timeline: {
  title: 'Cybersecurity Journey',
  stages: [
    {
      year: '2024',
      title: 'Networking & Linux Foundations',
      desc: 'Started cybersecurity journey focusing on networking, Linux systems, and Cisco fundamentals.',
    },

    {
      year: '2025',
      title: 'Cybersecurity Labs & Projects',
      desc: 'Building cybersecurity labs, learning offensive security, and developing practical projects.',
    },

    {
      year: '2026',
      title: 'Advanced Pentesting & SIEM',
      desc: 'Focused on Active Directory, SIEM engineering, vulnerability analysis, and advanced security operations.',
    },

    {
      year: 'Future',
      title: 'Pentester → CISO Path',
      desc: 'Long-term goal of becoming a professional penetration tester and cybersecurity leader.',
    },
  ],
},
```

---

### 9. Update Dashboard Metrics

Edit the metrics in `DashboardSection`:

```javascript
const metrics = [
  {
    label: 'Network Security',
    value: '82%',
    icon: Shield,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },

  {
    label: 'Linux Environment',
    value: '74%',
    icon: Terminal,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },

  {
    label: 'Python Automation',
    value: '68%',
    icon: Code2,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },

  {
    label: 'Threat Analysis',
    value: '61%',
    icon: Eye,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
];
```

**Available colors:**
- Green: `text-green-400`, `bg-green-400/10`
- Red: `text-red-400`, `bg-red-400/10`
- Yellow: `text-yellow-400`, `bg-yellow-400/10`
- Cyan: `text-cyan-400`, `bg-cyan-400/10`
- Blue: `text-blue-400`, `bg-blue-400/10`
- Purple: `text-purple-400`, `bg-purple-400/10`

---

### 10. Update Terminal Log

In the dashboard section, update the terminal output:

```javascript
<p className="text-slate-500">Your custom log message</p>
<p className="text-cyan-400">$ your custom command output</p>
```

---

## 🎨 Color Customization

### Change Accent Colors

The portfolio uses cyan/blue as primary colors. To change:

1. Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Change cyan to your color
      cyan: {
        400: '#your-color-code',
        500: '#your-darker-code',
      },
    },
  },
}
```

2. Update class names in `portfolio.jsx`:
Replace `text-cyan-400` with your color, e.g., `text-purple-400`

### Recommended Color Combinations

**Cyber Blue:**
```
Primary: #0ea5e9 (cyan)
Secondary: #3b82f6 (blue)
Accent: #06b6d4 (darker cyan)
```

**Matrix Green (if you want):**
```
Primary: #10b981 (emerald)
Secondary: #34d399 (emerald-lighter)
Accent: #059669 (emerald-darker)
```

**Hacker Purple:**
```
Primary: #a855f7 (purple)
Secondary: #d946ef (fuchsia)
Accent: #7c3aed (violet)
```

---

## 🔤 Typography Changes

### Change Font

Edit `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800;900&display=swap');
```

Popular fonts:
- `Poppins` - Modern, clean
- `Space Mono` - Technical, monospace
- `Jetbrains Mono` - Developer-friendly
- `Roboto Mono` - Minimalist

---

## 📱 Mobile Customization

Test on mobile using browser DevTools:
1. Press F12
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test responsiveness

### Adjust Mobile Spacing

Edit Tailwind classes in components:
```javascript
className="px-6 py-24 md:px-12 md:py-32"
//         ↑ mobile    ↑ desktop
```

---

## 🎬 Animation Customization

### Adjust Animation Speed

In Framer Motion components:

```javascript
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 0.8 }}
//                             ↑ increase for slower
```

### Disable Animations

If you prefer minimal animations:
```javascript
// Replace all motion.div with regular div
<motion.div /> → <div />
```

---

## 🔗 Add Social Links

Update Footer and Contact sections:

```javascript
const socialLinks = [
  { icon: Github, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Mail, url: 'mailto:your@email.com', label: 'Email' },
  { icon: Globe, url: 'https://yourblog.com', label: 'Blog' },
];
```

---

## 📧 Setup Contact Form

Currently a placeholder. To make functional:

### Option 1: Emailjs (Free)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create email service
3. Add to `portfolio.jsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    alert('Failed to send');
  }
};
```

### Option 2: Formspree (Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Create form
3. Update form action:

```jsx
<form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Netlify Forms

If deploying to Netlify, add `netlify` attribute:

```jsx
<form netlify>
```

---

## 🖼️ Add Profile Picture

1. Add image to project
2. In AboutSection, add:

```javascript
<motion.img
  src="/profile.jpg"
  alt="Leandro"
  className="w-48 h-48 rounded-xl object-cover border-2 border-cyan-400"
/>
```

---

## 📊 Add Real Dashboard Data

Update metrics dynamically by fetching data:

```javascript
const [metrics, setMetrics] = useState(null);

useEffect(() => {
  // Fetch from your API
  fetch('/api/security-metrics')
    .then(res => res.json())
    .then(data => setMetrics(data));
}, []);
```

---

## 🔐 Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_GITHUB_USER=yourusername
NEXT_PUBLIC_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Access in components:
```javascript
const githubUser = process.env.NEXT_PUBLIC_GITHUB_USER;
```

---

## 🧪 Testing Customizations

After changes, test:

```bash
# Run development server
npm run dev

# Check for errors
npm run lint

# Build for production
npm run build
```

---

## 📋 Customization Checklist

- [ ] Updated all personal information
- [ ] Changed contact details
- [ ] Added your projects
- [ ] Updated skills with realistic levels
- [ ] Changed about/bio section
- [ ] Updated certifications
- [ ] Added blog/writeup links
- [ ] Changed colors to your preference
- [ ] Tested on mobile
- [ ] Set up contact form
- [ ] Added profile picture (optional)
- [ ] Tested all animations
- [ ] Checked for typos
- [ ] Built and deployed locally

---

## 🆘 Need Help?

Check these files for examples:
- `portfolio.jsx` - Main component with all sections
- `tailwind.config.js` - Styling configuration
- `globals.css` - Global styles and animations

---

**Your personalized portfolio is ready! 🚀**

Next: Read `DEPLOYMENT.md` to deploy your site.
