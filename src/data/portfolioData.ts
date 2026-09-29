export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client?: string;
  period: string;
  duration?: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  keyHighlights: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; description?: string }[];
}

export interface KybMerchantCase {
  id: string;
  businessName: string;
  entityType: string;
  category: string;
  cinOrRegistration: string;
  gstin: string;
  website: string;
  turnoverRange: string;
  directors: string[];
  submittedDocuments: { name: string; status: 'verified' | 'discrepancy' | 'pending'; notes: string }[];
  riskIndicators: { flag: string; severity: 'low' | 'medium' | 'high'; explanation: string }[];
  recommendedAction: 'Approve' | 'Escalate to EDD' | 'Request Additional Documents';
  escalationReason?: string;
}

export const PERSONAL_DETAILS = {
  name: "Mritunjay Mishra",
  headline: "Fintech Risk, KYB & Data Operations Specialist",
  location: "Bangalore, Karnataka, India",
  phone: "+91 8123091913",
  email: "mritunjaymishra900@gmail.com",
  secondaryEmail: "mritunjaymishra9559@gmail.com",
  education: {
    degree: "Bachelor of Engineering – Computer Science",
    institution: "Visvesvaraya Technological University (VTU)",
    honor: "First Class",
    field: "Computer Science and Engineering"
  },
  summary: "Computer Science graduate with experience in fintech operations, merchant data verification, KYB, risk assessment, compliance documentation, and operational support. Experienced in reviewing business information and supporting documents for accuracy, completeness, and consistency; identifying discrepancies and potential risks; maintaining records; and escalating cases requiring further review. Six months of internship experience with practical exposure to SQL, Microsoft Excel, Power BI, JavaScript, React.js, and REST APIs. Strong analytical, problem-solving, communication, and attention-to-detail skills with an interest in AML, regulatory compliance, fraud prevention, data quality, and operational risk.",
  languages: [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Hindi", proficiency: "Native / Bilingual" }
  ]
};

export const CORE_METRICS = [
  { value: "Razorpay", label: "Fintech Client KYB Workflow", context: "Payment Gateway Merchant Operations" },
  { value: "6 Months", label: "Data Analytics & Web Engineering", context: "SQL, Power BI & React.js at KodNest" },
  { value: "100%", label: "Process Adherence & Record Accuracy", context: "Established Operational Procedures" },
  { value: "First Class", label: "B.E. Computer Science", context: "Visvesvaraya Technological University" }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "razorpay-kyb",
    role: "Merchant Onboarding & KYB Analyst",
    company: "One Point One Solutions Pvt. Ltd.",
    client: "Razorpay",
    period: "Professional Experience",
    location: "Bangalore, Karnataka",
    summary: "Dedicated KYB analyst supporting India's leading payment gateway, Razorpay. Responsible for rigorous merchant vetting, regulatory compliance documentation, risk mitigation, and technical onboarding troubleshooting.",
    responsibilities: [
      "Performed KYB verification by reviewing merchant/business information and supporting documentation.",
      "Verified business information for accuracy, completeness, and consistency before merchant activation.",
      "Analyzed merchant business models and activities to identify potential risk and compliance concerns.",
      "Identified discrepancies in submitted information and supporting documents and escalated cases requiring review.",
      "Maintained accurate merchant records and documentation according to established operational procedures.",
      "Managed multiple onboarding requests while maintaining quality, accuracy, and turnaround-time (TAT) requirements.",
      "Coordinated with internal teams to resolve complex verification, onboarding, and compliance-related issues.",
      "Communicated with merchants to obtain missing information and resolve outstanding onboarding requirements.",
      "Used Microsoft Excel for operational tracking, reporting, and data management.",
      "Assisted merchants with API and technical onboarding issues using structured troubleshooting."
    ],
    technologies: ["KYB Verification", "Merchant Risk Assessment", "Microsoft Excel", "API Troubleshooting", "Process Compliance", "Escalation Management"],
    keyHighlights: [
      { label: "Client Partner", value: "Razorpay (India's leading FinTech Unicorn)" },
      { label: "Core Scope", value: "Pre-activation KYB, AML checks, document consistency audit" },
      { label: "Risk Mitigation", value: "Discrepancy detection, website policy audits, high-risk flag isolation" },
      { label: "Data Tracking", value: "Daily operational TAT tracking and compliance recordkeeping in Excel" }
    ]
  },
  {
    id: "kodnest-data",
    role: "Data Analytics Intern",
    company: "KodNest Technologies Pvt. Ltd.",
    period: "January 2025 – June 2025",
    duration: "6 Months",
    location: "Bangalore, Karnataka",
    summary: "Intensive 6-month data analytics and engineering program gaining practical exposure to relational database querying, reporting dashboards, and modern web application development.",
    responsibilities: [
      "Gained practical experience in SQL, Microsoft Excel, Power BI, JavaScript, React.js, and REST APIs.",
      "Used SQL to retrieve, filter, validate, and analyze structured data from relational databases.",
      "Used Excel for data organization, advanced analysis, reporting, and record management.",
      "Worked with Power BI dashboards and reports to visualize and communicate data insights to stakeholders.",
      "Performed data validation and troubleshooting to identify inconsistencies and resolve data-related issues.",
      "Worked with databases and digital platforms using structured data-management practices.",
      "Developed web applications using JavaScript and React.js."
    ],
    technologies: ["SQL / MySQL", "Power BI", "Microsoft Excel", "JavaScript", "React.js", "REST APIs"],
    keyHighlights: [
      { label: "Relational Queries", value: "Complex SQL filtering, joining, aggregations, and validation checks" },
      { label: "Data Visualization", value: "Designed interactive Power BI reports for key operational metrics" },
      { label: "Data Cleaning", value: "Eliminated data anomalies and enforced integrity constraints" },
      { label: "Frontend Build", value: "Constructed responsive, interactive web interfaces with React" }
    ]
  }
];

