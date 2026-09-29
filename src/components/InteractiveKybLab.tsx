import React, { useState } from 'react';
import { SAMPLE_KYB_CASES, KybMerchantCase } from '../data/portfolioData';
import { ShieldCheck, AlertTriangle, CheckCircle, Clock, FileSearch, ArrowRight, Check } from 'lucide-react';

export const InteractiveKybLab: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(SAMPLE_KYB_CASES[0].id);
  const [userDecision, setUserDecision] = useState<string | null>(null);
  const [showAuditLog, setShowAuditLog] = useState<boolean>(false);
  const [customMerchantName, setCustomMerchantName] = useState<string>('');
  const [customEntityType, setCustomEntityType] = useState<string>('Private Limited');
  const [customResult, setCustomResult] = useState<{ checked: boolean; checks: { step: string; note: string; pass: boolean }[] } | null>(null);

  const activeCase = SAMPLE_KYB_CASES.find(c => c.id === selectedCaseId) || SAMPLE_KYB_CASES[0];

  const handleSelectCase = (id: string) => {
    setSelectedCaseId(id);
    setUserDecision(null);
    setShowAuditLog(false);
  };

  const handleRunCustomCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMerchantName.trim()) return;

    setCustomResult({
      checked: true,
      checks: [
        { step: 'MCA Portal Verification', note: `Cross-checking ${customMerchantName} against Ministry of Corporate Affairs database.`, pass: true },
        { step: 'Tax & GSTIN Active Status', note: 'Validating GSTIN registration, legal entity name and filing history.', pass: true },
        { step: 'Bank Account Penny Drop', note: 'Verifying account holder title matches incorporation certificate.', pass: true },
        { step: 'Website Terms & Refund Policy', note: 'Auditing mandatory customer grievance officer and refund timelines.', pass: customEntityType !== 'Proprietorship' },
        { step: 'Sanctions & AML Watchlist Screening', note: 'Screening directors against domestic & international risk watchlists.', pass: true }
      ]
    });
  };

  return (
    <section id="kyb-lab" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
            02. Interactive KYB & Risk Audit Workbench
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Live Merchant Verification Simulation
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Experience the real-world KYB vetting and compliance decisioning workflow handled during merchant onboarding for payment aggregators like <strong>Razorpay</strong>.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-zinc-100 border border-zinc-200 rounded-xl">
          {SAMPLE_KYB_CASES.map((kybCase) => {
            const isSelected = kybCase.id === selectedCaseId;
            return (
              <button
                key={kybCase.id}
                onClick={() => handleSelectCase(kybCase.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-white text-zinc-950 border border-zinc-300 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                }`}
              >
                <span>{kybCase.businessName}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  kybCase.recommendedAction === 'Approve'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : kybCase.recommendedAction === 'Request Additional Documents'
                    ? 'bg-zinc-200 text-zinc-800 border border-zinc-300'
                    : 'bg-rose-100 text-rose-800 border border-rose-200'
                }`}>
                  {kybCase.category.split('/')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Case Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Merchant Profile & Document Verification */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-5 shadow-xs">
              
              {/* Header Profile */}
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                      {activeCase.businessName}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 mt-1">
                    <span>{activeCase.entityType}</span>
                    <span aria-hidden="true" className="text-zinc-300">·</span>
                    <span className="text-zinc-700 font-medium">{activeCase.category}</span>
                  </div>
                </div>

                <div className="text-right text-xs font-mono text-zinc-500">
                  <div>CIN: <span className="text-zinc-900 font-medium">{activeCase.cinOrRegistration}</span></div>
                  <div>GSTIN: <span className="text-zinc-900 font-medium">{activeCase.gstin}</span></div>
                </div>
              </div>

              {/* Entity & Key Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200">
                  <div className="text-[11px] text-zinc-500">Projected Volume</div>
                  <div className="font-semibold text-zinc-900 mt-0.5">{activeCase.turnoverRange}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200">
                  <div className="text-[11px] text-zinc-500">Live Website</div>
                  <div className="font-mono text-emerald-700 font-medium mt-0.5 truncate">{activeCase.website}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-zinc-500">Directorship / UBO</div>
                  <div className="font-medium text-zinc-900 mt-0.5 truncate">{activeCase.directors[0]}</div>
                </div>
              </div>

              {/* Step 1: Document Scrutiny Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5">
                  <FileSearch className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Submitted Documentation & Verification Status</span>
                </h4>

                <div className="space-y-2">
                  {activeCase.submittedDocuments.map((doc, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl border border-zinc-200 bg-zinc-50/70 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-zinc-900">{doc.name}</span>
                        <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded ${
                          doc.status === 'verified'
                            ? 'text-emerald-800 bg-emerald-100/70'
                            : doc.status === 'discrepancy'
                            ? 'text-rose-800 bg-rose-100/70'
                            : 'text-zinc-700 bg-zinc-200/80'
                        }`}>
                          {doc.status === 'verified' && <CheckCircle className="w-3 h-3 text-emerald-700" />}
                          {doc.status === 'discrepancy' && <AlertTriangle className="w-3 h-3 text-rose-700" />}
                          {doc.status === 'pending' && <Clock className="w-3 h-3 text-zinc-600" />}
                          <span className="capitalize">{doc.status}</span>
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 leading-normal">
                        {doc.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Risk Flag Scrutiny */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Risk Flags & Compliance Evaluation</span>
                </h4>

                <div className="space-y-2">
                  {activeCase.riskIndicators.map((risk, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border text-xs ${
                        risk.severity === 'high'
                          ? 'border-rose-200 bg-rose-50 text-rose-900'
                          : risk.severity === 'medium'
                          ? 'border-zinc-300 bg-zinc-100 text-zinc-900'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-800'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{risk.flag}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wide">
                          Severity: {risk.severity}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 mt-1 leading-normal">
                        {risk.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Decisioning & Audit Trail Generation */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Decision Console */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-5 shadow-xs">
              <div className="border-b border-zinc-200 pb-3">
                <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                  KYB Decisioning Console
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mt-1">
                  Make Your Analyst Disposition
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Review the documents and risks above, then select the appropriate operational action.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => { setUserDecision('Approve'); setShowAuditLog(true); }}
                  className={`w-full p-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer border ${
                    userDecision === 'Approve'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600 shadow-xs'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                    <span>Approve for Activation</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">Direct Activation</span>
                </button>

                <button
                  onClick={() => { setUserDecision('Request Additional Documents'); setShowAuditLog(true); }}
                  className={`w-full p-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer border ${
                    userDecision === 'Request Additional Documents'
                      ? 'bg-zinc-100 border-zinc-400 text-zinc-900 ring-1 ring-zinc-400 shadow-xs'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-zinc-600" />
                    <span>Request Additional Documents</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 font-semibold">Resolve Discrepancy</span>
                </button>

                <button
                  onClick={() => { setUserDecision('Escalate to EDD'); setShowAuditLog(true); }}
                  className={`w-full p-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer border ${
                    userDecision === 'Escalate to EDD'
                      ? 'bg-rose-50 border-rose-500 text-rose-900 ring-1 ring-rose-500 shadow-xs'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-rose-700" />
                    <span>Escalate to EDD / Risk Committee</span>
                  </div>
                  <span className="text-[10px] font-mono text-rose-700 font-semibold">High Risk Case</span>
                </button>
              </div>

              {/* Evaluation Feedback */}
              {userDecision && (
                <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                  userDecision === activeCase.recommendedAction
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                    : 'border-zinc-300 bg-zinc-100 text-zinc-900'
                }`}>
                  <div className="flex items-center justify-between font-bold">
                    <span>
                      {userDecision === activeCase.recommendedAction
                        ? 'Accurate Analyst Assessment'
                        : 'Alternative Disposition Considered'}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600">
                      Recommended: {activeCase.recommendedAction}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-700 leading-relaxed">
                    {userDecision === activeCase.recommendedAction ? (
                      `Your decision matches established compliance protocols for ${activeCase.businessName}. Turnaround time adherence maintained with full audit evidence.`
                    ) : (
                      `Standard fintech SOP recommends: "${activeCase.recommendedAction}". ${activeCase.escalationReason || 'Proceed with documented audit note.'}`
                    )}
                  </p>
                </div>
              )}

              {/* Generated Audit Log Note */}
              {showAuditLog && (
                <div className="pt-3 border-t border-zinc-200 space-y-2">
                  <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                    Official KYB Audit Trail Note
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-100 border border-zinc-300 font-mono text-[11px] text-zinc-900 space-y-2 shadow-2xs">
                    <div className="text-emerald-800 font-bold">
                      [AUDIT LOG] {new Date().toISOString().split('T')[0]} | ANALYST: MRITUNJAY MISHRA
                    </div>
                    <div>MERCHANT: {activeCase.businessName} (CIN: {activeCase.cinOrRegistration})</div>
                    <div>DISPOSITION: {userDecision?.toUpperCase()}</div>
                    <div className="text-zinc-600">
                      NOTES: {activeCase.escalationReason || 'All mandatory incorporation, GSTIN, and banking checks validated without discrepancies. Entity cleared for standard activation.'}
                    </div>
                    <div className="text-zinc-500 text-[10px]">STATUS: RECORD LOCKED IN RAZORPAY COMPLIANCE REGISTRY</div>
                  </div>
                </div>
              )}

            </div>

            {/* Quick Interactive Custom Verification Simulator */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4 shadow-xs">
              <div>
                <h4 className="text-sm font-bold text-zinc-950">Custom Merchant Quick-Audit</h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Input any merchant to test simulated validation checkpoints.
                </p>
              </div>

              <form onSubmit={handleRunCustomCheck} className="space-y-3">
                <div>
                  <label htmlFor="custom-biz-name" className="text-[11px] font-medium text-zinc-700 block mb-1">Business Legal Name</label>
                  <input
                    id="custom-biz-name"
                    type="text"
                    value={customMerchantName}
                    onChange={(e) => setCustomMerchantName(e.target.value)}
                    placeholder="e.g. Bharat Logistics Pvt. Ltd."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label htmlFor="custom-entity-type" className="text-[11px] font-medium text-zinc-700 block mb-1">Entity Constitution</label>
                  <select
                    id="custom-entity-type"
                    value={customEntityType}
                    onChange={(e) => setCustomEntityType(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Private Limited">Private Limited Company (CIN + MOA)</option>
                    <option value="LLP">Limited Liability Partnership (LLPIN)</option>
                    <option value="Public Limited">Public Limited Company</option>
                    <option value="Proprietorship">Sole Proprietorship (Shop & Est)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!customMerchantName.trim()}
                  className="w-full py-2 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                >
                  Run Compliance Checklist
                </button>
              </form>

              {customResult && customResult.checked && (
                <div className="pt-2 space-y-2 border-t border-zinc-200">
                  <div className="text-[11px] font-bold text-zinc-800">
                    Verification Pipeline for {customMerchantName}:
                  </div>
                  <div className="space-y-1.5">
                    {customResult.checks.map((chk, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-700">
                        {chk.pass ? (
                          <Check className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                        )}
                        <div>
                          <span className="font-semibold text-zinc-900">{chk.step}: </span>
                          <span className="text-zinc-600">{chk.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
