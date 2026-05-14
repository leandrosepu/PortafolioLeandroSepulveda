'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Shield,
  Terminal,
  Zap,
  ChevronDown,
  Menu,
  X,
  Globe,
  Network,
  Lock,
  Radio,
} from 'lucide-react';

// Language content
const content = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      dashboard: 'Dashboard',
      blog: 'Writeups',
      certs: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      title: 'Cybersecurity Engineer & Ethical Hacker',
      subtitle:
        'Specialized in Offensive Security, Networks, Linux, and Threat Analysis.',
      available: 'Available for Internships',
      cta1: 'View Projects',
      cta2: 'Contact Me',
    },
    about: {
      title: 'About Me',
      subtitle: 'Passionate cybersecurity professional dedicated to securing the digital landscape',
      bio: [
        'I\'m a cybersecurity engineering student with a deep passion for offensive security, penetration testing, and threat analysis. My focus is on understanding how systems work, finding vulnerabilities, and securing them before they\'re exploited.',
        'With hands-on experience in Linux administration, network security, and Python automation, I\'m building practical expertise in SOC operations, threat detection, and incident response.',
        'I believe in continuous learning and staying ahead of emerging threats through labs, certifications, and real-world security challenges.',
      ],
      focus: 'Core Focus Areas',
    },
    skills: {
      title: 'Technical Skills',
      offensive: 'Offensive Security',
      networking: 'Networking & Infrastructure',
      systems: 'Systems & Linux',
      development: 'Development & Automation',
      monitoring: 'Security Operations',
    },
    projects: {
      title: 'Projects & Labs',
      subtitle: 'Real cybersecurity projects built for learning and practice',
      viewProject: 'View Project',
      viewGithub: 'GitHub',
    },
    dashboard: {
      title: 'Security Operations Dashboard',
      subtitle: 'Live threat monitoring and security metrics',
      threatLevel: 'Threat Level',
      netTraffic: 'Network Traffic',
      score: 'Security Score',
      vulns: 'Active Vulnerabilities',
      attacks: 'Attacks Blocked',
      threats: 'Threats Detected',
    },
    blog: {
      title: 'Security Writeups',
      subtitle: 'Technical articles on security concepts and tools',
      readMore: 'Read Article',
    },
    certs: {
      title: 'Certifications & Learning Path',
      pursuing: 'Pursuing',
      roadmap: 'Roadmap',
    },
    timeline: {
      title: 'Cybersecurity Journey',
      stages: [
        { year: '2023', title: 'Foundation', desc: 'Started with networking fundamentals' },
        { year: '2024', title: 'Linux & Shells', desc: 'Mastered Linux and shell scripting' },
        { year: '2025', title: 'Security Labs', desc: 'Building practical lab environments' },
        { year: '2026', title: 'Pentesting', desc: 'Advanced offensive security training' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Open to opportunities, internships, and security discussions',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Message',
      send: 'Send Message',
      phone: '+56 9 XXXX XXXX',
      available: 'Available for Internships',
    },
    footer: {
      credit: 'Designed & Built by Leandro Sepúlveda',
      rights: 'All rights reserved',
    },
  },
  es: {
    nav: {
      about: 'Acerca De',
      skills: 'Habilidades',
      projects: 'Proyectos',
      dashboard: 'Panel',
      blog: 'Análisis',
      certs: 'Certificaciones',
      contact: 'Contacto',
    },
    hero: {
      title: 'Ingeniero de Ciberseguridad & Ético Hacker',
      subtitle:
        'Especializado en Seguridad Ofensiva, Redes, Linux y Análisis de Amenazas.',
      available: 'Disponible para Pasantías',
      cta1: 'Ver Proyectos',
      cta2: 'Contáctame',
    },
    about: {
      title: 'Acerca De Mí',
      subtitle: 'Profesional apasionado dedicado a asegurar el panorama digital',
      bio: [
        'Soy un estudiante de ingeniería en ciberseguridad con una pasión profunda por seguridad ofensiva, pruebas de penetración y análisis de amenazas. Mi enfoque es entender cómo funcionan los sistemas, encontrar vulnerabilidades y asegurarlos antes de que sean explotados.',
        'Con experiencia práctica en administración de Linux, seguridad de redes y automatización con Python, estoy construyendo experiencia en operaciones SOC, detección de amenazas y respuesta a incidentes.',
        'Creo en el aprendizaje continuo y mantenerme adelante de las amenazas emergentes a través de labs, certificaciones y desafíos de seguridad del mundo real.',
      ],
      focus: 'Áreas de Enfoque',
    },
    skills: {
      title: 'Habilidades Técnicas',
      offensive: 'Seguridad Ofensiva',
      networking: 'Redes e Infraestructura',
      systems: 'Sistemas & Linux',
      development: 'Desarrollo y Automatización',
      monitoring: 'Operaciones de Seguridad',
    },
    projects: {
      title: 'Proyectos y Labs',
      subtitle: 'Proyectos de ciberseguridad reales construidos para aprender',
      viewProject: 'Ver Proyecto',
      viewGithub: 'GitHub',
    },
    dashboard: {
      title: 'Panel de Operaciones de Seguridad',
      subtitle: 'Monitoreo de amenazas en vivo y métricas de seguridad',
      threatLevel: 'Nivel de Amenaza',
      netTraffic: 'Tráfico de Red',
      score: 'Puntuación de Seguridad',
      vulns: 'Vulnerabilidades Activas',
      attacks: 'Ataques Bloqueados',
      threats: 'Amenazas Detectadas',
    },
    blog: {
      title: 'Análisis de Seguridad',
      subtitle: 'Artículos técnicos sobre conceptos de seguridad y herramientas',
      readMore: 'Leer Artículo',
    },
    certs: {
      title: 'Certificaciones y Ruta de Aprendizaje',
      pursuing: 'En Proceso',
      roadmap: 'Ruta',
    },
    timeline: {
      title: 'Viaje de Ciberseguridad',
      stages: [
        { year: '2023', title: 'Fundación', desc: 'Comenzó con fundamentos de redes' },
        { year: '2024', title: 'Linux y Shells', desc: 'Dominó Linux y scripting' },
        { year: '2025', title: 'Labs de Seguridad', desc: 'Construyendo ambientes de lab' },
        { year: '2026', title: 'Pentesting', desc: 'Entrenamiento de seguridad ofensiva' },
      ],
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: 'Abierto a oportunidades, pasantías y discusiones de seguridad',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      phone: '+56 9 XXXX XXXX',
      available: 'Disponible para Pasantías',
    },
    footer: {
      credit: 'Diseñado y Construido por Leandro Sepúlveda',
      rights: 'Todos los derechos reservados',
    },
  },
};

