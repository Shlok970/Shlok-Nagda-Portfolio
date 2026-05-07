/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import React, { useEffect, useState } from "react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Database, 
  Layout, 
  Code2, 
  Lightbulb, 
  ChevronRight,
  GraduationCap,
  Award
} from "lucide-react";
import { PORTFOLIO_DATA } from "./constants";

const Section = ({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id: string 
}) => (
  <section 
    id={id} 
    className={`min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden ${className}`}
  >
    {children}
  </section>
);

const GlowingBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
    <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-indigo-500/50 to-transparent" />
    <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Education", "Projects", "Certificates", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#030305]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-display text-xl font-bold tracking-tighter hover:scale-105 transition-transform flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] text-white">S</div>
          <span className="text-gradient">{PORTFOLIO_DATA.name.toUpperCase()}</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const FloatingRobot = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate rotation based on cursor position relative to window center
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="hidden lg:flex flex-col items-center justify-center p-8 relative"
    >
      <div className="relative w-48 h-56 group">
        {/* Antenna */}
        <motion.div 
          animate={{ rotate: mousePos.x * 10 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-8 bg-blue-500 rounded-full"
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full blur-[2px] animate-pulse" />
        </motion.div>

        {/* Head */}
        <motion.div
          animate={{ 
            rotateX: -mousePos.y * 20, 
            rotateY: mousePos.x * 20,
            y: [0, -5, 0]
          }}
          transition={{
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="w-full h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl preserve-3d"
        >
          {/* Eyes Container */}
          <div className="flex justify-around items-center h-full mt-2">
            {[0, 1].map((i) => (
              <div key={i} className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
                {/* Pupil */}
                <motion.div 
                  animate={{ 
                    x: mousePos.x * 10,
                    y: mousePos.y * 10
                  }}
                  className="w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                />
              </div>
            ))}
          </div>
          {/* Mouth */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500/30 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-20, 20] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-1/2 h-full bg-blue-400" 
            />
          </div>
        </motion.div>

        {/* Neck */}
        <div className="w-6 h-4 bg-white/5 mx-auto" />

        {/* Body */}
        <motion.div 
          animate={{ 
            rotateY: mousePos.x * 10,
            y: [0, -3, 0]
          }}
          transition={{
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }
          }}
          className="w-40 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] p-4 shadow-xl mx-auto"
        >
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-blue-500/50" />
            <div className="w-2 h-2 rounded-full bg-indigo-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500/50" />
          </div>
        </motion.div>
      </div>

      {/* Floating particles around robot */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-500/20 blur-[2px]"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative font-sans antialiased bg-[#030305]">
      <GlowingBackground />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <Section id="hero" className="!pt-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-8 glass p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
              >
                <div className="h-px w-16 bg-gradient-to-r from-blue-500/50 to-transparent" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-blue-500">Systems Designer</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient mb-8">
                {PORTFOLIO_DATA.name.toUpperCase()}
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
                {PORTFOLIO_DATA.about}
              </p>
            </div>
          </motion.div>
          
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <FloatingRobot />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-indigo-500/10 border border-indigo-500/20 rounded-[2.5rem] p-8 backdrop-blur-xl flex flex-col justify-center relative group"
            >
              <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-indigo-400 font-bold mb-4 block">Current Focus</span>
              <p className="text-lg md:text-xl text-indigo-100 font-light italic leading-snug">
                "Building projects that help me grow as a programmer and strengthening my problem-solving ability."
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Education Section (Updated with B.Tech info) */}
      <Section id="education">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
             <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-indigo-400 mb-4 block">Academic Path</span>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Education & Stats</h2>
             
             <div className="glass p-10 rounded-[2rem] max-w-3xl w-full flex flex-col md:flex-row items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <GraduationCap size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{PORTFOLIO_DATA.education.pursuing}</h3>
                  <p className="text-gray-400 uppercase tracking-[0.1em] text-xs font-bold leading-relaxed">
                    {PORTFOLIO_DATA.education.college}
                  </p>
                </div>
             </div>
          </motion.div>

          <div className="glass p-8 md:p-12 rounded-[3.5rem] flex flex-wrap justify-center md:justify-between items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            {[
              { label: "Secondary (10th)", value: PORTFOLIO_DATA.education.tenth, unit: "SCORE" },
              { label: "HS (12th)", value: PORTFOLIO_DATA.education.twelfth, unit: "SCORE" },
              { label: "MHTCET", value: PORTFOLIO_DATA.education.mhtcet.split(" ")[0], unit: "PERCENTILE" },
              { label: "JEE", value: PORTFOLIO_DATA.education.jee.split(" ")[0], unit: "PERCENTILE" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center md:items-start group"
              >
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2 group-hover:text-indigo-400 transition-colors uppercase">{stat.label}</span>
                <span className="text-5xl md:text-7xl font-bold text-white group-hover:scale-110 transition-transform origin-left">
                  {stat.value}
                </span>
                <span className="text-[9px] font-mono text-white/20 mt-1 uppercase tracking-widest">{stat.unit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section (Updated for more items) */}
      <Section id="projects">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-blue-500/50" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-blue-500">Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display">Innovation Labs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative flex flex-col h-full overflow-hidden"
              >
                <div className="flex flex-col h-full glass border-white/5 p-8 rounded-3xl group-hover:border-blue-500/30 transition-all duration-500 relative">
                  <div className="mb-auto relative z-10">
                    <div className="text-[9px] font-mono text-blue-400/60 mb-2 uppercase tracking-[0.2em]">Iteration_0{idx + 1}</div>
                    <h3 className="text-lg font-bold tracking-tight mb-4 group-hover:text-blue-400 transition-colors uppercase leading-tight min-h-[3rem]">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="mt-8 relative z-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-white/5 group-hover:bg-blue-600 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all"
                    >
                      Source Code <Github size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certificates Section (Fixed links) */}
      <Section id="certificates">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-20 text-center">
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-indigo-400 mb-4 block">Proof of Skill</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Accreditation Hub</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.certificates.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row glass border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
              >
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-5/12 aspect-[4/3] md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-white/5 relative block"
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={cert.image} 
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="text-white" size={32} />
                  </div>
                </a>
                <div className="p-10 md:w-7/12 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Award size={80} />
                  </div>
                  <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {cert.organization}
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-indigo-300 transition-colors uppercase">{cert.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light mb-6 border-l border-white/10 pl-4">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{cert.date}</span>
                    <a 
                      href={cert.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 hover:bg-white hover:text-black rounded-lg transition-all"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="!min-h-[70vh] bg-gradient-to-t from-blue-600/5 to-transparent relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 border-b border-white/5 pb-8">
              LET'S BUILD THE <span className="text-gradient">FUTURE</span>.
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light mb-12">
              Ready to collaborate on innovative projects or have a coffee talk about AI/ML? Drop a message.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-96 glass bg-gradient-to-br from-indigo-600/20 to-blue-700/20 p-10 rounded-[3rem] border-blue-500/20 group"
          >
            <div className="space-y-8">
              <a 
                href={`mailto:${PORTFOLIO_DATA.contacts.email}`}
                className="flex flex-col gap-1 hover:translate-x-2 transition-transform group"
              >
                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Email Address</span>
                <span className="text-sm md:text-md font-bold group-hover:text-blue-300 transition-colors truncate">{PORTFOLIO_DATA.contacts.email}</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href={PORTFOLIO_DATA.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 glass border-white/10 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all group/btn"
                >
                  <Github size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">GitHub</span>
                </a>
                <a 
                  href={PORTFOLIO_DATA.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 glass border-white/10 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#0077B5] hover:text-white transition-all group/btn"
                >
                  <Linkedin size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-3 opacity-20">
              <div className="h-px flex-grow bg-white" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">V-3.0_PRO</span>
              <div className="h-px flex-grow bg-white" />
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 text-center">
           <p className="text-[10px] uppercase tracking-[0.5em] text-white/10 font-bold">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name.toUpperCase()} • CRAFTED IN MUMBAI • BH_IND
          </p>
        </div>
      </Section>
    </main>
  );
}
