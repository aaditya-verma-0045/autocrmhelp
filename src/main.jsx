import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['AI Lead Response Engine', 'Instantly capture, qualify, route, and follow up with every inquiry before competitors respond.'],
  ['CRM Command Center', 'Clean pipelines, stages, tasks, reminders, owner dashboards, and sales visibility.'],
  ['Automation Infrastructure', 'Connect forms, calendars, payments, emails, SMS, WhatsApp, sheets, and internal tools.'],
  ['AI Operations Workflows', 'Summarize, classify, score, assign, and move work across the business automatically.'],
  ['Executive Dashboards', 'Track leads, revenue, tasks, campaigns, and team performance in one place.'],
  ['Custom API Systems', 'Build advanced integrations when Zapier templates are not enough.']
];

const industries = [
  ['Mortgage Automation', 'Lead intake, borrower qualification, document chase, CRM pipeline, lender updates, and appointment booking.', '/mortgage-automation'],
  ['Finance Automation', 'Client onboarding, lead routing, compliance-style workflows, reporting, and internal operations automation.', '/finance-automation'],
  ['Real Estate Automation', 'Buyer/seller lead routing, showing reminders, follow-up sequences, pipeline reporting, and agent alerts.', '/real-estate-automation'],
  ['Dealer Automation', 'Inventory updates, lead capture, buyer follow-up, appraisal workflows, website/app automation, and sales dashboards.', '/dealer-automation'],
  ['Law Firm Automation', 'Case intake, consultation booking, client onboarding, document workflows, and automated status updates.', '/law-firm-automation']
];

const landingPages = {
  '/mortgage-automation': {
    tag: 'MORTGAGE AUTOMATION SYSTEM',
    title: 'AI-powered CRM and lead follow-up systems for mortgage companies.',
    subtitle: 'Respond faster, qualify borrowers, chase documents, book calls, and keep every mortgage lead moving through your pipeline automatically.',
    pains: ['Slow borrower follow-up', 'Manual document chasing', 'Messy pipeline stages', 'No visibility on lead quality'],
    systems: ['Borrower intake automation', 'AI lead qualification', 'Document request sequences', 'Broker notifications', 'CRM pipeline dashboards', 'Appointment booking workflows']
  },
  '/finance-automation': {
    tag: 'FINANCE OPERATIONS SYSTEM',
    title: 'Automation systems for finance businesses that need speed and control.',
    subtitle: 'Automate client intake, lead handling, internal tasks, follow-ups, reporting, and operational workflows across your finance business.',
    pains: ['Manual client onboarding', 'Disconnected finance tools', 'Poor reporting visibility', 'Slow internal handoffs'],
    systems: ['Client onboarding flows', 'CRM automation', 'Payment and document workflows', 'Internal task routing', 'Executive dashboards', 'AI operations support']
  },
  '/real-estate-automation': {
    tag: 'REAL ESTATE LEAD SYSTEM',
    title: 'Automated lead management for real estate teams and brokerages.',
    subtitle: 'Capture buyer and seller leads, route them to agents, trigger follow-ups, schedule showings, and monitor pipeline performance in one place.',
    pains: ['Leads not contacted quickly', 'Agents miss follow-ups', 'No centralized pipeline', 'Manual showing coordination'],
    systems: ['Buyer/seller lead routing', 'Agent alerts', 'SMS and email follow-up', 'Showing reminders', 'CRM pipeline setup', 'Performance reporting']
  },
  '/dealer-automation': {
    tag: 'DEALER & COLLECTOR CAR SYSTEM',
    title: 'AI and automation systems for dealerships, collectors, and inventory businesses.',
    subtitle: 'Automate inventory workflows, buyer inquiries, appraisal intake, follow-up, reporting, and operational tasks across your vehicle business.',
    pains: ['Inventory updates are manual', 'Buyer leads get missed', 'No appraisal workflow', 'Operations depend on spreadsheets'],
    systems: ['Inventory automation', 'Buyer lead capture', 'Appraisal intake flows', 'Sales notifications', 'Vehicle inquiry follow-up', 'Owner dashboards']
  },
  '/law-firm-automation': {
    tag: 'LAW FIRM INTAKE SYSTEM',
    title: 'Automated intake, consultation, and client onboarding systems for law firms.',
    subtitle: 'Turn case inquiries into organized consultations with intake forms, CRM workflows, document requests, reminders, and status updates.',
    pains: ['Slow case intake', 'Missed consultations', 'Manual client updates', 'Scattered documents and notes'],
    systems: ['Case intake automation', 'Consultation booking', 'Client onboarding', 'Document workflows', 'Reminder sequences', 'Matter status dashboards']
  }
};

function Header() {
  return <header className="nav"><a className="logo-wrap" href="/"><div className="logo-mark">A</div><div className="brand">AUTO CRM HELP<span>AI systems for serious operators</span></div></a><nav><a href="/#solutions">Solutions</a><a href="/#industries">Industries</a><a href="/#proof">Proof</a><a href="/#audit" className="nav-button">Free Audit</a></nav></header>;
}

function AuditForm() {
  return <form className="audit-form" onSubmit={(e)=>e.preventDefault()}><input placeholder="Your name"/><input placeholder="Business email"/><input placeholder="Company website"/><select><option>Select your industry</option><option>Mortgage / Finance</option><option>Real Estate</option><option>Dealership / Automotive</option><option>Law Firm</option><option>Other Business</option></select><textarea placeholder="What manual process is wasting the most time right now?"></textarea><button>Request Free Audit</button></form>;
}

