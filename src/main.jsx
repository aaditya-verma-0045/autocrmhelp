import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main>
      <header className="nav">
        <div className="brand"><span>AUTO</span> CRM HELP</div>
        <nav>
          <a href="#services">Services</a>
          <a href="#systems">Systems</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#audit" className="nav-cta">Free Audit</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">AI Automation • CRM Systems • Business Operations</div>
          <h1>AI-powered CRM and automation systems for growing businesses.</h1>
          <p>We help businesses automate lead management, follow-ups, onboarding, reporting, and operational workflows so teams can save time and scale faster.</p>
          <div className="hero-actions">
            <a href="#audit" className="btn primary">Book Free Automation Audit →</a>
            <a href="#services" className="btn secondary">View Systems</a>
          </div>
          <div className="trust-row">
            <span>Zapier</span><span>GoHighLevel</span><span>OpenAI</span><span>Google Sheets</span><span>Stripe</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="dashboard-top">
            <div><strong>Lead System</strong><small>Live workflow overview</small></div>
            <span className="status">Active</span>
          </div>
          <div className="flow">
            <div>Lead Form</div><div>CRM</div><div>AI Qualification</div><div>Follow-Up</div>
          </div>
          <div className="metrics">
            <div><strong>47%</strong><span>Admin time saved</span></div>
            <div><strong>24/7</strong><span>Lead response</span></div>
            <div><strong>1</strong><span>Central dashboard</span></div>
          </div>
        </div>
      </section>

      <section className="problem">
        <h2>Most businesses do not need more tools. They need better systems.</h2>
        <p>Disconnected apps, slow follow-ups, manual spreadsheets, and unclear reporting create hidden revenue leaks. AUTO CRM HELP fixes the operating system behind your business.</p>
      </section>

      <section id="services" className="services">
        <div className="section-head">
          <span>What We Build</span>
          <h2>Automation systems designed around business outcomes.</h2>
        </div>
        <div className="grid">
          <div className="service-card"><h3>CRM & Pipeline Automation</h3><p>Organize leads, automate follow-ups, and keep your sales pipeline moving without manual chasing.</p></div>
          <div className="service-card"><h3>AI Workflow Systems</h3><p>Use AI to qualify leads, summarize conversations, route requests, and support internal teams.</p></div>
          <div className="service-card"><h3>Lead Follow-Up Automation</h3><p>Automated email, SMS, WhatsApp, and CRM notifications so no opportunity gets missed.</p></div>
          <div className="service-card"><h3>Reporting Dashboards</h3><p>Track leads, operations, revenue, and team activity from one clear executive dashboard.</p></div>
        </div>
      </section>

      <section id="systems" className="system-section">
        <div>
          <span className="eyebrow">Our Core System</span>
          <h2>From lead capture to booked calls, reporting, and operations.</h2>
          <p>We design workflows that connect your CRM, forms, calendars, payments, spreadsheets, AI tools, and communication platforms.</p>
          <ul>
            <li>✓ Faster lead response</li>
            <li>✓ Less manual admin work</li>
            <li>✓ Cleaner CRM operations</li>
            <li>✓ Better visibility for owners</li>
            <li>✓ Automated client onboarding</li>
            <li>✓ Scalable business systems</li>
          </ul>
        </div>
        <div className="stack-card">
          <div className="stack-item">Lead Capture</div>
          <div className="stack-item">AI Qualification</div>
          <div className="stack-item">Automation Engine</div>
          <div className="stack-item">Sales Team Alerts</div>
          <div className="stack-item">Executive Dashboard</div>
        </div>
      </section>

      <section id="case-studies" className="case-study">
        <span>Case Study Direction</span>
        <h2>Built for real business operations.</h2>
        <p>We have supported technical systems across websites, mobile apps, CRM workflows, automations, Google Apps Script, reporting, and operational processes for real businesses.</p>
        <div className="case-grid">
          <div><h3>Collectible Classics</h3><p>Technology, website, app, automation, and operational systems support for a classic vehicle business.</p></div>
          <div><h3>Finance Automation</h3><p>CRM, lead management, reporting, and workflow automation for finance-style operations.</p></div>
        </div>
      </section>

      <section id="audit" className="cta">
        <h2>Find out where your business is losing time and revenue.</h2>
        <p>Book a free automation audit and we will identify manual processes, broken workflows, and automation opportunities inside your business.</p>
        <a className="btn primary" href="mailto:hello@autocrmhelp.com">Book Free Automation Audit →</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
