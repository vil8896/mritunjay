import React from 'react';
import { CreditCard, BarChart2, Shield, Cog, Users } from 'lucide-react';
import workspaceImg from '../assets/images/workspace_laptop_1790658947717.jpg';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
          <span className="w-4 h-0.5 bg-amber-500 rounded-full" />
          <span>WORK EXPERIENCE</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-8 sm:mb-10">
          What I've Worked On
        </h2>

        {/* 3 Column Grid matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Razorpay KYB Analyst (4.5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFFDF9] border border-amber-100/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              
              {/* Header with stylized Razorpay emblem */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  {/* Razorpay stylized blade mark */}
                  <svg className="w-5 h-5 text-blue-600 fill-current" viewBox="0 0 24 24">
                    <path d="M7 2L2 14h7l-2 8 13-14h-8l4-6H7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    Merchant Onboarding & KYB Analyst
                  </h3>
                  <p className="text-xs font-bold text-slate-700 mt-0.5">
                    One Point One Solutions Pvt. Ltd. <span className="font-normal text-slate-500">— Client:</span> <span className="text-blue-600">Razorpay</span>
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                    (Bangalore, India)
                  </p>
                </div>
              </div>

              {/* Bullet list */}
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed font-normal pt-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Performed KYB verification by reviewing merchant/business information and supporting documentation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Verified business information for accuracy, completeness, and consistency before merchant activation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Analyzed merchant business models and activities to identify potential risk and compliance concerns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Identified discrepancies in submitted information and supporting documents and escalated cases requiring review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Maintained accurate merchant records and documentation according to established operational procedures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Managed multiple onboarding requests while maintaining quality, accuracy, and turnaround-time requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Coordinated with internal teams to resolve complex verification, onboarding, and compliance-related issues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Communicated with merchants to obtain missing information and resolve outstanding onboarding requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Used Microsoft Excel for operational tracking, reporting, and data management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Assisted merchants with API and technical onboarding issues using structured troubleshooting.</span>
                </li>
              </ul>

            </div>
          </div>

          {/* Card 2: KodNest Data Analytics Intern (4.5 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FFFDF9] border border-amber-100/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              
              {/* Header with stylized KodNest emblem */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="text-purple-600 font-extrabold text-sm tracking-tight font-mono">KN</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    Data Analytics Intern
                  </h3>
                  <p className="text-xs font-bold text-slate-700 mt-0.5">
                    KodNest Technologies Pvt. Ltd.
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                    (January 2025 – June 2025 | 6 Months)
                  </p>
                </div>
              </div>

              {/* Bullet list */}
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed font-normal pt-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Gained practical experience in SQL, Microsoft Excel, Power BI, JavaScript, React.js, and REST APIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Used SQL to retrieve, filter, validate, and analyze structured data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Used Excel for data organization, analysis, reporting, and record management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Worked with Power BI dashboards and reports to visualize and communicate data insights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Performed data validation and troubleshooting to identify inconsistencies and resolve data-related issues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Worked with databases and digital platforms using structured data-management practices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>Developed web applications using JavaScript and React.js.</span>
                </li>
              </ul>

            </div>
          </div>

          {/* Card 3: Real World Experience Card with Photo & Competencies (3 cols) */}
          <div className="lg:col-span-3 rounded-2xl bg-[#FFFDF9] border border-amber-100/90 shadow-xs overflow-hidden flex flex-col justify-between">
            
            {/* Top Photo with Handwritten Note */}
            <div className="relative aspect-4/3 overflow-hidden bg-amber-50">
              <img
                src={workspaceImg}
                alt="Workspace and real world experience"
                className="w-full h-full object-cover"
              />
              {/* Dark gentle overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Script Text */}
              <div className="absolute top-3 right-3 text-right select-none pointer-events-none">
                <span className="font-script text-xl sm:text-2xl font-bold text-amber-400 drop-shadow-md leading-tight block transform rotate-2">
                  Real World <br />
                  Experience <br />
                  = <br />
                  Real Impact
                </span>
              </div>
            </div>

            {/* Bottom Competencies List */}
            <div className="p-4 sm:p-5 space-y-3">
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Fintech Operations</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <BarChart2 className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Data Analytics</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Risk & Compliance</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Cog className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Problem Solving</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Team Collaboration</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
