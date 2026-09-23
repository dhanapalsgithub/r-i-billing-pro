import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MessageCircle, MapPin, Quote, Github, Linkedin, Globe, Boxes, 
  ReceiptText, ScanLine, UserRound, Rocket, LayoutDashboard, Code2, Sparkles, 
  MapPin as MapPinIcon, Megaphone, TrendingUp, Store, Monitor, 
  Search, MessageSquareText, ShieldAlert, CalendarDays, HelpCircle, Eye, Share2, Bot, Smartphone, Tv, Video,
  Check, Tag, ShieldCheck
} from 'lucide-react';
import { Section, Counter, CircularProgress } from '../common/effects';
import { about, skills, services, timeline, achievements, testimonials, profile, addOnsData } from '../../data/data';
import { billingPackages, websitePackages, digitalMarketingPackages, addOnsList } from '../../data/pricingData';

const ICON_MAP = { 
  Globe, Boxes, ReceiptText, ScanLine, UserRound, Rocket, LayoutDashboard, 
  Code2, MapPin: MapPinIcon, Megaphone, TrendingUp, Store, Monitor, Sparkles,
  Search, MessageSquareText, ShieldAlert, CalendarDays, HelpCircle, Eye, Share2, Bot, Smartphone, Tv, Video
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Crafting software that means business"
      subtitle={`${about.experienceYears} years turning complex operations into elegant, high-performance products.`}>
      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-3 glass-strong rounded-[30px] p-8 sm:p-10">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-6xl font-extrabold text-gradient">{about.experienceYears}</span>
            <span className="text-lg font-semibold opacity-70">Years of Experience</span>
          </div>
          <p className="text-base sm:text-lg opacity-80 leading-relaxed">{about.intro}</p>
          <div className="mt-7">
            <p className="text-sm font-semibold uppercase tracking-widest opacity-60 mb-3">Core Skills</p>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((s) => (
                <span key={s} className="glass rounded-full px-4 py-1.5 text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-2 glass rounded-[30px] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-60 mb-5">Experience Areas</p>
          <div className="space-y-3">
            {about.experienceAreas.map((a, i) => (
              <div key={a} className="flex items-center gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#133A63] text-white text-xs font-bold">{i + 1}</span>
                <span className="font-medium">{a}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      title: "Proper SEO Works",
      desc: "Optimized architecture and metadata to boost your search visibility and organic reach.",
    },
    {
      title: "Business Support",
      desc: "Dedicated technical assistance and guidance to keep your operations running seamlessly.",
    },
    {
      title: "Custom Design",
      desc: "Tailor-made, conversion-focused user interfaces designed specifically for your brand.",
    },
    {
      title: "Regular Updates",
      desc: "Continuous feature improvements, security patches, and modern updates for your platform.",
    },
  ];

  return (
    <Section id="why-choose-us" eyebrow="Why Choose Us" title="Built for performance and reliability" subtitle="Partner with a registered micro-service expert dedicated to your digital growth.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {features.map((f, i) => (
          <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }} className="glass rounded-[30px] p-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00] mb-2 block">Feature 0{i + 1}</span>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.35 }} className="glass-strong rounded-[25px] p-6 text-center max-w-xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">Registered Enterprise</p>
        <p className="text-sm font-bold tracking-wide">MSME / Udyam Reg No: UDYAM-TN-27-0144759 (Micro - Services)</p>
      </motion.div>
    </Section>
  );
}

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

