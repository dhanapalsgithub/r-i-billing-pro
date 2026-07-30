import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Mail, ArrowRight, Download } from 'lucide-react';
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
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -10, y: px * 12 });
  };

  const socials = [
    { icon: Github, href: profile.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, href: profile.socials.whatsapp, label: 'WhatsApp' },
    { icon: Mail, href: profile.socials.email, label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center px-5 sm:px-8 pt-28 pb-16">
      <div className="max-w-[72rem] mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="glass-shine inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white bg-[#FF7A00] hover:bg-[#e56d00] transition-colors">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold glass-strong hover:text-[#FF7A00] transition-colors">
              Contact Me
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold glass hover:text-[#FF7A00] transition-colors">
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.08 }}
                className="w-11 h-11 rounded-full grid place-items-center glass hover:text-[#FF7A00] transition-colors"
              >
                <s.icon size={19} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ perspective: 1000 }}
          className="relative mx-auto"
        >
          <motion.div
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="glass-strong glass-shine rounded-[30px] p-4 max-w-sm relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={profile.image}
                alt="Dhanapal, React Frontend Developer"
                loading="eager"
                className="w-full rounded-[22px] object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-[#FF7A00]">6+</p>
              <p className="text-xs font-medium opacity-70">Years Exp.</p>
            </div>
            <div className="absolute -top-5 -right-5 glass-strong rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-[#FF7A00]">50+</p>
              <p className="text-xs font-medium opacity-70">Projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
