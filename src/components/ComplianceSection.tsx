import React from 'react';
import { REGULATORY_CONCEPTS, PERSONAL_DETAILS } from '../data/portfolioData';
import { GraduationCap, Languages, Scale } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section id="compliance" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
            04. Regulatory Governance & Education
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Compliance Frameworks & Academic Foundation
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Rigorous understanding of regulatory mandates, anti-money laundering controls, and institutional audit trail governance combined with a Computer Science degree.
          </p>
        </div>

        {/* Regulatory Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {REGULATORY_CONCEPTS.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/70 space-y-3 relative overflow-hidden shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-700 font-semibold">
                  {item.tag}
                </span>
                <Scale className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education & Languages Split Section */}
        <div id="education" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Education Card */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Formal Academic Degree</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                  {PERSONAL_DETAILS.education.degree}
                </h3>
                <span className="text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded font-medium">
                  {PERSONAL_DETAILS.education.honor}
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-600">
                {PERSONAL_DETAILS.education.institution}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2">
              Graduated with First Class distinction in Computer Science & Engineering. Strong coursework grounding in Relational Database Management Systems (RDBMS), Data Structures & Algorithms, Computer Networks, Software Engineering, and Operating Systems.
            </p>

            <div className="pt-4 border-t border-zinc-200 flex flex-wrap gap-2 text-xs text-zinc-700">
              <span className="px-2.5 py-1 rounded bg-white border border-zinc-200 font-mono text-[11px]">Database Architecture</span>
              <span className="px-2.5 py-1 rounded bg-white border border-zinc-200 font-mono text-[11px]">Object-Oriented Programming</span>
              <span className="px-2.5 py-1 rounded bg-white border border-zinc-200 font-mono text-[11px]">Network Protocols & APIs</span>
              <span className="px-2.5 py-1 rounded bg-white border border-zinc-200 font-mono text-[11px]">Systems Security</span>
            </div>
          </div>

          {/* Languages & Communication Card */}
          <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                <Languages className="w-4 h-4" />
                <span>Languages & Stakeholder Ops</span>
              </div>

              <div className="space-y-4 pt-1">
                {PERSONAL_DETAILS.languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-sm font-bold text-zinc-900">
                      <span>{lang.language}</span>
                      <span className="text-xs font-normal text-zinc-500 font-mono">{lang.proficiency}</span>
                    </div>
                    <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full rounded-full" 
                        style={{ width: idx === 0 ? '95%' : '100%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-700 space-y-1 shadow-2xs">
              <div className="font-semibold text-zinc-900">Merchant Communication</div>
              <p className="text-[11px] text-zinc-600 leading-relaxed">
                Experienced in articulating technical onboarding and compliance requirements directly to C-suite founders and merchants with clarity and professionalism.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
