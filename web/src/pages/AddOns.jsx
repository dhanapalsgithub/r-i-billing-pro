import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MessageSquareText, ShieldAlert, CalendarDays, 
  HelpCircle, Eye, Share2, MapPin, Bot, Smartphone, Tv, Video, Sparkles 
} from 'lucide-react';
import { Section } from '../common/effects';
import { addOnsData } from '../../data/data';

const ICON_MAP = {
  Search,
  MessageSquareText,
  ShieldAlert,
  CalendarDays,
  HelpCircle,
  Eye,
  Share2,
  MapPin,
  Bot,
  Smartphone,
  Tv,
  Video
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  viewport: { once: true, margin: '-60px' },
};

export function AddOns() {
  const [activeTab, setActiveTab] = useState('gmb');

  const currentServices = activeTab === 'gmb' ? addOnsData.gmbAndSmo : addOnsData.videoServices;

  return (
    <Section 
      id="add-ons" 
      eyebrow="Add-On Services" 
      title="Scale your local reach & video presence" 
      subtitle="Specialized digital marketing, profile optimization, and modern video production add-ons."
    >
      {/* Tab Switcher */}
      <div className="flex justify-center mb-10">
        <div className="glass p-1.5 rounded-full flex gap-2 border border-white/10">
          <button
            onClick={() => setActiveTab('gmb')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'gmb'
                ? 'bg-gradient-to-r from-[#FF7A00] to-[#133A63] text-white shadow-lg shadow-orange-500/20'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <MapPin size={16} /> GMB & Social Optimization
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'video'
                ? 'bg-gradient-to-r from-[#FF7A00] to-[#133A63] text-white shadow-lg shadow-orange-500/20'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Video size={16} /> AI & Video Production
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentServices.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass rounded-[30px] p-7 group flex flex-col justify-between"
              >
                <div>
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#133A63] text-white mb-5 shadow-lg shadow-orange-500/10">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00] mb-2 block">
                    Add-On 0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}