export const SKILL_GROUPS = [
  {
    category: "Data & Analytics",
    description: "Rigorous data extraction, verification, dashboarding, and validation capabilities.",
    skills: [
      { name: "SQL / MySQL", detail: "Querying, filtering, aggregations, joins, and validation scripts" },
      { name: "Microsoft Excel", detail: "Advanced formulas, pivot tables, operational tracking, TAT reporting" },
      { name: "Power BI", detail: "Interactive dashboard creation, KPI monitoring, visual reports" },
      { name: "Data Validation", detail: "Discrepancy detection, consistency checks, data cleansing" },
      { name: "Data Analysis & Reporting", detail: "Structured data management, trend discovery, stakeholder reports" }
    ]
  },
  {
    category: "Risk & KYB Compliance",
    description: "Fintech business verification, regulatory oversight, and risk mitigation.",
    skills: [
      { name: "KYB Verification", detail: "Business entity vetting, CIN, MCA filings, and MOA/AOA checks" },
      { name: "Merchant Risk Assessment", detail: "Business model risk scoring, chargeback potential, compliance analysis" },
      { name: "Compliance Review", detail: "KYC / CDD fundamentals, regulatory requirements, audit trail creation" },
      { name: "Documentation Review", detail: "Scrutiny of PAN, GSTIN, bank statements, and proof of address" },
      { name: "Issue Escalation & Operational Risk", detail: "Structured escalation pathways for suspicious activity & EDD" }
    ]
  },
  {
    category: "FinTech & Operations",
    description: "Payment gateway processes, merchant support, and financial workflows.",
    skills: [
      { name: "Digital Payments & Gateways", detail: "Payment lifecycle, merchant activation pipelines, settlement flow" },
      { name: "Merchant Onboarding", detail: "End-to-end activation pipeline, merchant communication, SLA management" },
      { name: "Process Adherence", detail: "Standard Operating Procedures (SOP), SLA preservation, turnaround time" },
      { name: "Stakeholder Communication", detail: "Merchant relationship management, inter-departmental coordination" },
      { name: "Priority Management", detail: "Balancing high volumes with zero-defect accuracy requirements" }
    ]
  },
  {
    category: "Technology & Engineering",
    description: "Computer science foundations and modern web architecture.",
    skills: [
      { name: "JavaScript (ES6+)", detail: "Modern asynchronous workflows, data manipulation, DOM events" },
      { name: "React.js", detail: "Functional components, state hooks, responsive UI architecture" },
      { name: "REST APIs", detail: "API payload inspection, endpoint integration, structured onboarding troubleshooting" },
      { name: "HTML5 & CSS3", detail: "Semantic web markup, responsive layouts, accessibility best practices" },
      { name: "PHP Foundations", detail: "Server-side web scripting and backend basics" }
    ]
  }
];

