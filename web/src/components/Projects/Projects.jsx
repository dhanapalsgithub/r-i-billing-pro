import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, X, ArrowUpRight } from 'lucide-react';
import { Section } from '../common/effects';
import { projects } from '../../data/data';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], []);
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [active, setActive] = useState(null);

  const filtered = projects.filter((p) => {
    const matchCat = cat === 'All' || p.category === cat;
    const matchQ = (p.name + p.desc + p.tech.join(' ')).toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" subtitle="A few products I've designed and shipped end-to-end.">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${cat === c ? 'bg-[#FF7A00] text-white' : 'glass hover:text-[#FF7A00]'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects..."
            className="w-full glass rounded-full pl-11 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#FF7A00]/40 bg-transparent"
          />
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div key={p.id} layout
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[30px] overflow-hidden group cursor-pointer"
              onClick={() => setActive(p)}>
              <div className="relative overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy"
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center`}>
                  <span className="glass-strong rounded-full px-5 py-2 text-sm font-semibold flex items-center gap-2">
                    View Details <ArrowUpRight size={16} />
                  </span>
                </div>
                <span className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-xs font-semibold">{p.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-sm opacity-70 line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-medium glass rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center opacity-60 py-16">No projects match your search.</p>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[120] grid place-items-center p-4"
            style={{ background: 'rgba(3,11,24,0.6)', backdropFilter: 'blur(8px)' }}>
            <motion.div
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-[30px] overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar">
              <div className="relative">
                <img src={active.image} alt={active.name} className="w-full aspect-[3/2] object-cover" />
                <button aria-label="Close" onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full grid place-items-center glass-strong">
                  <X size={18} />
                </button>
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00]">{active.category}</span>
                <h3 className="text-2xl font-extrabold mt-1 mb-3">{active.name}</h3>
                <p className="opacity-80 leading-relaxed">{active.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="text-sm font-medium glass rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={active.url} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white bg-[#FF7A00] hover:bg-[#e56d00] transition-colors">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={active.url} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold glass hover:text-[#FF7A00] transition-colors">
                    Visit Website <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
