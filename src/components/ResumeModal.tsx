import React, { useEffect, useState } from 'react';
import { PERSONAL_DETAILS, EXPERIENCES } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
${PERSONAL_DETAILS.name}
${PERSONAL_DETAILS.location} | ${PERSONAL_DETAILS.phone} | ${PERSONAL_DETAILS.email}

PROFESSIONAL SUMMARY
${PERSONAL_DETAILS.summary}

CORE COMPETENCIES
Data: Data Verification • Data Validation • Data Accuracy • Data Quality • Data Analysis • Reporting
Risk & Compliance: KYB • Merchant Risk Assessment • Compliance Review • Documentation Review • Risk Identification • Issue Escalation • Operational Risk
Operations: Financial Operations • Process Adherence • Stakeholder Communication • Problem Solving • Priority Management • Attention to Detail

PROFESSIONAL EXPERIENCE
Merchant Onboarding & KYB Analyst
One Point One Solutions Pvt. Ltd. — Client: Razorpay
• Performed KYB verification by reviewing merchant/business information and supporting documentation.
• Verified business information for accuracy, completeness, and consistency before merchant activation.
• Analyzed merchant business models and activities to identify potential risk and compliance concerns.
• Identified discrepancies in submitted information and supporting documents and escalated cases requiring review.
• Maintained accurate merchant records and documentation according to established operational procedures.
• Managed multiple onboarding requests while maintaining quality, accuracy, and turnaround-time requirements.
• Coordinated with internal teams to resolve complex verification, onboarding, and compliance-related issues.
• Communicated with merchants to obtain missing information and resolve outstanding onboarding requirements.
• Used Microsoft Excel for operational tracking, reporting, and data management.
• Assisted merchants with API and technical onboarding issues using structured troubleshooting.

Data Analytics Intern
KodNest Technologies Pvt. Ltd. | January 2025 – June 2025 | 6 Months
• Gained practical experience in SQL, Microsoft Excel, Power BI, JavaScript, React.js, and REST APIs.
• Used SQL to retrieve, filter, validate, and analyze structured data.
• Used Excel for data organization, analysis, reporting, and record management.
• Worked with Power BI dashboards and reports to visualize and communicate data insights.
• Performed data validation and troubleshooting to identify inconsistencies and resolve data-related issues.
• Worked with databases and digital platforms using structured data-management practices.
• Developed web applications using JavaScript and React.js.

TECHNICAL SKILLS
Data & Analytics: SQL / MySQL • Microsoft Excel • Power BI • Data Validation • Data Analysis • Data Reporting • Data Management
Technology: JavaScript • React.js • REST APIs • HTML5 • CSS3 • PHP
Risk & Operations: KYB Verification • Merchant Onboarding • Merchant Risk Assessment • Business Verification • Compliance Review • Documentation Review • Risk Identification • Operational Risk • Issue Escalation

COMPLIANCE & DOMAIN KNOWLEDGE
FinTech: Digital Payments • Financial Operations • Merchant Onboarding • Payment Gateway Operations
Risk & Compliance: KYB / Business Verification • Merchant Risk Assessment • Compliance Operations • AML Fundamentals • KYC / CDD Fundamentals • Fraud Prevention Fundamentals • Operational Risk

RELEVANT KNOWLEDGE
• Understanding of KYC/KYB and customer/business verification concepts.
• Understanding of AML, CDD, EDD, and transaction-monitoring fundamentals.
• Understanding of risk identification, documentation, and escalation processes.
• Familiarity with the purpose of Currency Transaction Reports (CTR) and suspicious-activity reporting concepts.
• Understanding of the importance of accurate, complete, and consistent client/business data.
• Awareness of documentation and audit trails in regulated financial operations.

EDUCATION
Bachelor of Engineering – Computer Science
Visvesvaraya Technological University (VTU) | First Class

