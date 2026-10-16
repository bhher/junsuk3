/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { InteractiveLab } from './components/InteractiveLab';
import { ArchitecturePhilosophy } from './components/ArchitecturePhilosophy';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 3-zone Header Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onExploreClick={scrollToWorks}
          onContactClick={scrollToContact}
        />

        <ProjectShowcase lang={lang} />

        <InteractiveLab lang={lang} />

        <ArchitecturePhilosophy lang={lang} />

        <ExperienceTimeline lang={lang} />

        <ContactSection lang={lang} />
      </main>

      {/* Clean Quiet Footer */}
      <Footer lang={lang} />

      {/* Complete Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
