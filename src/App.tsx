/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  UserCircle, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Award, 
  Target, 
  Mail, 
  Linkedin, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  History,
  ScrollText,
  Languages,
  Globe,
  Rocket,
  FolderOpen,
  School,
  University,
  MessageSquare,
  ChartLine,
  Heart,
  Plus,
  Bell,
  FileText,
  Presentation,
  Film,
  Play,
  X,
  Eye,
  Download,
  Palette,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const UNDIP_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkP0TcdOyzwlcfScynUGeLN0lsFPyQPF9MOA&s";
const PROFILE_IMAGE = "https://lh3.googleusercontent.com/a/ACg8ocLKkFNJp_edb44PBpSsurAky112lfYvEhlFPZCsZqXdXR23L7QH=s288-c-no";

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'projects', label: 'Projects' },
  { id: 'philosophy', label: 'Philosophy' },
];

export default function App() {
  const [activeNav, setActiveNav] = useState('about');
  const [mediaModal, setMediaModal] = useState<{
    type: 'video' | 'pdf';
    title: string;
    src: string;
    driveUrl?: string;
    description?: string;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      
      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveNav(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveNav(id);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-accent-violet/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-[68px] bg-brand-bg/85 backdrop-blur-xl border-b border-brand-border flex items-center justify-between px-6 md:px-10 z-[1000]">
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-[38px] h-[38px] rounded-full bg-brand-surface overflow-hidden border border-brand-border flex items-center justify-center shadow-lg">
            <img 
              src={PROFILE_IMAGE} 
              alt="Intan Fazillah avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-base tracking-tight hidden sm:block">Intan Fazillah</span>
        </div>

        <ul className="hidden md:flex items-center gap-1.5 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeNav === link.id 
                  ? 'bg-brand-surface text-white' 
                  : 'text-white/60 hover:text-white hover:bg-brand-surface/50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a 
            href="/assets/aistudio/CV-Intan_Fazillah_Updated_1__164f4158.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-brand-surface border border-brand-border rounded-lg text-xs font-bold text-white/80 hover:text-white hover:border-accent-violet transition-all"
          >
            <Download size={14} /> Resume PDF
          </a>
          <a 
            href="mailto:intnfaz@gmail.com"
            className="px-5 py-2.5 bg-gradient-to-br from-accent-violet to-accent-coral text-white border-none rounded-lg font-display font-bold text-sm shadow-lg hover:-translate-y-0.5 hover:shadow-accent-violet/20 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-10 pt-[120px] pb-20 gap-16 lg:gap-32 overflow-hidden">
        {/* Animated Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gradient-to-br from-accent-violet/20 via-accent-coral/20 to-accent-amber/20 blur-[120px] animate-gradient rounded-full -z-10" />
        
        <div className="flex-1 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-mint/10 border border-accent-mint/30 text-accent-mint text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
            Primary Classroom Teacher · Cambridge Curriculum Framework
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[54px] md:text-[70px] lg:text-[92px] font-display font-black leading-[0.95] mb-8 tracking-tighter"
          >
            Hi, I am <br />
            <span className="bg-gradient-to-br from-accent-violet via-accent-coral to-accent-amber bg-clip-text text-transparent animate-gradient">Intan Fazillah</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
          >
            I nurture curious young minds and help children discover their voice. Through thoughtful guidance, creative storytelling, and interactive media, I turn each day in the classroom into an open door to wonder.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-br from-accent-violet to-accent-coral text-white rounded-2xl font-black text-sm shadow-[0_20px_50px_rgba(167,139,250,0.3)] hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(167,139,250,0.4)] transition-all flex items-center gap-2.5"
            >
              <Rocket size={18} /> View My Work
            </button>
            <a 
              href="/assets/aistudio/CV-Intan_Fazillah_Updated_1__164f4158.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-surface border border-brand-border text-white rounded-2xl font-black text-sm hover:bg-brand-surface-hover hover:border-brand-border/30 transition-all flex items-center gap-2.5"
            >
              <Download size={18} /> Download CV (PDF)
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1hStO8PuI2eMRnV0ckiIF0Nn7GH-DnH2N?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-4 bg-brand-surface/60 border border-brand-border/60 text-white/80 rounded-2xl font-bold text-sm hover:text-white hover:bg-brand-surface transition-all flex items-center gap-2"
            >
              <FolderOpen size={18} /> Lesson Plans
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-[380px] shrink-0"
        >
          <div className="bg-brand-surface border border-brand-border rounded-[32px] p-8 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-violet via-accent-coral to-accent-amber" />
            <div className="w-[104px] h-[104px] rounded-full bg-brand-bg overflow-hidden mx-auto mb-6 shadow-2xl ring-4 ring-white/10 flex items-center justify-center">
              <img 
                src={PROFILE_IMAGE} 
                alt="Intan Fazillah profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-display text-2xl font-bold mb-1">Intan Fazillah</h3>
            <div className="text-accent-coral font-bold text-xs uppercase tracking-wider mb-1">Primary Classroom Teacher</div>
            <div className="text-white/40 text-xs font-semibold mb-6">Sekolah Islam Terpadu Auliya</div>
            
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: 'Tangerang Selatan, Indonesia' },
                { icon: Mail, text: 'intnfaz@gmail.com' },
                { icon: MessageSquare, text: '085712195746' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2.5 text-white/60 text-xs font-medium">
                  <item.icon size={15} className="text-white/40" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2.5">
              {[
                { icon: Mail, href: 'mailto:intnfaz@gmail.com', title: 'Email' },
                { icon: MessageSquare, href: 'https://wa.me/6285712195746', title: 'Text Me' },
                { icon: Download, href: '/assets/aistudio/CV-Intan_Fazillah_Updated_1__164f4158.pdf', title: 'Resume' },
              ].map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  target={link.title === 'Resume' || link.title === 'Text Me' ? '_blank' : undefined}
                  rel={link.title === 'Resume' || link.title === 'Text Me' ? 'noopener noreferrer' : undefined}
                  title={link.title}
                  className="w-11 h-11 bg-brand-bg border border-brand-border rounded-xl flex items-center justify-center text-white/60 hover:bg-accent-violet hover:text-white hover:border-accent-violet hover:-translate-y-1 transition-all duration-200"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-32 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Curriculum Framework', value: 'Cambridge Primary', color: 'text-accent-violet' },
            { label: 'Teaching Scope', value: 'Classroom & Thematic', color: 'text-accent-coral' },
            { label: 'Language & Media', value: 'Bilingual Fluency', color: 'text-accent-sky' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-[32px] p-8 text-center hover:border-brand-border/20 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className={`font-display text-2xl md:text-3xl font-black mb-2.5 ${stat.color}`}>{stat.value}</div>
              <div className="text-[11px] text-white/40 font-black uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-brand-border/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="inline-block px-5 py-2 bg-brand-surface border border-brand-border rounded-full text-[12px] font-black text-accent-violet uppercase tracking-[0.2em] mb-8">
            Work Experience
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter">My Teaching<br />Journey</h2>
          <p className="text-white/60 text-xl max-w-2xl font-bold leading-relaxed">
            A pathway shaped by everyday classroom discoveries—guiding children from initial wonder to confident, thoughtful expression through gentle pedagogy and creative media.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Role 1: Sekolah Islam Terpadu Auliya */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-accent-mint/30 rounded-[32px] p-8 md:p-12 hover:border-accent-mint/50 transition-all group relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-accent-mint via-accent-teal to-accent-mint" />
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-mint/15 flex items-center justify-center text-accent-mint shrink-0 shadow-lg border border-accent-mint/20">
                  <School size={28} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl md:text-3xl font-bold">Primary Classroom Teacher & ESL Educator</h3>
                    <span className="px-3 py-1 rounded-full text-[11px] font-black bg-accent-mint/20 text-accent-mint border border-accent-mint/40 uppercase tracking-wider">
                      Current Role
                    </span>
                  </div>
                  <div className="text-accent-mint font-bold text-base">Sekolah Islam Terpadu Auliya, Tangerang Selatan</div>
                </div>
              </div>
              <div className="text-right">
                <div className="px-4 py-1.5 bg-brand-bg border border-accent-mint/30 rounded-full text-xs font-bold text-white/80 whitespace-nowrap">
                  Jul 2026 – Present
                </div>
              </div>
            </div>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                'Co-lead daily morning circles and classroom routines alongside the homeroom teacher, tending to each child’s moral character, confidence, and wellbeing.',
                'Bring Cambridge Primary lessons to life through colorful slides, playful activities, and interactive digital stories.',
                'Craft thoughtful lesson plans and personalized support so every child learns at their own natural pace.',
                'Build warm relationships with parents, sharing each learner’s milestones and everyday progress.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/70 text-base font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-mint mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Role 2: Tunas Iblam School */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-brand-border rounded-[32px] p-8 md:p-12 hover:border-brand-border/40 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-violet/10 flex items-center justify-center text-accent-violet shrink-0 shadow-lg border border-accent-violet/20">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Elementary Teacher & Program Coordinator</h3>
                  <div className="text-accent-violet font-bold text-sm">Tunas Iblam School, Depok</div>
                </div>
              </div>
              <div className="text-right">
                <div className="px-4 py-1.5 bg-brand-bg border border-brand-border rounded-full text-xs font-bold text-white/40 whitespace-nowrap">
                  Nov 2025 – Jun 2026
                </div>
              </div>
            </div>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                'Guided young elementary learners through lively thematic units and communicative activities, helping them speak and share with confidence.',
                'Designed creative lesson modules, activity sheets, and formative assessments that made learning feel approachable and joyful.',
                'Coordinated the school-wide English Day program, celebrating student curiosity, imagination, and performance.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/50 text-base font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-violet mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Role 3: English 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-brand-border rounded-[32px] p-8 md:p-12 hover:border-brand-border/40 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-coral/10 flex items-center justify-center text-accent-coral shrink-0 shadow-lg border border-accent-coral/20">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Teacher & Academic Instructor</h3>
                  <div className="text-accent-coral font-bold text-sm">English 1, Medan</div>
                </div>
              </div>
              <div className="text-right">
                <div className="px-4 py-1.5 bg-brand-bg border border-brand-border rounded-full text-xs font-bold text-white/40 whitespace-nowrap">
                  May 2025 – Oct 2025
                </div>
              </div>
            </div>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                'Created warm, communicative spaces where young learners felt safe to speak up, try new words, and learn from mistakes.',
                'Tailored interactive activities to mixed-ability groups, celebrating individual progress at every stage.',
                'Connected with parents through regular conferences to support consistent growth inside and outside the classroom.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/50 text-base font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-coral mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Experience: Translation & Digital Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface/70 border border-brand-border rounded-[32px] p-8 md:p-10 hover:border-brand-border/40 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-sky/15 flex items-center justify-center text-accent-sky shrink-0 border border-accent-sky/20">
                  <Languages size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Freelance Translation & Digital Content Project</h4>
                  <div className="text-accent-sky font-semibold text-xs">Self-employed & Intronesiana · Semarang, Indonesia</div>
                </div>
              </div>
              <div className="text-xs font-bold text-white/40 bg-brand-bg px-3.5 py-1.5 rounded-full border border-brand-border whitespace-nowrap">
                Oct 2022 – May 2024
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Translated an average of 3 documents per week across legal, technical, and marketing domains with precision and cultural clarity. Collaborated on content creation and translation about Indonesian literature for @intronesiana on Instagram and X.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-brand-border/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="inline-block px-5 py-2 bg-brand-surface border border-brand-border rounded-full text-[12px] font-black text-accent-mint uppercase tracking-[0.2em] mb-8">
            Professional Competencies
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter">Skillset &<br />Classroom Craft</h2>
          <p className="text-white/60 text-xl max-w-2xl font-bold leading-relaxed">
            Blending heart, curriculum, and imagination—from structured Cambridge lessons to interactive media that lights up young eyes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Sparkles className="text-accent-mint" size={24} /> Primary Classroom & Pedagogy
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'Primary Classroom Management & Teaching', level: 92, color: 'bg-accent-mint' },
                  { label: 'Experience in Cambridge Primary Framework', level: 90, color: 'bg-accent-violet' },
                  { label: 'Cross-Curricular Thematic Instruction', level: 88, color: 'bg-accent-amber' },
                  { label: 'Differentiated Learning & Student Assessment', level: 87, color: 'bg-accent-coral' },
                ].map((skill, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-black uppercase tracking-widest text-white/70">{skill.label}</span>
                      <span className="text-xs font-bold text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-brand-surface rounded-full overflow-hidden border border-brand-border">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                        className={`h-full ${skill.color} rounded-full shadow-[0_0_15px_rgba(74,222,128,0.3)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Globe className="text-accent-sky" size={24} /> Bilingual & Classroom Technology
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'Fluent English Communication & Instruction', level: 95, color: 'bg-accent-sky' },
                  { label: 'Microsoft Office & Google Workspace Apps', level: 92, color: 'bg-accent-coral' },
                  { label: 'Interactive PowerPoint & Learning Media', level: 90, color: 'bg-accent-amber' },
                  { label: 'Dual-Language Instruction (English & Indonesian)', level: 95, color: 'bg-accent-violet' },
                ].map((skill, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-black uppercase tracking-widest text-white/70">{skill.label}</span>
                      <span className="text-xs font-bold text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-brand-surface rounded-full overflow-hidden border border-brand-border">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                        className={`h-full ${skill.color} rounded-full shadow-[0_0_15px_rgba(167,139,250,0.3)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Education Section */}
      <section id="education" className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-brand-border/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center lg:text-left"
        >
          <div className="inline-block px-5 py-2 bg-brand-surface border border-brand-border rounded-full text-[12px] font-black text-accent-sky uppercase tracking-[0.2em] mb-8">
            Education
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter">Academic<br />Foundation</h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto lg:mx-0 font-bold leading-relaxed">
            Rooted in language, literature, and pedagogy—grounding my daily teaching in deep respect for how young learners discover understanding.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-surface border border-brand-border rounded-[40px] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-sky/5 blur-[120px] rounded-full animate-pulse" />
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-24 h-24 rounded-[32px] bg-white flex items-center justify-center p-3 shrink-0 shadow-2xl border border-white/10 overflow-hidden">
              <img 
                src={UNDIP_LOGO} 
                alt="Diponegoro University Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-display font-bold mb-4">Bachelor's Degree in English Literature</h3>
              <div className="text-accent-sky font-bold text-lg mb-6">Diponegoro University, Semarang — <span className="text-white/40 font-medium">2020 - 2025</span></div>
              <p className="text-white/60 text-lg leading-relaxed mb-10 font-medium">
                Specialisations in <strong>English Language Teaching</strong>, <strong>Applied Linguistics</strong>, and <strong>Translation</strong>. Graduated with high academic standing and a strong foundation in communicative language teaching methodology.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-brand-bg border border-brand-border rounded-[20px] p-6">
                  <div className="text-[11px] text-white/30 font-bold uppercase tracking-widest mb-4">Key Study Areas</div>
                  <div className="flex flex-wrap gap-2.5">
                    {['English Language Teaching', 'Psycholinguistics', 'Advanced Translation', 'Sociolinguistics', 'Semantics & Pragmatics', 'Advanced Writing', 'Public Speaking', 'English for Public Relations'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-brand-surface border border-brand-border rounded-xl text-sm font-bold text-white/60 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-brand-border/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="inline-block px-5 py-2 bg-brand-surface border border-brand-border rounded-full text-[12px] font-black text-accent-amber uppercase tracking-[0.2em] mb-8">
            Credentials
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter">Certifications<br />& Documents</h2>
          <p className="text-white/60 text-xl max-w-2xl font-bold leading-relaxed">
            Milestones of dedication—official credentials and teaching documents reflecting a lifelong commitment to growing as an educator.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { tag: 'Pearson English', value: 'C1', meta: '2025 Verification', color: 'text-accent-violet', bg: 'bg-accent-violet/5', link: 'https://credsverse.com/credentials/77edd47b-328c-4786-b6f6-5892efcd3f0f' },
            { tag: 'EF SET', value: '73/100', meta: 'Certified Proficiency', color: 'text-accent-sky', bg: 'bg-accent-sky/5', link: 'https://cert.efset.org/en/m75VaN?trk=public_profile_see-credential' },
            { tag: 'TOEFL ITP', value: '587', meta: 'Official Score', color: 'text-accent-amber', bg: 'bg-accent-amber/5', link: 'https://drive.google.com/file/d/19QYqegW_Pdlrbl_6mgMHbXa6sbLxwn1C/view?usp=drive_link' }
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-[32px] p-10 text-center hover:border-accent-amber/20 hover:-translate-y-2 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mx-auto mb-8 shadow-inner`}>
                <Award size={32} />
              </div>
              <div className="text-[11px] text-white/30 font-bold uppercase tracking-widest mb-2">{item.tag}</div>
              <div className={`text-5xl md:text-6xl font-display font-extrabold mb-4 ${item.color}`}>{item.value}</div>
              <div className="text-xs font-bold text-white/40 flex items-center justify-center gap-2">
                <Sparkles size={14} className="opacity-40" />
                {item.meta}
              </div>
              <div className="mt-8 pt-8 border-t border-brand-border/50 text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white transition-colors">
                View Certificate
              </div>
            </motion.a>
          ))}
        </div>

        <div className="space-y-4">
          {[
            { 
              title: 'Curriculum Vitae — Intan Fazillah (Updated 2026)', 
              link: '/assets/aistudio/CV-Intan_Fazillah_Updated_1__164f4158.pdf',
              meta: 'Official Resume PDF · Tangerang Selatan, Indonesia',
              highlight: true,
              isPdf: true
            },
            { 
              title: 'Flyer: Grade 4 Independence Day Competition', 
              link: '/assets/aistudio/Flyer_Grade_4_Independence_Day_ca09e3f5.pdf',
              meta: 'Graphic Flyer Design · Sekolah Islam Terpadu Auliya',
              highlight: false,
              isPdf: true
            },
            { 
              title: 'Video: Grade 4 EduTrip Animated Video Announcement', 
              link: '/assets/aistudio/Flyer_EduTrip_Grade_4_2026_6__db03bf29.mp4',
              meta: 'Motion Multimedia Flyer · Indonesia Science Center TMII',
              highlight: false,
              isVideo: true
            },
            { 
              title: 'Pearson English Language Teaching Certificate (1)', 
              link: 'https://credsverse.com/credentials/77edd47b-328c-4786-b6f6-5892efcd3f0f',
              meta: 'Digital Credential · Credsverse',
              highlight: false 
            },
            { 
              title: 'Pearson English Language Teaching Certificate (2)', 
              link: 'https://credsverse.com/credentials/68fc4a77-a28c-451c-8823-2d3a75a4ce2d',
              meta: 'Digital Credential · Credsverse',
              highlight: false 
            },
            { 
              title: 'TOEFL ITP Official Score Certificate (Score: 587)', 
              link: 'https://drive.google.com/file/d/19QYqegW_Pdlrbl_6mgMHbXa6sbLxwn1C/view?usp=drive_link',
              meta: 'PDF Document · Google Drive',
              highlight: false 
            },
            { 
              title: 'Pearson English Level Test Result (C1 Proficiency)', 
              link: 'https://drive.google.com/file/d/1oPBYx_eJkJk9jDN5TBBiVIAUDzRJGgaB/view?usp=drive_link',
              meta: 'PDF Document · Google Drive',
              highlight: false 
            },
            { 
              title: 'EF SET English Certificate (Score: 77/100)', 
              link: 'https://cert.efset.org/en/m75VaN?trk=public_profile_see-credential',
              meta: 'Official Verification · EF SET',
              highlight: false 
            }
          ].map((doc, i) => (
            <div 
              key={i}
              className={`bg-brand-surface border ${doc.highlight ? 'border-accent-violet/50 bg-gradient-to-r from-accent-violet/10 to-transparent' : 'border-brand-border'} rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-brand-surface-hover hover:border-brand-border/40 transition-all group`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-xl ${doc.highlight ? 'bg-accent-violet/20 text-accent-violet' : doc.isVideo ? 'bg-accent-coral/15 text-accent-coral' : 'bg-white/5 text-white/40'} flex items-center justify-center group-hover:text-accent-sky transition-colors shrink-0`}>
                  {doc.isVideo ? <Film size={22} /> : <ScrollText size={22} />}
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-white/90 transition-colors group-hover:text-white">{doc.title}</span>
                    {doc.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-accent-violet text-white uppercase tracking-wider">
                        Updated
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-white/40 font-medium mt-1">{doc.meta}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {doc.isVideo ? (
                  <button
                    onClick={() => setMediaModal({
                      type: 'video',
                      title: 'Grade 4 EduTrip Animated Video Announcement',
                      src: doc.link,
                      description: 'Animated event announcement flyer for Grade 4 EduTrip to Indonesia Science Center TMII.'
                    })}
                    className="px-5 py-2 bg-accent-coral/20 border border-accent-coral/40 rounded-lg text-[11px] font-bold text-accent-coral hover:bg-accent-coral hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Play size={13} /> Watch Video
                  </button>
                ) : (
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-brand-bg border border-brand-border rounded-lg text-[11px] font-bold text-white/50 group-hover:bg-accent-sky group-hover:text-white group-hover:border-accent-sky transition-all flex items-center gap-2"
                  >
                    {doc.highlight ? 'Download PDF' : 'Open Document'} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-brand-border/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-1.5 bg-brand-surface border border-brand-border rounded-full text-[11px] font-bold text-accent-teal uppercase tracking-widest mb-6">
            Creative Works & Teaching Media
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Curated Teaching Works</h2>
          <p className="text-white/60 text-lg max-w-2xl font-medium leading-relaxed">
            From lively school platforms to colorful slide decks and hands-on worksheets—each piece created to invite curiosity and spark joy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. English Day 2026 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-teal/40 transition-all flex flex-col justify-between min-h-[460px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <Globe size={180} />
            </div>
            <div>
              <div className="text-accent-teal font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-teal" />
                School Event Web App · 2026
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-teal transition-colors leading-tight">
                English Day 2026 Platform
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-medium mb-8 max-w-md">
                A vibrant digital space built for English Day—bringing student competitions, playful games, and event schedules together to celebrate language and friendship.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {['Event Platform', 'Interactive Learning', 'Vercel App', 'Student Engagement'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/50">{tag}</span>
                ))}
              </div>
              <a 
                href="https://englishday2026.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-bold text-accent-teal uppercase tracking-widest group-hover:text-white transition-colors"
              >
                Open Live Platform <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* 2. PPT Samples */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-amber/40 transition-all flex flex-col justify-between min-h-[460px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <Presentation size={180} />
            </div>
            <div>
              <div className="text-accent-amber font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-amber" />
                EdTech & Interactive Media
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-amber transition-colors leading-tight">
                PowerPoint & Teaching Media
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-medium mb-8 max-w-md">
                Bright, animated slides that turn abstract words into lively stories. Designed to spark smiles, pair conversations, and joyful classroom participation.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {['Interactive Slides', 'Primary ESL', 'Visual Scaffolding', 'Classroom PPT'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/50">{tag}</span>
                ))}
              </div>
              <a 
                href="https://drive.google.com/drive/folders/1L3gNKUMNDctfhh6d1GyZu7_U_Rsue2z0?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-bold text-accent-amber uppercase tracking-widest group-hover:text-white transition-colors"
              >
                Explore PPT Samples <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* 3. Multimedia & Flyers Creation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-violet/40 transition-all flex flex-col justify-between min-h-[460px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <Palette size={180} />
            </div>
            <div>
              <div className="text-accent-violet font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-violet" />
                Content & Multimedia Creation
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-violet transition-colors leading-tight">
                Educational Flyers & Motion Media
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-medium mb-8 max-w-md">
                Eye-catching digital posters and playful video announcements created for school events, field trips, and celebrations that children and parents look forward to.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {['Flyer Design', 'Video Animation', 'School Events', 'Graphic Design'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/50">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setMediaModal({
                    type: 'video',
                    title: 'Grade 4 EduTrip Animated Video Announcement',
                    src: '/assets/aistudio/Flyer_EduTrip_Grade_4_2026_6__db03bf29.mp4',
                    description: 'Animated video announcement flyer for Grade 4 EduTrip to Indonesia Science Center TMII.'
                  })}
                  className="px-4 py-2 bg-accent-violet/20 border border-accent-violet/40 text-accent-violet rounded-xl text-xs font-bold hover:bg-accent-violet hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play size={14} /> Watch EduTrip Video
                </button>
                <a
                  href="/assets/aistudio/Flyer_Grade_4_Independence_Day_ca09e3f5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-bg border border-brand-border text-white/70 rounded-xl text-xs font-bold hover:text-white hover:bg-brand-surface transition-all flex items-center gap-2"
                >
                  <FileText size={14} /> Flyer PDF
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1FGmWasovIo9TxyBu_BqnCQajZ-w1VPY5?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-bg border border-brand-border text-accent-sky rounded-xl text-xs font-bold hover:bg-accent-sky/20 transition-all flex items-center gap-2 ml-auto"
                >
                  Drive Folder <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4. Lesson Plan Samples */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-sky/40 transition-all flex flex-col justify-between min-h-[460px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <FolderOpen size={180} />
            </div>
            <div>
              <div className="text-accent-sky font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-sky" />
                Google Drive Portfolio
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-sky transition-colors leading-tight">
                Lesson Plan Samples
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-medium mb-8 max-w-md">
                Thoughtfully mapped lessons built on the Cambridge Primary framework. Every plan balances clear learning steps with room for wonder, questions, and quiet reflection.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {['Cambridge Framework', 'Cross-Curricular', 'Backward Design', 'Differentiated'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/50">{tag}</span>
                ))}
              </div>
              <a 
                href="https://drive.google.com/drive/folders/1hStO8PuI2eMRnV0ckiIF0Nn7GH-DnH2N?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-bold text-accent-sky uppercase tracking-widest group-hover:text-white transition-colors"
              >
                Explore Lesson Plans <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* 5. Module Samples */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-mint/40 transition-all flex flex-col justify-between min-h-[460px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <BookOpen size={180} />
            </div>
            <div>
              <div className="text-accent-mint font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-mint" />
                Course Materials
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-mint transition-colors leading-tight">
                Module Samples
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-medium mb-8 max-w-md">
                Step-by-step learning modules and reading guides that walk children hand-in-hand through stories, vocabulary, and grammar with warmth and clarity.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {['Module Design', 'Content Creation', 'Pedagogy', 'Instructional Guide'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/50">{tag}</span>
                ))}
              </div>
              <a 
                href="https://drive.google.com/file/d/1G8G-fKB9bL9LoRT-DkG_c2DjPCeXYIyp/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-bold text-accent-mint uppercase tracking-widest group-hover:text-white transition-colors"
              >
                View Modules <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* 6. Worksheet Samples */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-coral/40 transition-all flex flex-col justify-between min-h-[460px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <FileText size={180} />
            </div>
            <div>
              <div className="text-accent-coral font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-coral" />
                Teaching Aids
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-coral transition-colors leading-tight">
                Worksheet Samples
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-medium mb-8 max-w-md">
                Hands-on activity sheets that turn practice into play—helping young learners explore sentences, sketch ideas, and celebrate little victories on paper.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {['Resource Design', 'Activity Planning', 'Grammar', 'Task-Based'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/50">{tag}</span>
                ))}
              </div>
              <a 
                href="https://drive.google.com/drive/folders/13R_2goKc17kB12_Bv2QT8S3sHzUvNInL?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-bold text-accent-coral uppercase tracking-widest group-hover:text-white transition-colors"
              >
                View Worksheets <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-brand-border/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1.5 bg-brand-surface border border-brand-border rounded-full text-[11px] font-bold text-accent-violet uppercase tracking-widest mb-6">
            Teaching Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">How I Teach</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Four gentle principles that guide how I listen, teach, and nurture every child in my care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { 
              title: 'Curiosity & Courageous Voices', 
              icon: MessageSquare, 
              text: 'I center each day around genuine questions and warm conversations, encouraging children to share their thoughts and speak with quiet confidence.', 
              color: 'text-accent-violet', 
              bg: 'bg-accent-violet/5' 
            },
            { 
              title: 'Thematic & Connected Learning', 
              icon: Globe, 
              text: 'Weaving stories, language, and everyday discoveries together so learning feels like an adventure across the wider world, not isolated rules.', 
              color: 'text-accent-coral', 
              bg: 'bg-accent-coral/5' 
            },
            { 
              title: 'Patience, Character & Heart', 
              icon: Heart, 
              text: 'Every child learns to walk and speak in their own time. I nurture patience, mutual kindness, and good character alongside academic progress.', 
              color: 'text-accent-sky', 
              bg: 'bg-accent-sky/5' 
            },
            { 
              title: 'A Joyful & Safe Classroom Home', 
              icon: Sparkles, 
              text: 'A predictable, loving environment where routines bring comfort, questions are always welcomed, and every mistake is simply a gentle step forward.', 
              color: 'text-accent-teal', 
              bg: 'bg-accent-teal/5' 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-[40px] p-10 hover:border-brand-border/20 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <div className="text-[11px] text-white/30 font-bold uppercase tracking-widest mb-3">Pillar 0{i + 1}</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight leading-none group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-white/60 text-base leading-relaxed font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-surface border-t border-brand-border py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="w-20 h-20 rounded-full bg-brand-surface overflow-hidden mx-auto shadow-2xl ring-8 ring-brand-bg/50 flex items-center justify-center">
              <img 
                src={PROFILE_IMAGE} 
                alt="Intan Fazillah avatar footer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 tracking-tight italic">Let's <span className="not-italic text-accent-violet">Connect</span>.</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-12 font-medium leading-relaxed">
            Always happy to connect with fellow educators, schools, and families who believe in joyful, thoughtful learning.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a 
              href="mailto:intnfaz@gmail.com"
              className="px-8 py-4 bg-white text-brand-bg rounded-2xl font-bold text-sm shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2.5"
            >
              <Mail size={18} /> Email Me
            </a>
            <a 
              href="https://wa.me/6285712195746"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-bg border border-brand-border text-white rounded-2xl font-bold text-sm hover:bg-brand-surface-hover hover:border-brand-border/20 transition-all flex items-center gap-2.5"
            >
              <MessageSquare size={18} /> Text Me
            </a>
          </div>
          
          <div className="pt-16 border-t border-brand-border/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold text-white/20 uppercase tracking-[0.2em]">
            <span>© 2026 Intan Fazillah</span>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="/assets/aistudio/CV-Intan_Fazillah_Updated_1__164f4158.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Updated CV</a>
              <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Media Preview Modal */}
      <AnimatePresence>
        {mediaModal && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-brand-surface border border-brand-border rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-brand-border/60 bg-brand-surface/90">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-violet/20 text-accent-violet flex items-center justify-center shrink-0">
                    {mediaModal.type === 'video' ? <Film size={20} /> : <FileText size={20} />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white leading-tight">{mediaModal.title}</h4>
                    {mediaModal.description && (
                      <p className="text-xs text-white/50 mt-0.5">{mediaModal.description}</p>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setMediaModal(null)}
                  className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-brand-bg/40">
                {mediaModal.type === 'video' ? (
                  <div className="w-full max-w-xs md:max-w-sm rounded-2xl overflow-hidden border border-brand-border/80 shadow-2xl bg-black">
                    <video 
                      src={mediaModal.src} 
                      controls 
                      autoPlay 
                      className="w-full h-auto max-h-[58vh] object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[55vh] rounded-2xl overflow-hidden border border-brand-border bg-white/5 flex flex-col items-center justify-center p-6 text-center">
                    <FileText size={64} className="text-accent-coral mb-4 opacity-80" />
                    <p className="text-white/80 font-bold mb-4">Grade 4 Independence Day Competition Flyer</p>
                    <a 
                      href={mediaModal.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-accent-coral to-accent-amber text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-lg"
                    >
                      <ExternalLink size={16} /> Open PDF Flyer
                    </a>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-brand-border/60 bg-brand-surface/90 flex flex-wrap items-center justify-between gap-3">
                <a 
                  href={mediaModal.driveUrl || "https://drive.google.com/drive/folders/1FGmWasovIo9TxyBu_BqnCQajZ-w1VPY5?usp=sharing"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-accent-sky hover:underline flex items-center gap-1.5"
                >
                  <FolderOpen size={14} /> Open All Flyers on Google Drive <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => setMediaModal(null)}
                  className="px-5 py-2 bg-brand-bg border border-brand-border text-white/70 hover:text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