function AutomationVisual() {
  return <div className="neon-panel"><div className="panel-top"><span>LIVE AUTOMATION MAP</span><b>ONLINE</b></div><div className="node main-node">New Lead</div><div className="rail"></div><div className="node-grid"><div className="node">AI Score</div><div className="node">CRM Stage</div></div><div className="rail"></div><div className="node-grid"><div className="node">Sales Alert</div><div className="node">Follow-Up</div></div><div className="rail"></div><div className="node main-node">Booked Call + Dashboard Update</div><div className="metrics"><div><strong>24/7</strong><span>Lead Response</span></div><div><strong>40%+</strong><span>Admin Saved</span></div><div><strong>1</strong><span>Command Center</span></div></div></div>;
}

function Home() {
  return <main><div className="orb orb-one"></div><div className="orb orb-two"></div><Header/><section className="hero"><div className="hero-content"><div className="pill">NEON OPS SYSTEMS • AI AUTOMATION • CRM INFRASTRUCTURE</div><h1>Build the automated operating system behind your next million.</h1><p className="hero-text">AUTO CRM HELP designs futuristic CRM, AI, and automation systems for high-lead businesses that want faster response times, cleaner operations, and scalable growth.</p><div className="hero-actions"><a className="primary-btn" href="#audit">Book Free Automation Audit</a><a className="secondary-btn" href="#industries">View Industry Systems</a></div><div className="signal-row"><span>Zapier</span><span>GHL</span><span>OpenAI</span><span>Stripe</span><span>Webhooks</span><span>Dashboards</span></div></div><AutomationVisual/></section><section className="black-section"><p className="section-label">THE REAL PROBLEM</p><h2>Your business is leaking revenue because the systems are disconnected.</h2><div className="pain-grid"><div>Slow lead follow-up</div><div>Manual CRM updates</div><div>No owner visibility</div><div>Messy handoffs</div></div></section><section id="solutions" className="section"><div className="section-head"><p className="section-label">SOLUTIONS</p><h2>We build automation infrastructure, not random workflows.</h2></div><div className="cards-grid">{services.map(([title,text])=><div className="glass-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section><section id="industries" className="section industries"><div className="section-head"><p className="section-label">CLIENT-SPECIFIC LANDING PAGES</p><h2>Dedicated systems for industries with high-value leads.</h2><p>Each vertical gets its own focused landing page, offer, case study angle, and automation audit funnel.</p></div><div className="industry-grid">{industries.map(([title,text,link])=><a className="industry-card" href={link} key={title}><span>{link}</span><h3>{title}</h3><p>{text}</p><b>Open landing page →</b></a>)}</div></section><section id="proof" className="proof"><p className="section-label">PROOF BUILT INTO POSITIONING</p><h2>From freelancer execution to AI operations partner.</h2><div className="proof-grid"><div><h3>Collectible Classics</h3><p>Website, mobile app, Zapier automation, Google Sheets scripts, and technical operations support.</p></div><div><h3>Finance Systems</h3><p>CRM, lead workflows, document operations, reporting, and process automation experience.</p></div><div><h3>Automation Marketplace</h3><p>Hundreds of automation jobs across Zapier, APIs, CRMs, forms, and business workflows.</p></div></div></section><section id="audit" className="audit"><div><p className="section-label">FREE AUTOMATION AUDIT</p><h2>Show us your process. We will show you what to automate first.</h2><p>Built for business owners who know they are losing time, leads, or visibility but do not know where to start.</p></div><AuditForm/></section></main>;
}

function LandingPage({ page }) {
  return <main><div className="orb orb-one"></div><div className="orb orb-two"></div><Header/><section className="hero landing-hero"><div className="hero-content"><div className="pill">{page.tag}</div><h1>{page.title}</h1><p className="hero-text">{page.subtitle}</p><div className="hero-actions"><a className="primary-btn" href="#audit">Book Industry Audit</a><a className="secondary-btn" href="/">Back to Home</a></div></div><AutomationVisual/></section><section className="black-section"><p className="section-label">WHY THIS MATTERS</p><h2>Most companies in this industry lose money because response, follow-up, and reporting are not systemized.</h2><div className="pain-grid">{page.pains.map((pain)=><div key={pain}>{pain}</div>)}</div></section><section className="section"><div className="section-head"><p className="section-label">SYSTEMS WE BUILD</p><h2>Your industry-specific automation stack.</h2><p>We design the CRM, follow-up, AI, reporting, and operational workflows around the way your business actually works.</p></div><div className="cards-grid">{page.systems.map((system)=><div className="glass-card" key={system}><h3>{system}</h3><p>Built to reduce manual work, improve visibility, and create a faster client experience.</p></div>)}</div></section><section className="proof"><p className="section-label">IMPLEMENTATION ROADMAP</p><h2>From audit to live operating system.</h2><div className="proof-grid"><div><h3>1. Workflow Audit</h3><p>Map your current process, tools, manual work, and revenue leaks.</p></div><div><h3>2. System Build</h3><p>Build CRM workflows, automations, AI logic, reporting, and integrations.</p></div><div><h3>3. Optimization</h3><p>Monitor performance, improve conversion, and scale the system.</p></div></div></section><section id="audit" className="audit"><div><p className="section-label">BOOK YOUR INDUSTRY AUDIT</p><h2>Ready to see what should be automated first?</h2><p>Send your website and current process. We will identify the highest-value automation opportunities for your business.</p></div><AuditForm/></section></main>;
}

function App() {
  const path = window.location.pathname;
  const page = landingPages[path];
  if (page) return <LandingPage page={page} />;
  return <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
