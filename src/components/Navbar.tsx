import React from 'react';
import { Download } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onScrollToSection,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Orange MM Square Logo + Name */}
        <div 
          onClick={() => onScrollToSection('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <span className="text-white font-black text-sm tracking-tight">MM</span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
            Mritunjay Mishra
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <button 
            onClick={() => onScrollToSection('home')}
            className="text-amber-500 hover:text-amber-600 transition-colors relative py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full" />
          </button>
          <button 
            onClick={() => onScrollToSection('about')}
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => onScrollToSection('experience')}
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
          >
            Experience
          </button>
          <button 
            onClick={() => onScrollToSection('skills')}
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
          >
            Skills
          </button>
          <button 
            onClick={() => onScrollToSection('education')}
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
          >
            Education
          </button>
          <button 
            onClick={() => onScrollToSection('contact')}
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Download Resume Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:scale-98 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <span>Download Resume</span>
            <Download className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </header>
  );
};
