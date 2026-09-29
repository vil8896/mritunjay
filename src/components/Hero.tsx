import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Download, Mouse } from 'lucide-react';
import portraitImg from '../assets/images/mritunjay.png';

interface HeroProps {
  onOpenResume: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onExploreWork,
}) => {
  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden bg-[#FAF9F5]">
      {/* Background warm aesthetic curved highlights */}
      <div className="absolute top-0 right-10 -z-10 w-[550px] h-[550px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 -z-10 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-200/80 text-[11px] sm:text-xs font-semibold text-amber-800">
              <span>Fintech • KYB • Risk & Compliance</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-slate-900">Mritunjay </span>
                <span className="text-amber-500">Mishra</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                Fintech Operations | Data Verification | Risk & Compliance
              </p>
            </div>

            {/* Contact Info Row with Amber Icons */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+918123091913" className="hover:text-amber-600 transition-colors font-mono">
                  +91 8123091913
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:mritunjaymishra900@gmail.com" className="hover:text-amber-600 transition-colors">
                  mritunjaymishra900@gmail.com
                </a>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl font-normal">
              Computer Science graduate with experience in fintech operations, merchant data verification, KYB, risk assessment, compliance documentation, and operational support. Passionate about data, compliance, and building secure & efficient financial systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:scale-98 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-amber-700 bg-white border border-amber-400 hover:bg-amber-50/80 active:scale-98 rounded-lg transition-all cursor-pointer shadow-2xs"
              >
                <Download className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Portrait, Organic Blob & Floating Badge */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Handwritten Floating Annotation: Build Secure Systems */}
            <div className="absolute -top-4 right-6 sm:right-10 z-20 pointer-events-none transform rotate-3 select-none text-right">
              <span className="font-script text-3xl sm:text-4xl font-bold text-amber-500 block leading-tight">
                Build <br />
                Secure <br />
                Systems
              </span>
            </div>

            {/* Portrait Container with Organic Shape */}
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] flex items-center justify-center pt-4 sm:pt-6">
              
              {/* Organic golden/amber background shape */}
              <div 
                className="absolute inset-x-2 sm:inset-x-6 top-4 sm:top-6 bottom-2 bg-[#FCE7C8]/80 rounded-[48px] -rotate-3 z-0 shadow-inner"
                style={{
                  borderRadius: "42% 58% 68% 32% / 38% 44% 56% 62%"
                }}
              />

              {/* Decorative small dotted grid on right */}
              <div className="absolute -right-2 sm:-right-4 top-12 sm:top-16 grid grid-cols-4 gap-2 opacity-30 pointer-events-none z-0">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                ))}
              </div>

              {/* Headshot Portrait Cutout */}
              <div className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] flex items-end justify-center">
                <img
                  src={portraitImg}
                  alt="Mritunjay Mishra"
                  className="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain drop-shadow-lg"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Scroll To Explore Indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center justify-center text-slate-400 space-y-1">
          <Mouse className="w-5 h-5 text-amber-500 animate-bounce" />
          <span className="text-[11px] font-medium tracking-wide text-slate-500">Scroll to explore</span>
          <span className="text-xs text-amber-500">↓</span>
        </div>

      </div>
    </section>
  );
};
