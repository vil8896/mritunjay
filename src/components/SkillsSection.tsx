import React from 'react';
import { BarChart3, Shield, Settings, Code, Database, MonitorCheck, ShieldAlert } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Core Competencies (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Section Tag */}
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
              <span className="w-4 h-0.5 bg-amber-500 rounded-full" />
              <span>MY SKILLS</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Core Competencies
            </h2>

            {/* 3 Core Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              
              {/* Card 1: Data */}
              <div className="p-5 rounded-2xl bg-white border border-amber-100/80 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Data</h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Data Verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Data Validation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Data Accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Data Quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Data Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Reporting</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Risk & Compliance */}
              <div className="p-5 rounded-2xl bg-white border border-amber-100/80 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Risk & Compliance</h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>KYB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Merchant Risk Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Compliance Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Documentation Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Risk Identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Issue Escalation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Operational Risk</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Operations */}
              <div className="p-5 rounded-2xl bg-white border border-amber-100/80 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                    <Settings className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Operations</h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Financial Operations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Process Adherence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Stakeholder Communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Problem Solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Priority Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Attention to Detail</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Right: Tech Stack (4 cols) */}
          <div className="lg:col-span-4 pt-8 lg:pt-14">
            <div className="p-6 rounded-2xl bg-white border border-amber-100/80 shadow-xs space-y-5">
              
              {/* Header */}
              <div className="flex items-center gap-2 pb-1">
                <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center">
                  <Code className="w-3.5 h-3.5 text-amber-600 stroke-[2.5]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">Tech Stack</h3>
              </div>

              {/* Group 1: Data & Analytics */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Database className="w-3.5 h-3.5 text-amber-500" />
                  <span>Data & Analytics</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['SQL', 'MySQL', 'Microsoft Excel', 'Power BI', 'Data Validation', 'Data Analysis', 'Data Reporting', 'Data Management'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-lg hover:border-amber-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Group 2: Technology */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <MonitorCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>Technology</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['JavaScript', 'React.js', 'REST APIs', 'HTML5', 'CSS3', 'PHP'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-lg hover:border-amber-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Group 3: Risk & Operations */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                  <span>Risk & Operations</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'KYB Verification',
                    'Merchant Onboarding',
                    'Merchant Risk Assessment',
                    'Business Verification',
                    'Compliance Review',
                    'Documentation Review',
                    'Risk Identification',
                    'Operational Risk',
                    'Issue Escalation'
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-lg hover:border-amber-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
