import React from 'react';
import { GraduationCap, Globe, Shield, Lightbulb, Check } from 'lucide-react';

export const EducationComplianceSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Top Row: 3 Cards (Education, Languages, Compliance & Domain Knowledge) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Education (4 cols) */}
          <div className="md:col-span-4 p-6 rounded-2xl bg-white border border-amber-100/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <GraduationCap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-900">Education</h3>
              <p className="text-xs sm:text-[13px] font-bold text-slate-800">
                Bachelor of Engineering – Computer Science
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Visvesvaraya Technological University (VTU) <span className="text-slate-300">|</span> <span className="font-semibold text-slate-700">First Class</span>
              </p>
            </div>
          </div>

          {/* Card 2: Languages (3 cols) */}
          <div className="md:col-span-3 p-6 rounded-2xl bg-white border border-amber-100/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Globe className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-900">Languages</h3>
              <p className="text-xs sm:text-[13px] font-semibold text-slate-700">
                English <span className="text-amber-500">•</span> Hindi
              </p>
            </div>
          </div>

          {/* Card 3: Compliance & Domain Knowledge (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-white border border-amber-100/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Shield className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-slate-900">Compliance & Domain Knowledge</h3>
              <div className="text-[11px] sm:text-xs text-slate-600 space-y-1 leading-relaxed">
                <p>
                  <strong className="text-slate-800">FinTech</strong> • Digital Payments • Merchant Onboarding • Payment Gateway Operations
                </p>
                <p>
                  <strong className="text-slate-800">Risk & Compliance</strong> • KYB / Business Verification • Merchant Risk Assessment • Compliance Operations • AML Fundamentals • KYC / CDD • Fraud Prevention • Operational Risk
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Card: Relevant Knowledge (Full Width) */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-amber-100/80 shadow-xs flex flex-col md:flex-row items-start gap-5">
          <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <Lightbulb className="w-5 h-5 stroke-[2.2]" />
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">Relevant Knowledge</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs text-slate-600">
              
              {/* Left Column */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 stroke-[2.5]" />
                  <span>Understanding of KYC/KYB and customer/business verification concepts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 stroke-[2.5]" />
                  <span>Understanding of AML, CDD, EDD, and transaction-monitoring fundamentals.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 stroke-[2.5]" />
                  <span>Understanding of risk identification, documentation, and escalation processes.</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 stroke-[2.5]" />
                  <span>Familiarity with the purpose of Currency Transaction Reports (CTR) and suspicious-activity reporting concepts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 stroke-[2.5]" />
                  <span>Understanding of the importance of accurate, complete, and consistent client/business data.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 stroke-[2.5]" />
                  <span>Awareness of documentation and audit trails in regulated financial operations.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