export const REGULATORY_CONCEPTS = [
  {
    title: "KYC & KYB Verification",
    tag: "Entity Governance",
    description: "Deep understanding of verifying corporate identities (Know Your Business) and individual beneficial owners (Know Your Customer). Reviewing Certificate of Incorporation, Memorandum of Association (MOA), Articles of Association (AOA), Board Resolutions, and authorized signatory mandates."
  },
  {
    title: "AML, CDD & EDD Protocols",
    tag: "Risk Prevention",
    description: "Comprehensive grasp of Anti-Money Laundering frameworks, Customer Due Diligence (CDD), and Enhanced Due Diligence (EDD) for high-risk jurisdictions, politically exposed persons (PEPs), or entities with unusual ownership hierarchies."
  },
  {
    title: "CTR & Suspicious Activity Escalation",
    tag: "Regulatory Reporting",
    description: "Familiarity with the purpose of Currency Transaction Reports (CTR) and the mechanics of identifying and escalating suspicious transactions or non-standard merchant transaction patterns."
  },
  {
    title: "Audit Trails & Regulated Records",
    tag: "Data Integrity",
    description: "Awareness of evidentiary audit trails in regulated financial operations. Ensuring all approvals, document rejections, merchant clarifications, and risk exceptions are indelibly recorded."
  }
];

export const SAMPLE_KYB_CASES: KybMerchantCase[] = [
  {
    id: "case-01",
    businessName: "ZetaCloud Technologies Pvt. Ltd.",
    entityType: "Private Limited Company",
    category: "B2B SaaS / Cloud Software",
    cinOrRegistration: "U72900KA2023PTC178921",
    gstin: "29AABCZ1234F1Z8",
    website: "https://zetacloud.example.com",
    turnoverRange: "₹50L – ₹2Cr Annually",
    directors: ["Anand Rao (DIN: 08912345)", "Priya Sharma (DIN: 09234567)"],
    submittedDocuments: [
      { name: "Certificate of Incorporation (MCA)", status: "verified", notes: "CIN verified on Ministry of Corporate Affairs portal. Matches registered address." },
      { name: "GSTIN Certificate", status: "verified", notes: "Active status on GST portal. Legal name matches MCA certificate." },
      { name: "Cancelled Cheque & Bank Account", status: "verified", notes: "Penny-drop verified. Account name matches company legal name." },
      { name: "Website Terms & Refund Policy", status: "verified", notes: "Clear pricing, privacy policy, refund terms, and contact support details live." }
    ],
    riskIndicators: [
      { flag: "Standard Software Services", severity: "low", explanation: "Low chargeback profile, established director credentials, clear B2B pricing model." }
    ],
    recommendedAction: "Approve"
  },
  {
    id: "case-02",
    businessName: "Aura Luxe Lifestyle LLP",
    entityType: "Limited Liability Partnership",
    category: "E-Commerce / Luxury Apparel & Perfumes",
    cinOrRegistration: "AAZ-9812",
    gstin: "29AAHFA4321E1Z3",
    website: "https://auraluxe.example.in",
    turnoverRange: "₹2Cr – ₹5Cr Projected",
    directors: ["Vikramaditya Mehta", "Sunita Mehta"],
    submittedDocuments: [
      { name: "LLP Agreement & Incorporation Certificate", status: "verified", notes: "Verified against MCA portal records." },
      { name: "GSTIN Registration", status: "verified", notes: "Active and compliant." },
      { name: "Brand Authorization / Trademark", status: "discrepancy", notes: "Selling premium designer perfumes without authorized reseller agreement or NOC from brand owners." },
      { name: "Website Shipping & Cancellation Policy", status: "discrepancy", notes: "Missing explicit delivery timeline and customer grievance officer contact." }
    ],
    riskIndicators: [
      { flag: "Brand Authenticity & IPR Risk", severity: "high", explanation: "Risk of counterfeit luxury goods leading to disputes, card brand penalties, and high chargebacks." },
      { flag: "Policy Discrepancy", severity: "medium", explanation: "Missing mandatory RBI/payment gateway compliance disclosures on merchant website." }
    ],
    recommendedAction: "Request Additional Documents",
    escalationReason: "Require authorized distributor certificate/invoices and website policy rectification before merchant activation."
  },
  {
    id: "case-03",
    businessName: "Apex Vault Global Solutions",
    entityType: "Sole Proprietorship",
    category: "Forex Advisory & High Yield Investments",
    cinOrRegistration: "N/A (Proprietorship)",
    gstin: "27AAGPA9999M1ZQ",
    website: "https://apexvault.example.org",
    turnoverRange: "₹10Cr+ Claimed",
    directors: ["Rahul Sen (Proprietor)"],
    submittedDocuments: [
      { name: "Shop & Establishment Certificate", status: "verified", notes: "Registered under local municipal authority." },
      { name: "PAN of Proprietor", status: "verified", notes: "Valid individual PAN." },
      { name: "SEBI / RBI Registration", status: "discrepancy", notes: "Claiming guaranteed returns on forex and crypto derivatives without SEBI / RBI financial advisor licenses." },
      { name: "Bank Statement", status: "pending", notes: "Recent large unexplained inflows from foreign correspondent accounts." }
    ],
    riskIndicators: [
      { flag: "Regulatory Prohibited Category", severity: "high", explanation: "Unregulated investment schemes violate payment aggregator acceptable use policies." },
      { flag: "AML / Transaction Anomaly", severity: "high", explanation: "Discrepancy between stated turnover profile and actual bank credits." }
    ],
    recommendedAction: "Escalate to EDD",
    escalationReason: "Escalated to Senior Risk & Compliance Committee for EDD and potential offboarding due to unregulated advisory and AML concern."
  }
];