export function Pricing() {
  const [activeTab, setActiveTab] = useState('billing');

  return (
    <Section 
      id="pricing" 
      eyebrow="Investment Plans" 
      title="Transparent Pricing for RI Billing Pro & Digital Growth" 
      subtitle="Explore our flexible packages. All service amounts are negotiable, with solutions starting from ₹10,000."
    >
      {/* Switcher Tabs */}
      <div className="flex justify-center mb-12">
        <div className="glass p-1.5 rounded-full flex flex-wrap justify-center gap-2 border border-white/10">
          <button
            onClick={() => setActiveTab('billing')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'billing'
                ? 'bg-[#FF7A00] text-white shadow-lg shadow-orange-500/25'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            RI Billing Pro
          </button>
          <button
            onClick={() => setActiveTab('websites')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'websites'
                ? 'bg-[#FF7A00] text-white shadow-lg shadow-orange-500/25'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            Website Packages
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'marketing'
                ? 'bg-[#FF7A00] text-white shadow-lg shadow-orange-500/25'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            Digital Marketing (DMS)
          </button>
          <button
            onClick={() => setActiveTab('addons')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
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
        {/* BILLING SOFTWARE PACKAGES */}
        {activeTab === 'billing' && (
          <motion.div 
            key="billing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {billingPackages.map((pkg, i) => (
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
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-medium text-[#FF7A00] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      Amount Negotiable
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-[#FF7A00] mb-2">
                    {pkg.price} <span className="text-xs font-normal line-through opacity-50">{pkg.origPrice}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#FF7A00] mb-3">{pkg.validity}</p>
                  <p className="text-xs opacity-60 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-8 text-sm opacity-80 border-t border-white/10 pt-4">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[#FF7A00] shrink-0" /> <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 rounded-2xl bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold text-center shadow-lg shadow-orange-500/20 transition-transform active:scale-95 block"
                >
                  Get Billing Software
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}

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
                      Website Package
                    </span>
                    <span className="text-xs font-medium text-[#FF7A00] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      Amount Negotiable
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-[#FF7A00] mb-2">
                    {pkg.price} <span className="text-xs font-normal line-through opacity-50">{pkg.origPrice}</span>
                  </div>
                  <p className="text-xs opacity-60 mb-6">Services start from ₹10,000</p>

                  <ul className="space-y-3 mb-8 text-sm opacity-80 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Pages: <strong>{pkg.pages}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Domain Setup: <strong>{pkg.Domain || pkg.freeDomain}</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-[#FF7A00]" /> Hosting Setup: <strong>{pkg.freeHosting}</strong>
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
                  Discuss Custom Quote
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
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-full">
                      Monthly Retainer
                    </span>
                    <span className="text-xs font-medium text-[#FF7A00] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      Amount Negotiable
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-1">{dms.name}</h3>
                  <div className="text-3xl font-extrabold text-[#FF7A00] mb-2">
                    {dms.price} <span className="text-xs font-normal opacity-65">/ month</span>
                  </div>
                  <p className="text-xs opacity-60 mb-6">Retainers start from ₹10,000</p>

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
                  Discuss Package
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
                  <div className="flex justify-between items-start mb-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#FF7A00]/10 text-[#FF7A00]">
                      <Tag size={18} />
                    </span>
                    <span className="text-[11px] font-medium text-[#FF7A00] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      Negotiable
                    </span>
                  </div>
                  <h4 className="font-bold text-base mb-2">{addon.title}</h4>
                </div>
                <div className="text-lg font-black text-[#FF7A00] pt-4 border-t border-white/10 mt-2 flex items-center justify-between">
                  <span>{addon.price}</span>
                  <span className="text-xs font-normal opacity-60">Flexible terms</span>
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
          <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-0.5">Enterprise Assurance</p>
          <p className="text-sm font-medium opacity-85">MSME / Udyam Reg No: <strong>UDYAM-TN-27-0144759</strong> (Micro - Services)</p>
        </div>
      </motion.div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I master" subtitle="A toolkit refined across dozens of production projects.">
      <div className="glass-strong rounded-[30px] p-8 sm:p-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
          {skills.map((s, i) => (
            <motion.div key={s.name} {...fadeUp} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}>
              <CircularProgress level={s.level} name={s.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I build & scale" subtitle="End-to-end product development & digital marketing for founders and teams.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const Icon = ICON_MAP[s.icon] || Sparkles;
          return (
            <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass glass-shine rounded-[30px] p-7 group">
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#133A63] text-white mb-5">
                <Icon size={26} strokeWidth={2} />
              </span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="Journey" title="My experience timeline" subtitle="From engineering rigor to building business software.">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF7A00] via-[#133A63] to-transparent sm:-translate-x-1/2" />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div key={t.role} {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}
              className={`relative pl-12 sm:pl-0 sm:w-1/2 ${i % 2 ? 'sm:ml-auto sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
              <span className={`absolute top-2 w-4 h-4 rounded-full bg-[#FF7A00] ring-4 ring-[#FF7A00]/20 left-[9px] sm:left-auto ${i % 2 ? 'sm:-left-2' : 'sm:-right-2'}`} />
              <div className="glass rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00] mb-1">Stage {i + 1}</p>
                <h3 className="text-lg font-bold">{t.role}</h3>
                <p className="text-sm opacity-70 mt-1">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <div className="glass-strong rounded-[30px] p-10 sm:p-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((a, i) => (
          <motion.div key={a.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold text-gradient">
              <Counter value={a.value} suffix={a.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium opacity-70">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What clients say" subtitle="Trusted by founders across retail, logistics and services.">
      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -6 }} className="glass rounded-[30px] p-8 relative">
            <Quote className="text-[#FF7A00] mb-4" size={30} />
            <p className="text-base sm:text-lg opacity-85 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#133A63] text-white font-bold">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm opacity-60">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const actions = [
    { icon: Phone, label: 'Call', href: `tel:+91${profile.phone}`, text: profile.phone },
    { icon: MessageCircle, label: 'WhatsApp', href: profile.socials.whatsapp, text: 'Chat now' },
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great" subtitle="Have a project in mind? I'd love to hear about it.">
      <motion.div {...fadeUp} transition={{ duration: 0.6 }}
        className="glass-strong rounded-[30px] p-8 sm:p-14 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-40" style={{ background: 'radial-gradient(circle,#FF7A00,transparent 70%)' }} />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-extrabold mb-3">{profile.tagline}</h3>
            <p className="opacity-75 mb-6">Based in {profile.location}. Available also Trichy for freelance projects and full-time collaborations worldwide.</p>
            <div className="flex items-center gap-2 opacity-80"><MapPin size={18} className="text-[#FF7A00]" /> {profile.location}</div>
          </div>
          <div className="grid gap-4">
            {actions.map((a) => (
              <motion.a key={a.label} href={a.href} target="_blank" rel="noreferrer" whileHover={{ x: 6 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-[#FF7A00] transition-colors">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#133A63] text-white">
                  <a.icon size={22} />
                </span>
                <div>
                  <p className="text-sm opacity-60">{a.label}</p>
                  <p className="font-semibold">{a.text}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export function Footer() {
  const year = 2026;
  return (
   <footer className="px-5 sm:px-8 pb-10 pt-6">
      <div className="max-w-[72rem] mx-auto glass rounded-[30px] p-10 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-lg mb-3">
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FF7A00] ring-2 ring-[#FF7A00]/40 shadow-lg shadow-[#FF7A00]/30 flex-shrink-0">
              <img src="https://horizons-cdn.hostinger.com/ccf663bc-1d78-4200-99ec-25ed813be7f4/e55d06f5401623adf9066a90183c2b12.png" alt="RI Billing Pro" className="h-8 w-8 object-contain rounded-full" />
            </span>
            RI Billing Pro
          </div>
          <p className="text-sm opacity-70 max-w-xs">{profile.tagline} — premium business software and modern web experiences.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm opacity-75">
            <li><a href="#projects" className="hover:text-[#FF7A00]">Projects</a></li>
            <li><a href="#about" className="hover:text-[#FF7A00]">About</a></li>
            <li><a href="#contact" className="hover:text-[#FF7A00]">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-[#FF7A00]">Privacy Policy</a></li>
            <li><a href="/return-policy" className="hover:text-[#FF7A00]">Return Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-[#FF7A00]">Terms and Conditions</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Connect</p>
          <div className="flex gap-3">
            {[{ i: Github, h: profile.socials.github }, { i: Linkedin, h: profile.socials.linkedin }, { i: MessageCircle, h: profile.socials.whatsapp }, { i: Mail, h: profile.socials.email }].map((s, idx) => (
              <a key={idx} href={s.h} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full grid place-items-center glass hover:text-[#FF7A00] transition-colors">
                <s.i size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm opacity-60 mt-6 space-y-1">
        <p>© {year} Dhanapal · RI Billing Pro. All rights reserved.</p>
        <p className="text-xs tracking-wide">MSME / Udyam Reg No: UDYAM-TN-27-0144759 (Micro - Services)</p>
      </div>
    </footer>
  );
}