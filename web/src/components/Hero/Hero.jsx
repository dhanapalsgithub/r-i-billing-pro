import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Mail, ArrowRight, Download, PhoneCall } from 'lucide-react';
import { profile } from '../../data/data';

const roles = ['React Developer', 'UI/UX Designer', 'Business Software Developer'];

function Typewriter() {
  const [txt, setTxt] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = roles[i % roles.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setTxt(word.slice(0, txt.length + 1));
        if (txt.length + 1 === word.length) setTimeout(() => setDel(true), 1100);
      } else {
        setTxt(word.slice(0, txt.length - 1));
        if (txt.length === 0) { setDel(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i]);
  return (
    <span className="text-[#FF7A00]">
      {txt}
      <span className="inline-block w-[2px] h-[1em] bg-[#FF7A00] ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -10, y: px * 12 });
  };

  const socials = [
    { icon: Github, href: profile.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/919360380276', label: 'WhatsApp' },
    { icon: Mail, href: profile.socials.email, label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center px-5 sm:px-8 pt-28 pb-16">
      <div className="max-w-[72rem] mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {profile.tagline}
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Hi, I&apos;m <span className="text-gradient">Dhanapal</span>
          </h1>
          <p className="mt-5 text-xl sm:text-2xl font-semibold h-8">
            <Typewriter />
          </p>
          <p className="mt-5 max-w-lg text-base sm:text-lg opacity-70">
            I build premium business software, ERP and billing systems, and modern web experiences that help brands
            grow. Founder of {profile.company}.
          </p>

          {/* Above-the-fold Optimized High-Visibility CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a 
              href="https://wa.me/919360380276?text=Hi%20Dhanapal,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." 
              target="_blank" 
              rel="noreferrer" 
              className="glass-shine inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white bg-[#FF7A00] hover:bg-[#e56d00] transition-colors shadow-lg shadow-[#FF7A00]/25"
            >
              <MessageCircle size={18} /> Hire Me on WhatsApp
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold glass-strong hover:text-[#FF7A00] transition-colors">
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="/Dhanapal_UI_Developer_Resume.pdf" 
              download="Dhanapal_UI_Developer_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold glass hover:text-[#FF7A00] transition-colors"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full grid place-items-center glass hover:text-[#FF7A00] transition-colors"
              >
                <s.icon size={19} />
              </a>
            ))}
            <a
              href="tel:9360380276"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium glass px-4 py-2.5 rounded-full hover:text-[#FF7A00] transition-colors ml-2"
            >
              <PhoneCall size={15} className="text-[#FF7A00]" /> +91 9360380276
            </a>
          </div>
        </motion.div>

        {/* Speed-Optimized Image Section (Instant LCP without heavy layout shift animations) */}
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          className="relative mx-auto w-full max-w-sm"
          style={{ perspective: 1000 }}
        >
          <div
            className="glass-strong glass-shine rounded-[30px] p-4 relative"
            style={{ 
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div>
              <img
                src={profile.image}
                alt="Dhanapal, React Frontend Developer"
                loading="eager"
                fetchPriority="high"
                width="400"
                height="400"
                className="w-full rounded-[22px] object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-[#FF7A00]">6+</p>
              <p className="text-xs font-medium opacity-70">Years Exp.</p>
            </div>
            <div className="absolute -top-5 -right-5 glass-strong rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-[#FF7A00]">50+</p>
              <p className="text-xs font-medium opacity-70">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}