// Language Toggle
const LanguageToggle = ({ language, setLanguage }) => (
  <motion.button
    onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-300 transition-all"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Globe size={16} />
    <span className="text-sm font-medium">{language.toUpperCase()}</span>
  </motion.button>
);

// Navigation
const Navigation = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = content[language];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          LS
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {Object.values(t.nav).map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="flex flex-col gap-4 p-6">
              {Object.values(t.nav).map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Animated Grid Background
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-20" />
    <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1000 1000">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
  </div>
);

// Hero Section
const HeroSection = ({ language }) => {
  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AnimatedGrid />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700">
            <Radio className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-sm text-slate-300">{t.contact.available}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            {t.hero.cta1}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:bg-slate-800/50 transition-all"
          >
            {t.hero.cta2}
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = ({ language }) => {
  const t = content[language];

  const focusAreas = [
    { icon: Shield, label: 'Pentesting' },
    { icon: Network, label: 'Networks' },
    { icon: Terminal, label: 'Linux' },
    { icon: Code2, label: 'Python' },
    { icon: Lock, label: 'Web Security' },
    { icon: Radio, label: 'SOC Ops' },
  ];

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">{t.about.title}</h2>
          <p className="text-xl text-slate-400">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.about.bio.map((paragraph, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6">{t.about.focus}</h3>
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-slate-300">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = ({ language }) => {
  const t = content[language];

  const skills = {
    [t.skills.offensive]: [
      { name: 'Penetration Testing', level: 85 },
      { name: 'Metasploit', level: 80 },
      { name: 'OWASP Top 10', level: 90 },
      { name: 'Burp Suite', level: 85 },
    ],
    [t.skills.networking]: [
      { name: 'Networking (OSI Model)', level: 88 },
      { name: 'TCP/IP', level: 90 },
      { name: 'Wireshark', level: 85 },
      { name: 'Routing & Switching', level: 80 },
    ],
    [t.skills.systems]: [
      { name: 'Linux Administration', level: 92 },
      { name: 'Bash Scripting', level: 88 },
      { name: 'System Hardening', level: 85 },
      { name: 'Active Directory', level: 80 },
    ],
    [t.skills.development]: [
      { name: 'Python', level: 90 },
      { name: 'Automation', level: 85 },
      { name: 'Web Development', level: 75 },
      { name: 'Scripting', level: 88 },
    ],
    [t.skills.monitoring]: [
      { name: 'SIEM (ELK/Splunk)', level: 80 },
      { name: 'Threat Detection', level: 85 },
      { name: 'Log Analysis', level: 82 },
      { name: 'Incident Response', level: 78 },
    ],
  };

  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white">{t.skills.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-6">{category}</h3>
              <div className="space-y-4">
                {items.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-slate-700/50 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = ({ language }) => {
  const t = content[language];

  const projects = [
    {
      title: 'SOC Home Lab',
      desc: language === 'en'
        ? 'Complete home security operations center with SIEM, IDS, and threat hunting capabilities.'
        : 'Centro completo de operaciones de seguridad con SIEM, IDS y capacidades de búsqueda de amenazas.',
      tech: ['ELK Stack', 'Suricata', 'Splunk', 'Ansible'],
      status: 'Active',
      github: '#',
      live: '#',
    },
    {
      title: 'Python Port Scanner',
      desc: language === 'en'
        ? 'Advanced network reconnaissance tool with multi-threading and service detection.'
        : 'Herramienta avanzada de reconocimiento de red con multi-threading y detección de servicios.',
      tech: ['Python', 'Socket', 'Threading', 'Nmap'],
      status: 'Complete',
      github: '#',
      live: '#',
    },
    {
      title: 'Linux Hardening Toolkit',
      desc: language === 'en'
        ? 'Automated hardening scripts for CIS benchmarks and security compliance.'
        : 'Scripts de endurecimiento automático para puntos de referencia CIS y cumplimiento de seguridad.',
      tech: ['Bash', 'Ansible', 'CIS Benchmarks', 'Automation'],
      status: 'Complete',
      github: '#',
      live: '#',
    },
    {
      title: 'Active Directory Lab',
      desc: language === 'en'
        ? 'Full AD environment for pentesting and security research in Windows domains.'
        : 'Entorno AD completo para pentesting e investigación de seguridad en dominios Windows.',
      tech: ['Active Directory', 'Windows', 'PowerShell', 'Kali Linux'],
      status: 'Active',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
          <p className="text-xl text-slate-400">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600">
                    <span className="text-xs text-slate-300">{project.status}</span>
                  </div>
                </div>
                <Code2 className="w-5 h-5 text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
              </div>

              <p className="text-slate-400 mb-4 text-sm">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300 border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-700">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  {t.projects.viewProject}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Dashboard Section
const DashboardSection = ({ language }) => {
  const t = content[language];

  const metrics = [
    {
      label: t.dashboard.threatLevel,
      value: 'MEDIUM',
      icon: Radio,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      label: t.dashboard.netTraffic,
      value: '2.4 TB',
      icon: Network,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
    },
    {
      label: t.dashboard.score,
      value: '94%',
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      label: t.dashboard.vulns,
      value: '3',
      icon: Lock,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
    {
      label: t.dashboard.attacks,
      value: '847',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      label: t.dashboard.threats,
      value: '12',
      icon: Radio,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
  ];

  return (
    <section id="dashboard" className="relative py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t.dashboard.title}</h2>
          <p className="text-xl text-slate-400">{t.dashboard.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`${metric.bgColor} border border-slate-700 rounded-xl p-6`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                      {metric.label}
                    </p>
                    <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-slate-500 ml-4">security@soc-lab:~$</span>
          </div>
          <div className="space-y-2 text-slate-400">
            <p>
              <span className="text-cyan-400">$</span> tail -f /var/log/auth.log
            </p>
            <p className="text-slate-500">May 13 14:32:17 soc-lab sshd[2847]: Invalid user admin</p>
            <p className="text-slate-500">May 13 14:32:18 soc-lab sshd[2848]: Invalid user root</p>
            <p className="text-slate-500">May 13 14:32:19 soc-lab sshd[2849]: Accepted publickey</p>
            <p className="text-slate-500">May 13 14:32:21 soc-lab kernel: [THREAT] Port scan detected</p>
            <p className="text-slate-500">May 13 14:32:22 soc-lab suricata: Alert: SQL Injection attempt</p>
            <p>
              <span className="text-cyan-400">$</span> _
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Blog Section
const BlogSection = ({ language }) => {
  const t = content[language];

  const articles = [
    {
      title: language === 'en' ? 'SQL Injection Basics' : 'Fundamentos de Inyección SQL',
      excerpt:
        language === 'en'
          ? 'Understanding SQL injection vulnerabilities and exploitation techniques.'
          : 'Entender vulnerabilidades de inyección SQL y técnicas de explotación.',
      date: 'May 2025',
    },
    {
      title: language === 'en' ? 'Linux Hardening Guide' : 'Guía de Endurecimiento de Linux',
      excerpt:
        language === 'en'
          ? 'Step-by-step guide to securing a Linux system against common attacks.'
          : 'Guía paso a paso para asegurar un sistema Linux contra ataques comunes.',
      date: 'Apr 2025',
    },
    {
      title: language === 'en' ? 'Wireshark Fundamentals' : 'Fundamentos de Wireshark',
      excerpt:
        language === 'en'
          ? 'Network packet analysis and protocol identification with Wireshark.'
          : 'Análisis de paquetes de red e identificación de protocolos con Wireshark.',
      date: 'Mar 2025',
    },
    {
      title: language === 'en' ? 'SIEM Introduction' : 'Introducción a SIEM',
      excerpt:
        language === 'en'
          ? 'Getting started with SIEM platforms for threat detection and response.'
          : 'Introducción a plataformas SIEM para detección y respuesta de amenazas.',
      date: 'Feb 2025',
    },
  ];

  return (
    <section id="blog" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t.blog.title}</h2>
          <p className="text-xl text-slate-400">{t.blog.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all group cursor-pointer"
            >
              <div className="mb-4 pb-4 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{article.date}</span>
                <motion.span
                  className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.blog.readMore} →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Section
const CertificationsSection = ({ language }) => {
  const t = content[language];

  const certs = [
    { name: 'Cisco CCNA', icon: Network, status: 'pursuing' },
    { name: 'Linux+', icon: Terminal, status: 'pursuing' },
    { name: 'CompTIA Security+', icon: Shield, status: 'pursuing' },
    { name: 'eJPT', icon: Code2, status: 'pursuing' },
    { name: 'OSCP', icon: Lock, status: 'roadmap' },
    { name: 'OSINT', icon: Radio, status: 'roadmap' },
  ];

  return (
    <section id="certifications" className="relative py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t.certs.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            const isPursuing = cert.status === 'pursuing';

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-xl border transition-all ${
                  isPursuing
                    ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
                    : 'bg-slate-800/50 border-slate-700/50 opacity-60'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className={`w-8 h-8 ${isPursuing ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <div>
                    <h3 className="font-semibold text-white">{cert.name}</h3>
                    <p className="text-xs text-slate-400">
                      {isPursuing ? t.certs.pursuing : t.certs.roadmap}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const TimelineSection = ({ language }) => {
  const t = content[language];

  return (
    <section id="timeline" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white">{t.timeline.title}</h2>
        </motion.div>

        <div className="space-y-8">
          {t.timeline.stages.map((stage, i) => (
            <motion.div
              key={stage.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6 md:gap-0">
                <div className="md:w-1/2 flex justify-end md:pr-8">
                  <div
                    className={`${
                      i % 2 === 0 ? 'text-right' : 'hidden md:block md:text-left'
                    }`}
                  >
                    {i % 2 === 0 && (
                      <>
                        <p className="text-2xl font-bold text-cyan-400">{stage.year}</p>
                        <p className="text-lg font-semibold text-white">{stage.title}</p>
                        <p className="text-slate-400 text-sm">{stage.desc}</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center md:w-0">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-950"
                  />
                  {i < t.timeline.stages.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent" />
                  )}
                </div>

                <div className="md:w-1/2 md:pl-8">
                  {i % 2 !== 0 && (
                    <>
                      <p className="text-2xl font-bold text-cyan-400">{stage.year}</p>
                      <p className="text-lg font-semibold text-white">{stage.title}</p>
                      <p className="text-slate-400 text-sm">{stage.desc}</p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = ({ language }) => {
  const t = content[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-xl text-slate-400">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder={t.contact.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="email"
              placeholder={t.contact.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <textarea
              placeholder={t.contact.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors h-32 resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              {t.contact.send}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Email</p>
                  <p className="text-white font-semibold">leandro@cybersec.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">GitHub</p>
                  <p className="text-white font-semibold">LeandroSepulveda</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">LinkedIn</p>
                  <p className="text-white font-semibold">LeandroSepúlveda</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <p className="text-sm text-slate-400 mb-4">{t.contact.available}</p>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-sm text-slate-300">Open for Internships & Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = ({ language }) => {
  const t = content[language];

  return (
    <footer className="relative py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <p className="text-slate-400 text-sm">{t.footer.credit}</p>
            <p className="text-slate-500 text-xs">{t.footer.rights}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.1, color: '#06b6d4' }}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.1, color: '#06b6d4' }}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:leandro@cybersec.dev"
              whileHover={{ scale: 1.1, color: '#06b6d4' }}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
export default function CybersecurityPortfolio() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ProjectsSection language={language} />
      <DashboardSection language={language} />
      <BlogSection language={language} />
      <CertificationsSection language={language} />
      <TimelineSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
}
