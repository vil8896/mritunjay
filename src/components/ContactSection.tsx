import React, { useState } from 'react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive message form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50/60 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
            05. Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Connect for KYB, Risk & Analytics Opportunities
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Actively open to full-time roles in Merchant Onboarding, KYB & Risk Analysis, Compliance Operations, and Data Analytics in Bangalore or remote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl border border-zinc-200 bg-white space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Direct Email</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <span className="text-emerald-700 text-[11px] font-medium flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="text-base sm:text-lg font-bold text-zinc-900 hover:text-emerald-700 transition-colors block break-all"
              >
                {PERSONAL_DETAILS.email}
              </a>
              <div className="text-[11px] text-zinc-500">
                Alternative: {PERSONAL_DETAILS.secondaryEmail}
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl border border-zinc-200 bg-white space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Direct Contact Number</span>
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <span className="text-emerald-700 text-[11px] font-medium flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                className="text-base sm:text-lg font-mono font-bold text-zinc-900 hover:text-emerald-700 transition-colors block"
              >
                {PERSONAL_DETAILS.phone}
              </a>
              <div className="text-[11px] text-zinc-500">
                Available for phone interviews and hiring discussions
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl border border-zinc-200 bg-white space-y-1 shadow-xs">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Base Location</span>
              </span>
              <div className="text-base font-bold text-zinc-900">
                {PERSONAL_DETAILS.location}
              </div>
              <p className="text-[11px] text-zinc-500">
                Ready for on-site Bangalore positions or hybrid/remote fintech operations.
              </p>
            </div>

            {/* Resume Callout button */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Open Printable Resume View</span>
              </button>
            </div>

          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white space-y-5 shadow-xs">
              <div className="border-b border-zinc-200 pb-3">
                <h3 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Send a Direct Message or Opportunity</span>
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Leave your details and note below. Fast turnaround guaranteed.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl border border-emerald-300 bg-emerald-50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-950">Message Transmitted</h4>
                  <p className="text-xs text-zinc-700 leading-relaxed max-w-sm mx-auto">
                    Thank you, {senderName}. Your message has been prepared for Mritunjay Mishra ({PERSONAL_DETAILS.email}).
                  </p>
                  <a
                    href={`mailto:${PERSONAL_DETAILS.email}?subject=Opportunity from ${encodeURIComponent(senderName)} (${encodeURIComponent(company)})&body=${encodeURIComponent(message)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors cursor-pointer shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-white" />
                    <span>Send via Default Email Client</span>
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setMessage(''); }}
                    className="block mx-auto text-xs text-zinc-500 hover:text-zinc-900 pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-sender-name" className="text-xs font-medium text-zinc-700 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-sender-name"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Aditi Roy"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-sender-email" className="text-xs font-medium text-zinc-700 block mb-1">
                        Your Work / Contact Email *
                      </label>
                      <input
                        id="contact-sender-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. aditi@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="text-xs font-medium text-zinc-700 block mb-1">
                      Organization / Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Razorpay / Fintech Corp"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-medium text-zinc-700 block mb-1">
                      Message / Opportunity Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Discussing a Merchant Onboarding, Risk Analyst, or Data Analytics role..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Send Message to Mritunjay</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
