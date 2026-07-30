import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useInView, animate } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/* Section wrapper with heading */
export function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 px-5 sm:px-8 ${className}`}>
      <div className="max-w-[72rem] mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            {eyebrow && (
              <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#FF7A00] mb-3">
                {eyebrow}
              </span>
            )}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{title}</h2>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg opacity-70 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

/* Floating blobs + glass particles background */
export function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 4 + Math.random() * 10,
        dur: 8 + Math.random() * 12,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, #FF7A00, transparent 65%)', animation: 'blobFloat 18s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, #133A63, transparent 65%)', animation: 'blobFloat 22s ease-in-out infinite reverse' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #FF7A00, transparent 70%)', animation: 'blobFloat 26s ease-in-out infinite' }}
      />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/50 dark:bg-white/20"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, backdropFilter: 'blur(2px)' }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* Scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
    >
      <div className="w-full h-full bg-gradient-to-r from-[#FF7A00] via-[#ffb066] to-[#133A63]" />
    </motion.div>
  );
}

/* Back to top */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <motion.button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={false}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6, pointerEvents: show ? 'auto' : 'none' }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-full glass-strong grid place-items-center text-[#FF7A00]"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </motion.button>
  );
}

/* Loading screen */
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] grid place-items-center"
      style={{ background: '#071B36' }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-14 h-14 mx-auto rounded-full border-2 border-white/15 border-t-[#FF7A00]"
        />
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="mt-5 text-white/80 font-semibold tracking-[0.3em] text-sm"
        >
          RI BILLING PRO
        </motion.p>
      </div>
    </motion.div>
  );
}

/* Animated cursor (desktop only) */
export function AnimatedCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let rx = 0, ry = 0, mx = 0, my = 0, raf;
    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    loop();
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="hidden md:block">
      <div ref={dot} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF7A00] z-[150] pointer-events-none" />
      <div ref={ring} className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#FF7A00]/50 z-[150] pointer-events-none" />
    </div>
  );
}

/* Count-up number */
export function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* Circular progress ring */
export function CircularProgress({ level, name }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [pct, setPct] = useState(0);
  const r = 52;
  const c = 2 * Math.PI * r;
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, level, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setPct(Math.round(v)) });
    return () => controls.stop();
  }, [inView, level]);
  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="currentColor" strokeWidth="8" className="opacity-10" />
          <circle
            cx="60" cy="60" r={r} fill="none" stroke="url(#grad)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={c - (pct / 100) * c}
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#133A63" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center text-xl font-bold">{pct}%</div>
      </div>
      <span className="text-sm font-semibold opacity-80">{name}</span>
    </div>
  );
}
