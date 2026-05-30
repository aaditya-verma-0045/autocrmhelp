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
  ['Mortgage & Finance', 'Lead intake, borrower qualification, document chase, CRM pipeline, lender updates, and appointment booking.', '/mortgage-automation'],
  ['Real Estate Teams', 'Buyer/seller lead routing, showing reminders, follow-up sequences, pipeline reporting, and agent alerts.', '/real-estate-automation'],
  ['Car Dealerships & Collectors', 'Inventory updates, lead capture, buyer follow-up, appraisal workflows, website/app automation, and sales dashboards.', '/dealer-automation'],
  ['Law Firms', 'Case intake, consultation booking, client onboarding, document workflows, and automated status updates.', '/law-firm-automation']
];

function App() {
  return (
    <main>
      <div className="orb orb-one"></div><div className="orb orb-two"></div>
      <header className="nav">
        <div className="logo-wrap"><div className="logo-mark">A</div><div className="brand">AUTO CRM HELP<span>AI systems for serious operators</span></div></div>
        <nav><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#proof">Proof</a><a href="#audit" className="nav-button">Free Audit</a></nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="pill">NEON OPS SYSTEMS • AI AUTOMATION • CRM INFRASTRUCTURE</div>
          <h1>Build the automated operating system behind your next million.</h1>
          <p className="hero-text">AUTO CRM HELP designs futuristic CRM, AI, and automation systems for high-lead businesses that want faster response times, cleaner operations, and scalable growth.</p>
          <div className="hero-actions"><a className="primary-btn" href="#audit">Book Free Automation Audit</a><a className="secondary-btn" href="#industries">View Industry Systems</a></div>
          <div className="signal-row"><span>Zapier</span><span>GHL</span><span>OpenAI</span><span>Stripe</span><span>Webhooks</span><span>Dashboards</span></div>
        </div>
        <div className="neon-panel">
          <div className="panel-top"><span>LIVE AUTOMATION MAP</span><b>ONLINE</b></div>
          <div className="node main-node">New Lead</div>
          <div className="rail"></div>
          <div className="node-grid"><div className="node">AI Score</div><div className="node">CRM Stage</div></div>
          <div className="rail"></div>
          <div className="node-grid"><div className="node">Sales Alert</div><div className="node">Follow-Up</div></div>
          <div className="rail"></div>
          <div className="node main-node">Booked Call + Dashboard Update</div>
          <div className="metrics"><div><strong>24/7</strong><span>Lead Response</span></div><div><strong>40%+</strong><span>Admin Saved</span></div><div><strong>1</strong><span>Command Center</span></div></div>
        </div>
      </section>

      <section className="black-section"><p className="section-label">THE REAL PROBLEM</p><h2>Your business is leaking revenue because the systems are disconnected.</h2><div className="pain-grid"><div>Slow lead follow-up</div><div>Manual CRM updates</div><div>No owner visibility</div><div>Messy handoffs</div></div></section>

      <section id="solutions" className="section"><div className="section-head"><p className="section-label">SOLUTIONS</p><h2>We build automation infrastructure, not random workflows.</h2></div><div className="cards-grid">{services.map(([title,text])=><div className="glass-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="industries" className="section industries"><div className="section-head"><p className="section-label">CLIENT-SPECIFIC LANDING PAGES</p><h2>Dedicated systems for industries with high-value leads.</h2><p>Each vertical gets its own focused landing page, offer, case study angle, and automation audit funnel.</p></div><div className="industry-grid">{industries.map(([title,text,link])=><a className="industry-card" href={link} key={title}><span>{link}</span><h3>{title}</h3><p>{text}</p><b>Open landing page →</b></a>)}</div></section>

      <section id="proof" className="proof"><p className="section-label">PROOF BUILT INTO POSITIONING</p><h2>From freelancer execution to AI operations partner.</h2><div className="proof-grid"><div><h3>Collectible Classics</h3><p>Website, mobile app, Zapier automation, Google Sheets scripts, and technical operations support.</p></div><div><h3>Finance Systems</h3><p>CRM, lead workflows, document operations, reporting, and process automation experience.</p></div><div><h3>Automation Marketplace</h3><p>Hundreds of automation jobs across Zapier, APIs, CRMs, forms, and business workflows.</p></div></div></section>

      <section id="audit" className="audit"><div><p className="section-label">FREE AUTOMATION AUDIT</p><h2>Show us your process. We will show you what to automate first.</h2><p>Built for business owners who know they are losing time, leads, or visibility but do not know where to start.</p></div><form className="audit-form" onSubmit={(e)=>e.preventDefault()}><input placeholder="Your name"/><input placeholder="Business email"/><input placeholder="Company website"/><select><option>Select your industry</option><option>Mortgage / Finance</option><option>Real Estate</option><option>Dealership / Automotive</option><option>Law Firm</option><option>Other Business</option></select><textarea placeholder="What manual process is wasting the most time right now?"></textarea><button>Request Free Audit</button></form></section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