LANGUAGES
English • Hindi
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header bar (no-print) */}
        <div className="no-print flex items-center justify-between px-5 py-3.5 bg-zinc-100 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-zinc-800">Curriculum Vitae</span>
            <span className="text-xs text-zinc-500 font-mono">· {PERSONAL_DETAILS.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-300 hover:bg-zinc-50 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-800 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-900 space-y-6 text-sm leading-relaxed font-sans select-text">
          
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-slate-300 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-slate-950">
              {PERSONAL_DETAILS.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
              <span>{PERSONAL_DETAILS.location}</span>
              <span>|</span>
              <span className="font-mono">{PERSONAL_DETAILS.phone}</span>
              <span>|</span>
              <span>{PERSONAL_DETAILS.email}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 text-justify leading-relaxed">
              {PERSONAL_DETAILS.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Core Competencies
            </h2>
            <div className="text-xs sm:text-[13px] text-slate-800 space-y-1">
              <div>
                <strong>Data:</strong> Data Verification • Data Validation • Data Accuracy • Data Quality • Data Analysis • Reporting
              </div>
              <div>
                <strong>Risk & Compliance:</strong> KYB • Merchant Risk Assessment • Compliance Review • Documentation Review • Risk Identification • Issue Escalation • Operational Risk
              </div>
              <div>
                <strong>Operations:</strong> Financial Operations • Process Adherence • Stakeholder Communication • Problem Solving • Priority Management • Attention to Detail
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Professional Experience
            </h2>

            {/* Experience 1 */}
            <div className="space-y-2">
              <div className="flex flex-wrap justify-between items-baseline">
                <div className="font-bold text-slate-900 text-sm">
                  Merchant Onboarding & KYB Analyst
                </div>
                <div className="text-xs text-slate-600 font-medium">Bangalore, Karnataka</div>
              </div>
              <div className="text-xs text-slate-700 italic">
                One Point One Solutions Pvt. Ltd. — Client: <strong>Razorpay</strong>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[13px] text-slate-700">
                <li>Performed KYB verification by reviewing merchant/business information and supporting documentation.</li>
                <li>Verified business information for accuracy, completeness, and consistency before merchant activation.</li>
                <li>Analyzed merchant business models and activities to identify potential risk and compliance concerns.</li>
                <li>Identified discrepancies in submitted information and supporting documents and escalated cases requiring review.</li>
                <li>Maintained accurate merchant records and documentation according to established operational procedures.</li>
                <li>Managed multiple onboarding requests while maintaining quality, accuracy, and turnaround-time requirements.</li>
                <li>Coordinated with internal teams to resolve complex verification, onboarding, and compliance-related issues.</li>
                <li>Communicated with merchants to obtain missing information and resolve outstanding onboarding requirements.</li>
                <li>Used Microsoft Excel for operational tracking, reporting, and data management.</li>
                <li>Assisted merchants with API and technical onboarding issues using structured troubleshooting.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-wrap justify-between items-baseline">
                <div className="font-bold text-slate-900 text-sm">
                  Data Analytics Intern
                </div>
                <div className="text-xs text-slate-600 font-mono">January 2025 – June 2025 | 6 Months</div>
              </div>
              <div className="text-xs text-slate-700 italic">
                KodNest Technologies Pvt. Ltd.
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[13px] text-slate-700">
                <li>Gained practical experience in SQL, Microsoft Excel, Power BI, JavaScript, React.js, and REST APIs.</li>
                <li>Used SQL to retrieve, filter, validate, and analyze structured data.</li>
                <li>Used Excel for data organization, analysis, reporting, and record management.</li>
                <li>Worked with Power BI dashboards and reports to visualize and communicate data insights.</li>
                <li>Performed data validation and troubleshooting to identify inconsistencies and resolve data-related issues.</li>
                <li>Worked with databases and digital platforms using structured data-management practices.</li>
                <li>Developed web applications using JavaScript and React.js.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-[13px] text-slate-800 space-y-1">
              <div>
                <strong>Data & Analytics:</strong> SQL / MySQL • Microsoft Excel • Power BI • Data Validation • Data Analysis • Data Reporting • Data Management
              </div>
              <div>
                <strong>Technology:</strong> JavaScript • React.js • REST APIs • HTML5 • CSS3 • PHP
              </div>
              <div>
                <strong>Risk & Operations:</strong> KYB Verification • Merchant Onboarding • Merchant Risk Assessment • Business Verification • Compliance Review • Documentation Review • Risk Identification • Operational Risk • Issue Escalation
              </div>
            </div>
          </div>

          {/* Compliance & Domain Knowledge */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Compliance & Domain Knowledge
            </h2>
            <div className="text-xs sm:text-[13px] text-slate-800 space-y-1">
              <div>
                <strong>FinTech:</strong> Digital Payments • Financial Operations • Merchant Onboarding • Payment Gateway Operations
              </div>
              <div>
                <strong>Risk & Compliance:</strong> KYB / Business Verification • Merchant Risk Assessment • Compliance Operations • AML Fundamentals • KYC / CDD Fundamentals • Fraud Prevention Fundamentals • Operational Risk
              </div>
            </div>
          </div>

          {/* Relevant Knowledge */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Relevant Knowledge
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[13px] text-slate-700">
              <li>Understanding of KYC/KYB and customer/business verification concepts.</li>
              <li>Understanding of AML, CDD, EDD, and transaction-monitoring fundamentals.</li>
              <li>Understanding of risk identification, documentation, and escalation processes.</li>
              <li>Familiarity with the purpose of Currency Transaction Reports (CTR) and suspicious-activity reporting concepts.</li>
              <li>Understanding of the importance of accurate, complete, and consistent client/business data.</li>
              <li>Awareness of documentation and audit trails in regulated financial operations.</li>
            </ul>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Education
              </h2>
              <div className="text-xs sm:text-[13px]">
                <div className="font-bold text-slate-900">Bachelor of Engineering – Computer Science</div>
                <div className="text-slate-700">Visvesvaraya Technological University (VTU) | First Class</div>
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Languages
              </h2>
              <div className="text-xs sm:text-[13px] text-slate-800">
                English • Hindi
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
