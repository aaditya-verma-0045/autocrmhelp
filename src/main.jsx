import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['Lead Conversion Systems', 'Capture, qualify, route, and follow up with every lead automatically.'],
  ['CRM & Sales Pipeline Automation', 'Build clean pipelines, reminders, stages, tasks, and executive visibility.'],
  ['AI Operations Workflows', 'Use AI to summarize, score, classify, and move work across your business.'],
  ['Reporting & Owner Dashboards', 'Know what is happening across sales, operations, marketing, and delivery.'],
  ['Client Onboarding Automation', 'Forms, documents, payments, notifications, and task creation connected end-to-end.'],
  ['Custom API & Webhook Systems', 'Connect the tools that do not naturally talk to each other.']
];

const process = [
  ['01', 'Audit', 'We map your current workflow, bottlenecks, tools, and revenue leaks.'],
  ['02', 'Design', 'We design a simple operating system around your sales and operations.'],
  ['03', 'Build', 'We implement CRM, automation, AI workflows, dashboards, and integrations.'],
  ['04', 'Optimize', 'We track performance, fix gaps, and continuously improve the system.']
];

function App() {
  return (
    <main>
      <header className="nav">
        <div className="logo-mark">AC</div>
        <div className="brand">AUTO CRM HELP<span>Time is money — we save both</span></div>
        <nav>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#proof">Proof</a>
          <a href="#audit" className="nav-button">Free Audit</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="pill">AI Automation Partner for US & UK Businesses</div>
          <h1>Turn messy business operations into automated growth systems.</h1>
          <p className="hero-text">AUTO CRM HELP builds CRM, AI, automation, reporting, and workflow systems that help high-lead businesses respond faster, reduce manual work, and scale without chaos.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#audit">Book a Free Automation Audit</a>
            <a className="secondary-btn" href="#services">See What We Build</a>
          </div>
          <div className="trust-strip">
            <span>Zapier</span><span>GoHighLevel</span><span>OpenAI</span><span>Google Sheets</span><span>Stripe</span><span>APIs</span>
          </div>
        </div>
        <div className="system-visual">
          <div className="visual-header"><span>Revenue Operating System</span><b>LIVE</b></div>
          <div className="workflow-card active">New Lead Captured</div>
          <div className="connector"></div>
          <div className="workflow-grid">
            <div className="workflow-card">AI Qualification</div>
            <div className="workflow-card">CRM Update</div>
          </div>
          <div className="connector"></div>
          <div className="workflow-grid">
            <div className="workflow-card">Sales Alert</div>
            <div className="workflow-card">Follow-Up Sequence</div>
          </div>
          <div className="metric-row">
            <div><strong>24/7</strong><span>Response</span></div>
            <div><strong>40%+</strong><span>Admin Saved</span></div>
            <div><strong>1</strong><span>Dashboard</span></div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <p className="section-label">The Problem</p>
        <h2>Your business is not slow because of people. It is slow because the systems are disconnected.</h2>
        <div className="problem-grid">
          <div>Leads sit too long before follow-up</div>
          <div>Teams manually copy data between apps</div>
          <div>Owners lack real-time visibility</div>
          <div>CRM stages are messy and inconsistent</div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading">
          <p className="section-label">What We Build</p>
          <h2>Automation infrastructure for companies that want to scale.</h2>
        </div>
        <div className="services-grid">
          {services.map(([title, text]) => <div className="service-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section id="process" className="process-section">
        <div>
          <p className="section-label">How It Works</p>
          <h2>We do not sell random zaps. We build operating systems.</h2>
          <p>Every build starts with understanding where time, leads, and revenue are leaking. Then we design the simplest system that fixes the root problem.</p>
        </div>
        <div className="process-list">
          {process.map(([num, title, text]) => <div className="process-item" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </div>
      </section>

      <section id="proof" className="proof-section">
        <p className="section-label">Proof Direction</p>
        <h2>Built from real business operations, not theory.</h2>
        <div className="proof-grid">
          <div><h3>Collectible Classics</h3><p>Website, mobile app, Google Sheets scripts, Zapier automation, technical project management, and operational systems.</p></div>
          <div><h3>Finance & Mortgage Systems</h3><p>CRM workflows, lead handling, document processes, automation, reporting, and sales operations experience.</p></div>
          <div><h3>Marketplace Proof</h3><p>Hundreds of automation projects delivered across Zapier, APIs, CRM workflows, and business process automation.</p></div>
        </div>
      </section>

      <section id="audit" className="audit-section">
        <div>
          <p className="section-label">Free Automation Audit</p>
          <h2>Want to know where automation can save time and increase revenue?</h2>
          <p>Send us your website and current process. We will identify the biggest automation opportunities and show you what system should be built first.</p>
        </div>
        <form className="audit-form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" />
          <input placeholder="Business email" />
          <input placeholder="Company website" />
          <select><option>What do you need help with?</option><option>CRM / Leads</option><option>AI Automation</option><option>Operations</option><option>Reporting</option></select>
          <textarea placeholder="Briefly describe your current manual process"></textarea>
          <button>Request Free Audit</button>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
