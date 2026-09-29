import React from 'react';
import { Download } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer id="contact" className="py-8 bg-[#0F172A] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: MM Orange Box + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-xs">
            <span className="text-white font-black text-sm tracking-tight">MM</span>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Mritunjay Mishra
          </span>
        </div>

        {/* Center: Mission line */}
        <div className="text-xs sm:text-[13px] text-slate-400 text-center">
          Building secure systems through data, compliance and smart solutions.
        </div>

        {/* Right: Download Resume button */}
        <div className="flex items-center">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all cursor-pointer shadow-xs"
          >
            <span>Download Resume</span>
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
