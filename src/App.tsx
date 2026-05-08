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
  Phone,
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
  FileText
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

        <a 
          href="mailto:intnfaz@gmail.com"
          className="px-5 py-2.5 bg-gradient-to-br from-accent-violet to-accent-coral text-white border-none rounded-lg font-display font-bold text-sm shadow-lg hover:-translate-y-0.5 hover:shadow-accent-violet/20 transition-all duration-200"
        >
          Contact Me
        </a>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-10 pt-[120px] pb-20 gap-16 lg:gap-32 overflow-hidden">
        {/* Animated Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gradient-to-br from-accent-violet/20 via-accent-coral/20 to-accent-amber/20 blur-[120px] animate-gradient rounded-full -z-10" />
        
        <div className="flex-1 text-center lg:text-left relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[56px] md:text-[72px] lg:text-[96px] font-display font-black leading-[0.95] mb-8 tracking-tighter"
          >
            Hi, I am <br />
            <span className="bg-gradient-to-br from-accent-violet via-accent-coral to-accent-amber bg-clip-text text-transparent animate-gradient">Intan Fazillah</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-semibold"
          >
            I craft communicative classrooms where learners aged 3-18 find their voice. I turn language learning into meaningful, real-world experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-5"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-10 py-4.5 bg-gradient-to-br from-accent-violet to-accent-coral text-white rounded-2xl font-black text-base shadow-[0_20px_50px_rgba(167,139,250,0.3)] hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(167,139,250,0.4)] transition-all flex items-center gap-3"
            >
              <Rocket size={22} /> View My Work
            </button>
            <a 
              href="https://drive.google.com/drive/folders/1hStO8PuI2eMRnV0ckiIF0Nn7GH-DnH2N?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4.5 bg-brand-surface border border-brand-border text-white rounded-2xl font-black text-base hover:bg-brand-surface-hover hover:border-brand-border/20 transition-all flex items-center gap-3"
            >
              <FolderOpen size={22} /> Lesson Plans
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
            <div className="w-[100px] h-[100px] rounded-full bg-brand-bg overflow-hidden mx-auto mb-6 shadow-2xl ring-4 ring-white/5 flex items-center justify-center">
              <img 
                src={PROFILE_IMAGE} 
                alt="Intan Fazillah profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-display text-2xl font-bold mb-1.5">Intan Fazillah</h3>
            <div className="text-accent-coral font-bold text-sm uppercase tracking-wider mb-6">English Language Teacher</div>
            
            <div className="space-y-3.5 mb-8">
              {[
                { icon: MapPin, text: 'Depok, Indonesia' },
                { icon: Mail, text: 'intnfaz@gmail.com' },
                { icon: Phone, text: '+62 857-1219-5746' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2.5 text-white/50 text-sm font-medium">
                  <item.icon size={16} className="text-white/30" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2.5">
              {[
                { icon: Mail, href: 'mailto:intnfaz@gmail.com' },
                { icon: Linkedin, href: '#' },
                { icon: Phone, href: 'tel:+6285712195746' },
              ].map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
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
            { label: 'Age Groups Taught', value: '3-18', color: 'text-accent-violet' },
            { label: 'Framework Aligned', value: 'GSE', color: 'text-accent-coral' },
            { label: 'English Proficiency', value: 'Advanced', color: 'text-accent-sky' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-[32px] p-8 text-center hover:border-brand-border/20 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className={`font-display text-4xl md:text-5xl font-black mb-2.5 ${stat.color}`}>{stat.value}</div>
              <div className="text-[12px] text-white/40 font-black uppercase tracking-widest">{stat.label}</div>
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
          <p className="text-white/60 text-xl max-w-2xl font-bold leading-relaxed">Pioneering new standards in language education through classroom leadership, digital engagement, and cross-cultural communication.</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-brand-border rounded-[32px] p-8 md:p-12 hover:border-brand-border/20 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-mint/10 flex items-center justify-center text-accent-mint shrink-0 shadow-lg">
                  <School size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">English Teacher</h3>
                  <div className="text-accent-mint font-bold text-sm">Tunas Iblam School, Depok</div>
                </div>
              </div>
              <div className="text-right">
                <div className="px-4 py-1.5 bg-brand-bg border border-brand-border rounded-full text-xs font-bold text-white/40 whitespace-nowrap">
                  Nov 2025 - Present
                </div>
              </div>
            </div>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                'Deliver structured English lessons for elementary students using GSE-aligned coursebooks.',
                'Design lesson plans, learning modules, and assessment instruments (tests, quizzes, performance tasks).',
                'Lead and coordinate the school-wide English Day Program with comprehensive learning frameworks.',
                'Organise language-related school events and cultural activities.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/50 text-base font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-mint mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-brand-border rounded-[32px] p-8 md:p-12 hover:border-brand-border/20 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-coral/10 flex items-center justify-center text-accent-coral shrink-0 shadow-lg">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">English Teacher</h3>
                  <div className="text-accent-coral font-bold text-sm">English 1, Medan</div>
                </div>
              </div>
              <div className="text-right">
                <div className="px-4 py-1.5 bg-brand-bg border border-brand-border rounded-full text-xs font-bold text-white/40 whitespace-nowrap">
                  May 2025 - Oct 2025
                </div>
              </div>
            </div>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                'Taught English to learners aged 3-18 across multi-level groups with adapted methodology.',
                'Planned and delivered communicative lessons; managed classroom dynamics and formative assessments.',
                'Coordinated end-of-term achievement events and parent-teacher conferences.',
                'Administered placement tests and supported programme promotion.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/50 text-base font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-coral mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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
            Technical Proficiency
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter">Skillset &<br />Mastery</h2>
          <p className="text-white/60 text-xl max-w-2xl font-bold leading-relaxed">Quantifiable expertise in pedagogical delivery, language proficiency, and instructional design.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Languages className="text-accent-violet" size={24} /> Language Mastery
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'Advanced English Proficiency', level: 85, color: 'bg-accent-violet' },
                  { label: 'Indonesian (Native)', level: 94, color: 'bg-accent-coral' },
                  { label: 'Academic Writing', level: 86, color: 'bg-accent-sky' },
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

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Sparkles className="text-accent-mint" size={24} /> Teaching & Pedagogy
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'Communicative Language Teaching', level: 88, color: 'bg-accent-mint' },
                  { label: 'Curriculum & Lesson Design', level: 84, color: 'bg-accent-amber' },
                  { label: 'Classroom Management', level: 87, color: 'bg-accent-coral' },
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
          <p className="text-white/60 text-xl max-w-2xl mx-auto lg:mx-0 font-bold leading-relaxed">Rigorous training in language teaching methodology and linguistics at Diponegoro University.</p>
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
          <p className="text-white/60 text-xl max-w-2xl font-bold leading-relaxed">Verified language proficiency credentials and official teaching documents.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { tag: 'Pearson English', value: 'C1', meta: '2025 Verification', color: 'text-accent-violet', bg: 'bg-accent-violet/5', link: 'https://credsverse.com/credentials/77edd47b-328c-4786-b6f6-5892efcd3f0f' },
            { tag: 'EF SET', value: 'C2', meta: 'Expert Proficiency', color: 'text-accent-sky', bg: 'bg-accent-sky/5', link: 'https://cert.efset.org/k2gayq' },
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
              <div className={`text-6xl font-display font-extrabold mb-4 ${item.color}`}>{item.value}</div>
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
            { title: 'Pearson English Language Teaching Certificate (1)', link: 'https://credsverse.com/credentials/77edd47b-328c-4786-b6f6-5892efcd3f0f' },
            { title: 'Pearson English Language Teaching Certificate (2)', link: 'https://credsverse.com/credentials/68fc4a77-a28c-451c-8823-2d3a75a4ce2d' },
            { title: 'TOEFL ITP Official Certificate', link: 'https://drive.google.com/file/d/19QYqegW_Pdlrbl_6mgMHbXa6sbLxwn1C/view?usp=drive_link' },
            { title: 'Pearson English Level Test Result', link: 'https://drive.google.com/file/d/1oPBYx_eJkJk9jDN5TBBiVIAUDzRJGgaB/view?usp=drive_link' },
            { title: 'EF SET English Certificate', link: 'https://cert.efset.org/k2gayq' }
          ].map((doc, i) => (
            <a 
              key={i}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-surface border border-brand-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-brand-surface-hover hover:border-brand-border/20 transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent-sky transition-colors">
                  <ScrollText size={20} />
                </div>
                <div className="text-center md:text-left">
                  <div className="font-bold text-white/80 transition-colors group-hover:text-white">{doc.title}</div>
                  <div className="text-xs text-white/30 font-medium mt-1">PDF Document · Google Drive</div>
                </div>
              </div>
              <div className="px-6 py-2 bg-brand-bg border border-brand-border rounded-lg text-[11px] font-bold text-white/40 group-hover:bg-accent-sky group-hover:text-white group-hover:border-accent-sky transition-all flex items-center gap-2">
                Open Document <ExternalLink size={14} />
              </div>
            </a>
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
            Projects & Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">My Teaching Work</h2>
          <p className="text-white/60 text-lg max-w-2xl font-medium">Interactive lesson applications, curated lesson plan portfolios, and digital teaching materials.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.a 
            href="https://fancy-toffee-8c1701.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-teal/20 transition-all flex flex-col justify-between min-h-[440px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <Globe size={180} />
            </div>
            <div>
              <div className="text-accent-teal font-black text-[10px] uppercase tracking-widest mb-8">School Event Web App</div>
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-accent-teal transition-colors leading-tight">English Day Tunas Iblam 2025-2026</h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium mb-10 max-w-sm">
                An interactive web application for the school-wide English Day Program. Features lesson activities and student engagement tools.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Interactive Learning', 'Progress Tracking', 'Web-based'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/40">{tag}</span>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3 text-[11px] font-bold text-white/20 uppercase tracking-widest group-hover:text-accent-teal transition-colors">
              Open Live App <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          <motion.a 
            href="https://drive.google.com/drive/folders/1hStO8PuI2eMRnV0ckiIF0Nn7GH-DnH2N?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-amber/20 transition-all flex flex-col justify-between min-h-[440px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <FolderOpen size={180} />
            </div>
            <div>
              <div className="text-accent-amber font-black text-[10px] uppercase tracking-widest mb-8">Google Drive Portfolio</div>
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-accent-amber transition-colors leading-tight">Lesson Plan Samples</h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium mb-10 max-w-sm">
                A curated collection of lesson plans demonstrating backward design, GSE alignment, and differentiated instruction.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['GSE-Aligned', 'Backward Design', 'Multi-level'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/40">{tag}</span>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3 text-[11px] font-bold text-white/20 uppercase tracking-widest group-hover:text-accent-amber transition-colors">
              Explore Repository <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          <motion.a 
            href="https://drive.google.com/file/d/1G8G-fKB9bL9LoRT-DkG_c2DjPCeXYIyp/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-sky/20 transition-all flex flex-col justify-between min-h-[440px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <BookOpen size={180} />
            </div>
            <div>
              <div className="text-accent-sky font-black text-[10px] uppercase tracking-widest mb-8">Course Materials</div>
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-accent-sky transition-colors leading-tight">Module Samples</h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium mb-10 max-w-sm">
                Comprehensive teaching modules and instructional materials developed for various English language learner proficiency levels.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Module Design', 'Content Creation', 'Pedagogy'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/40">{tag}</span>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3 text-[11px] font-bold text-white/20 uppercase tracking-widest group-hover:text-accent-sky transition-colors">
              View Modules <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          <motion.a 
            href="https://drive.google.com/drive/folders/13R_2goKc17kB12_Bv2QT8S3sHzUvNInL?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-brand-surface border border-brand-border rounded-[40px] p-10 md:p-12 hover:border-accent-coral/20 transition-all flex flex-col justify-between min-h-[440px]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-40 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <FileText size={180} />
            </div>
            <div>
              <div className="text-accent-coral font-black text-[10px] uppercase tracking-widest mb-8">Teaching Aids</div>
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-accent-coral transition-colors leading-tight">Worksheet Samples</h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium mb-10 max-w-sm">
                Creative and engaging worksheets designed to reinforce language acquisition, grammar precision, and vocabulary retention.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Resource Design', 'Activity Planning', 'Grammar'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-brand-bg border border-brand-border rounded-xl text-xs font-bold text-white/40">{tag}</span>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3 text-[11px] font-bold text-white/20 uppercase tracking-widest group-hover:text-accent-coral transition-colors">
              View Worksheets <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
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
          <p className="text-white/60 text-lg max-w-2xl mx-auto lg:mx-0 font-medium">Four pillars that guide every lesson I design and every interaction I have with students.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Communicative & Learner-Centred', icon: MessageSquare, text: 'I design lessons around authentic communication tasks that give students meaningful reasons to use English.', color: 'text-accent-violet', bg: 'bg-accent-violet/5' },
            { title: 'Differentiation & Inclusion', icon: Heart, text: 'I tailor content, pace, and output expectations to individual needs using tiered activities and scaffolding.', color: 'text-accent-coral', bg: 'bg-accent-coral/5' },
            { title: 'Assessment for Learning', icon: ChartLine, text: 'I use formative and summative tools to track progress and inform instruction. Students are involved in self-assessment.', color: 'text-accent-sky', bg: 'bg-accent-sky/5' },
            { title: 'Positive Classroom Culture', icon: Sparkles, text: 'I create a structured, warm environment where mistakes are treated as learning opportunities.', color: 'text-accent-teal', bg: 'bg-accent-teal/5' }
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
              <p className="text-white/50 text-base leading-relaxed font-medium">{item.text}</p>
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
            Open to teaching opportunities, collaborations, and conversations about language education.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a 
              href="mailto:intnfaz@gmail.com"
              className="px-8 py-4 bg-white text-brand-bg rounded-2xl font-bold text-sm shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2.5"
            >
              <Mail size={18} /> Email Me
            </a>
            <a 
              href="tel:+6285712195746"
              className="px-8 py-4 bg-brand-bg border border-brand-border text-white rounded-2xl font-bold text-sm hover:bg-brand-surface-hover hover:border-brand-border/20 transition-all flex items-center gap-2.5"
            >
              <Phone size={18} /> Call Me
            </a>
          </div>
          
          <div className="pt-16 border-t border-brand-border/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold text-white/20 uppercase tracking-[0.2em]">
            <span>© 2026 Intan Fazillah</span>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <span>Crafted for Educational Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