export const SQL_EXAMPLES = [
  {
    title: "Merchant Discrepancy & Risk Identification",
    description: "Query used to flag onboarding applications with missing documents, pending KYC verifications, or high-risk MCC categories.",
    sql: `SELECT 
    m.merchant_id,
    m.business_legal_name,
    m.mcc_category,
    m.onboarding_date,
    COUNT(d.doc_id) AS total_submitted_docs,
    SUM(CASE WHEN d.status = 'DISCREPANCY' THEN 1 ELSE 0 END) AS discrepancy_count,
    m.assigned_analyst,
    m.status
FROM merchants m
LEFT JOIN merchant_documents d ON m.merchant_id = d.merchant_id
WHERE m.status IN ('PENDING_REVIEW', 'DOCUMENT_VERIFICATION')
GROUP BY m.merchant_id, m.business_legal_name, m.mcc_category, m.onboarding_date, m.assigned_analyst, m.status
HAVING SUM(CASE WHEN d.status = 'DISCREPANCY' THEN 1 ELSE 0 END) > 0
ORDER BY discrepancy_count DESC;`
  },
  {
    title: "Operational Turnaround Time (TAT) Tracking",
    description: "Operational query measuring time from merchant application submission to final activation, highlighting SLA adherence.",
    sql: `SELECT 
    DATE_TRUNC('month', submitted_at) AS onboarding_month,
    mcc_category,
    COUNT(*) AS total_onboarded,
    ROUND(AVG(EXTRACT(EPOCH FROM (activated_at - submitted_at)) / 3600), 2) AS avg_tat_hours,
    ROUND(SUM(CASE WHEN (EXTRACT(EPOCH FROM (activated_at - submitted_at)) / 3600) <= 24.0 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS sla_adherence_pct
FROM merchant_applications
WHERE status = 'ACTIVATED'
GROUP BY DATE_TRUNC('month', submitted_at), mcc_category
ORDER BY onboarding_month DESC, total_onboarded DESC;`
  }
];
