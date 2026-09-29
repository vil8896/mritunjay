import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationComplianceSection } from './components/EducationComplianceSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Navbar matching screenshot */}
      <Navbar
        onOpenResume={handleOpenResume}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Sections strictly in order of screenshot */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={handleOpenResume}
          onExploreWork={() => scrollToSection('experience')}
        />

        {/* 2. Professional Summary & Feature Cards */}
        <AboutSection />

        {/* 3. Core Competencies & Tech Stack */}
        <SkillsSection />

        {/* 4. What I've Worked On (Experience) */}
        <ExperienceSection />

        {/* 5. Education, Languages, Compliance & Relevant Knowledge */}
        <EducationComplianceSection />

      </main>

      {/* 6. Dark Slate Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
