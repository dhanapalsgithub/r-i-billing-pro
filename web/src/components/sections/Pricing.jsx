import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { Section } from '../common/effects';
import { websitePackages, digitalMarketingPackages, addOnsList } from '../../data/pricingData';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export function Pricing() {
  const [activeTab, setActiveTab] = useState('websites');

  return (
    <Section 
      id="pricing" 
      eyebrow="Investment Plans" 
      title="Transparent Pricing for RI Billing Pro & Digital Growth" 
      subtitle="Choose a high-performance web package, complete digital marketing retainer, or powerful add-ons."
    >
      {/* Switcher Tabs */}
      <div className="flex justify-center mb-12">
        <div className="glass p-1.5 rounded-full flex gap-2 border border-white/10">
          <button
            onClick={() => setActiveTab('websites')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'websites'
                ? 'bg-[#FF7A00] text-white shadow-lg shadow-orange-500/25'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            Website Packages
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'marketing'
                ? 'bg-[#FF7A00] text-white shadow-lg shadow-orange-500/25'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            Digital Marketing (DMS)
          </button>
          <button
            onClick={() => setActiveTab('addons')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'addons'
                ? 'bg-[#FF7A00] text-white shadow-lg shadow-orange-500/25'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            Add-Ons & GMB
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* WEBSITE PACKAGES */}
        {activeTab === 'websites' && (
          <motion.div 
            key="websites"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {websitePackages.map((pkg, i) => (
              <motion.div 
                key={pkg.name}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-[30px] p-8 flex flex-col justify-between relative group border border-white/10"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-full">
                      {pkg.validity} Validity
                    </span>
                    <span className="text-xs line-through opacity-50">{pkg.origPrice}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-[#FF7A00] mb-6">
                    {pkg.price} <span className="text-xs font-normal opacity-60">+ 18% GST</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm opacity-80 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Pages: <strong>{pkg.pages}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Free Domain (.in / .co.in): <strong>{pkg.freeDomain}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Free High-Speed Hosting: <strong>{pkg.freeHosting}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Built-in SEO Work: <strong>{pkg.seo}</strong>
                    </li>
                    {pkg.addon !== "No" && (
                      <li className="flex items-center gap-2 text-[#FF7A00] font-medium">
                        <Sparkles size={16} /> Addon included: {pkg.addon}
                      </li>
                    )}
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 rounded-2xl bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold text-center shadow-lg shadow-orange-500/20 transition-transform active:scale-95 block"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* DIGITAL MARKETING PACKAGES */}
        {activeTab === 'marketing' && (
          <motion.div 
            key="marketing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {digitalMarketingPackages.map((dms, i) => (
              <motion.div 
                key={dms.name}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-[30px] p-8 flex flex-col justify-between relative group border border-white/10"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-full mb-4 inline-block">
                    Monthly Retainer
                  </span>
                  
                  <h3 className="text-2xl font-black mb-1">{dms.name}</h3>
                  <div className="text-3xl font-extrabold text-[#FF7A00] mb-6">
                    {dms.price} <span className="text-xs font-normal opacity-65">/ month</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm opacity-80 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Post Designs: <strong>{dms.posts}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Video Creation: <strong>{dms.video}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Meta Ad Support: <strong>{dms.adSupport}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Optimization: <strong>{dms.profile}</strong>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 rounded-2xl bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold text-center shadow-lg shadow-orange-500/20 transition-transform active:scale-95 block"
                >
                  Select Package
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ADD-ONS & GMB SUPPORT */}
        {activeTab === 'addons' && (
          <motion.div 
            key="addons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {addOnsList.map((addon, i) => (
              <motion.div 
                key={addon.title}
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-[25px] p-6 flex flex-col justify-between border border-white/10"
              >
                <div>
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#FF7A00]/10 text-[#FF7A00] mb-4">
                    <Tag size={18} />
                  </span>
                  <h4 className="font-bold text-base mb-2">{addon.title}</h4>
                </div>
                <div className="text-lg font-black text-[#FF7A00] pt-4 border-t border-white/10 mt-2">
                  {addon.price}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enterprise / Registration notice */}
      <motion.div 
        {...fadeUp}
        className="mt-12 glass-strong rounded-[25px] p-6 text-center max-w-2xl mx-auto flex items-center justify-center gap-4 border border-white/10"
      >
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#FF7A00]/10 text-[#FF7A00] shrink-0">
          <ShieldCheck size={20} />
        </span>
        <div className="text-left">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-0.5">Tax & Compliance Notice</p>
          <p className="text-sm font-medium opacity-85">18% GST Extra on all prices. MSME / Udyam Reg No: <strong>UDYAM-TN-27-0144759</strong></p>
        </div>
      </motion.div>
    </Section>
  );
}