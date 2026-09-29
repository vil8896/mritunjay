import React from 'react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { Brain, Lightbulb, Target, MessageSquare, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Summary & 4 Feature Pills */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Section Tag */}
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
              <span className="w-4 h-0.5 bg-amber-500 rounded-full" />
              <span>ABOUT ME</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Professional Summary
            </h2>

            {/* Resume Summary Text */}
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed text-justify sm:text-left">
              Computer Science graduate with experience in fintech operations, merchant data verification, KYB, risk assessment, compliance documentation, and operational support. Experienced in reviewing business information and supporting documents for accuracy, completeness, and consistency; identifying discrepancies and potential risks; maintaining records; and escalating cases requiring further review. Six months of internship experience with practical exposure to SQL, Microsoft Excel, Power BI, JavaScript, React.js, and REST APIs. Strong analytical, problem-solving, communication, and attention-to-detail skills with an interest in AML, regulatory compliance, fraud prevention, data quality, and operational risk.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              
              {/* Feature 1 */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FFFDF9] border border-amber-200/70 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Brain className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Analytical<br />Thinker
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FFFDF9] border border-amber-200/70 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Problem<br />Solver
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FFFDF9] border border-amber-200/70 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Detail<br />Oriented
                </div>
              </div>

              {/* Feature 4 */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FFFDF9] border border-amber-200/70 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Great<br />Communicator
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Isometric Dashboard Illustration & Handwritten Annotation */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center pt-6 lg:pt-0">
            
            {/* Handwritten script annotation */}
            <div className="absolute -top-3 sm:-top-6 right-2 sm:right-6 pointer-events-none select-none text-right">
              <span className="font-script text-2xl sm:text-3xl font-bold text-amber-500 block leading-none transform rotate-3">
                Data <br />
                + <br />
                Compliance <br />
                = <br />
                Impact ⤹
              </span>
            </div>

            {/* Stylized 3D Card / Device Showcase matching screenshot */}
            <div className="relative w-full max-w-[320px] aspect-4/3 flex items-center justify-center">
              
              {/* Soft circular background glow */}
              <div className="absolute inset-0 bg-[#FCE7C8]/60 rounded-full blur-xl -z-10" />

              {/* Isometric-style dashboard graphic card */}
              <div className="relative w-64 bg-white rounded-2xl p-4 shadow-xl border border-amber-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                
                {/* Mock header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="w-16 h-2 bg-slate-100 rounded-full" />
                </div>

                {/* Dashboard content visuals */}
                <div className="pt-3 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-1/2 p-2 rounded-lg bg-amber-50/80 border border-amber-100">
                      <div className="text-[9px] font-semibold text-slate-500">Verified KYB</div>
                      <div className="text-sm font-extrabold text-amber-600 font-mono">100%</div>
                    </div>
                    <div className="w-1/2 p-2 rounded-lg bg-blue-50/80 border border-blue-100">
                      <div className="text-[9px] font-semibold text-slate-500">SLA TAT</div>
                      <div className="text-sm font-extrabold text-blue-600 font-mono">98.5%</div>
                    </div>
                  </div>

                  {/* Mock chart bars */}
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-end justify-between h-14 gap-1.5 px-3">
                    <div className="w-3 bg-amber-400 rounded-t h-6" />
                    <div className="w-3 bg-amber-500 rounded-t h-10" />
                    <div className="w-3 bg-blue-500 rounded-t h-8" />
                    <div className="w-3 bg-blue-600 rounded-t h-11" />
                    <div className="w-3 bg-emerald-500 rounded-t h-9" />
                  </div>
                </div>

                {/* Floating Shield Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-amber-500 text-white shadow-lg flex items-center justify-center transform rotate-12">
                  <Shield className="w-5 h-5 fill-white text-amber-500" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
