import React from 'react';
import { Helmet } from 'react-helmet';
import useDarkMode from '../hooks/useDarkMode';
import { Background, ScrollProgress, BackToTop, LoadingScreen, AnimatedCursor } from '../components/common/effects';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { About, Skills, Services, Timeline, Achievements, Testimonials, Contact, Footer } from '../components/sections/Sections';

export default function HomePage() {
  const { dark, toggle } = useDarkMode();

  return (
    <>
      <Helmet>
        <title>Dhanapal — React Frontend Developer & UI/UX Designer</title>
        <meta name="description" content="Dhanapal — React Frontend Developer, UI/UX Designer and Business Software Developer. Founder of RI Billing Pro. Build Smart. Grow Fast." />
        <meta name="keywords" content="React Developer, UI UX Designer, ERP, Billing Software, POS, Chennai, Portfolio" />
        <meta property="og:title" content="Dhanapal — React Frontend Developer & UI/UX Designer" />
        <meta property="og:description" content="Premium business software, ERP, billing systems and modern web experiences. Build Smart. Grow Fast." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.hostinger.com/1a3c3e24-39b2-4f36-9dd1-c68d76139a6b.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <LoadingScreen />
      <AnimatedCursor />
      <ScrollProgress />
      <Background />

      <Navbar dark={dark} toggle={toggle} />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Timeline />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
