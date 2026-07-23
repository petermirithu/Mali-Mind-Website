import React, { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import landingScreen from './assets/Landing Screen.png';
import signInScreen from './assets/SignIn Screen.png';
import homeScreen from './assets/Home Screen.png';
import impactScreen from './assets/Impact Screen.png';
import feedScreen from './assets/Feed Screen.png';
import askMaliScreen from './assets/Chat Screen.png';

const ANDROID_DOWNLOAD_URL = 'https://maliassets.blob.core.windows.net/maliapks/Mali_Android_APK_v1_0_0.apk.zip';

const features = [
  {
    number: '01',
    name: 'Pulse',
    title: 'Read the week in seconds',
    body: 'Open Mali and instantly see what changed across fuel, forex, food and inflation — before those shifts reach your wallet.',
  },
  {
    number: '02',
    name: 'Impact',
    title: 'Make it personal',
    body: 'Impact profiles translate national economic moves into your household reality: commute, rent, groceries and savings.',
  },
  {
    number: '03',
    name: 'Ask Mali',
    title: 'Plain-language answers',
    body: 'Ask why prices moved, what it means for you, and what to watch next — without wading through complicated reports.',
  },
  {
    number: '04',
    name: 'Feed',
    title: 'Stay ahead of every update',
    body: 'Live stories, quick summaries and source links keep your economic picture current throughout the week.',
  },
];

const screens = [
  { id: 'home', image: homeScreen, label: 'Home', title: 'Your economic dashboard', body: 'Weekly pulse, key indicators and AI insight — all above the fold.' },
  { id: 'impact', image: impactScreen, label: 'Impact', title: 'What pressure really means', body: 'Category breakdowns connect market changes to your spending patterns.' },
  { id: 'feed', image: feedScreen, label: 'Feed', title: 'Follow the signal', body: 'Major updates with source attribution and quick analysis links.' },
  { id: 'ask', image: askMaliScreen, label: 'Ask Mali', title: 'Ask anything', body: 'The assistant explains the why behind price moves in plain language.' },
  { id: 'landing', image: landingScreen, label: 'Welcome', title: 'A considered first impression', body: 'Kenya-first and unmistakably Mali from the very first screen.' },
  { id: 'signin', image: signInScreen, label: 'Sign in', title: 'Fast, trusted entry', body: 'A cohesive visual language that carries through the whole product.' },
];

const stats = [
  { value: '4+', label: 'Live indicator categories' },
  { value: 'Real-time', label: 'Fuel, food & forex tracking' },
  { value: 'AI-powered', label: 'Personal impact analysis' },
  { value: 'Free', label: 'During beta — no card needed' },
];

const steps = [
  { title: 'Download the package', body: 'Get the ZIP package on your Android device using the button below.' },
  { title: 'Unzip the file', body: 'Extract the archive to reveal the Mali APK inside.' },
  { title: 'Install and open', body: 'Open the APK, complete the Android install flow, and you\u2019re in.' },
];

const socials = [
  { label: 'Portfolio', href: 'https://petermirithu.github.io/Portfolio/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/peter-mirithu' },
  { label: 'GitHub', href: 'https://github.com/petermirithu' },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path d="M7.2 8.4a5.9 5.9 0 0 1 9.6 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.5 9.8h9a2.5 2.5 0 0 1 2.5 2.5v4.6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.9v-4.6a2.5 2.5 0 0 1 2.5-2.5Z" fill="currentColor" />
      <path d="M8.5 6.7 7.3 4.9M15.5 6.7l1.2-1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path d="M15 4.1c-.7.8-1.2 1.9-1.1 3 .9.1 2-.4 2.6-1.2.7-.8 1.1-1.9 1-2.9-1 .1-2 .5-2.5 1.1Z" fill="currentColor" />
      <path d="M17.7 12.3c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3-1.8-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.9-3.6 2.1-1.6 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.1 2.8 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.7-2.1.8-1.2 1.1-2.4 1.1-2.5-.1 0-2.8-1.1-2.8-3.3Z" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Mali home" onClick={closeMenu}>
            <img src={logo} alt="" />
            <span>Mali</span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary">
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#screens" onClick={closeMenu}>The app</a>
            <a href="#why" onClick={closeMenu}>Why Mali</a>
            <a href="#download" onClick={closeMenu}>Download</a>
          </nav>

          <div className="header-cta">
            <a className="btn btn-primary btn-sm" href={ANDROID_DOWNLOAD_URL} target="_blank" rel="noreferrer">
              Get the app <ArrowIcon />
            </a>
            <button
              className="menu-toggle"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                Economic clarity for everyday <em>Kenyan life.</em>
              </h1>

              <p className="lede">
                Mali tracks fuel, food and forex in real time, then uses AI to explain
                exactly how each change affects your wallet, your business and your plans.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={ANDROID_DOWNLOAD_URL} target="_blank" rel="noreferrer">
                  <AndroidIcon /> Download for Android
                </a>
                <a className="btn btn-outline" href="#screens">
                  Explore the app <ArrowIcon />
                </a>
              </div>

              <p className="hero-note">Free during beta · No card required · iOS coming soon</p>
            </div>

            <div className="hero-visual">
              <div className="hero-frame hero-frame-back" aria-hidden="true">
                <img src={homeScreen} alt="" loading="lazy" />
              </div>
              <div className="hero-frame hero-frame-front">
                <img src={landingScreen} alt="Mali home screen with the weekly cost-of-living pulse and key indicators" />
              </div>
              <div className="hero-frame hero-frame-side" aria-hidden="true">
                <img src={askMaliScreen} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="stats" aria-label="Product highlights">
          <div className="container stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <p className="overline">What Mali does</p>
              <h2>One product. Four ways to stay ahead.</h2>
              <p className="section-sub">
                Live market signals delivered through an interface that feels calm, useful
                and grounded in how people actually make money decisions.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((f) => (
                <article key={f.name} className="feature">
                  <div className="feature-top">
                    <span className="feature-number">{f.number}</span>
                    <span className="feature-name">{f.name}</span>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SCREENS ============ */}
        <section className="section section-dark" id="screens">
          <div className="container">
            <div className="section-head">
              <p className="overline">Inside the app</p>
              <h2>Shown exactly the way it looks.</h2>
              <p className="section-sub">
                These aren’t mockups — they’re real screenshots of the product you’ll
                download today.
              </p>
            </div>

            <div className="screens-rail" role="list">
              {screens.map((s) => (
                <figure key={s.id} className="screen-card" role="listitem">
                  <div className="screen-img">
                    <img src={s.image} alt={s.title} loading="lazy" />
                  </div>
                  <figcaption>
                    <span className="screen-label">{s.label}</span>
                    <strong>{s.title}</strong>
                    <p>{s.body}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY ============ */}
        <section className="section" id="why">
          <div className="container why-grid">
            <div className="why-copy">
              <p className="overline">Why Mali feels different</p>
              <h2>A guide, not a spreadsheet.</h2>
              <p className="section-sub">
                Mali has strong data bones, but the experience stays human. It translates
                economic movement into understandable guidance — useful for fast daily
                decisions, not just passive reading.
              </p>

              <a className="btn btn-primary" href={ANDROID_DOWNLOAD_URL} target="_blank" rel="noreferrer">
                <AndroidIcon /> Try it today
              </a>
            </div>

            <ol className="why-list">
              <li>
                <strong>Understand what moved</strong>
                <p>Track weekly changes and read the signal quickly — fuel, forex, food and inflation in one glance.</p>
              </li>
              <li>
                <strong>See your impact</strong>
                <p>Connect macro shifts to transport, groceries, rent and household budgets.</p>
              </li>
              <li>
                <strong>Act with clarity</strong>
                <p>Use Ask Mali and the feed to decide what matters now — and what can wait.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ============ DOWNLOAD ============ */}
        <section className="section section-download" id="download">
          <div className="container">
            <div className="download-panel">
              <div className="download-head">
                <p className="overline overline-light">Get Mali</p>
                <h2>Three steps and you’re in.</h2>
                <p className="section-sub">
                  The Android package ships as a ZIP file. Here’s the simple install flow.
                </p>
              </div>

              <ol className="steps">
                {steps.map((step, i) => (
                  <li key={step.title}>
                    <span className="step-index">{i + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="download-actions">
                <a className="btn btn-light" href={ANDROID_DOWNLOAD_URL} target="_blank" rel="noreferrer">
                  <AndroidIcon /> Download Android ZIP
                </a>
                <span className="ios-chip">
                  <AppleIcon /> iOS coming soon
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <img src={logo} alt="" />
              <span>Mali</span>
            </a>
            <p>Economic intelligence for Kenya, now live.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <a href="#features">Features</a>
            <a href="#screens">The app</a>
            <a href="#why">Why Mali</a>
            <a href="#download">Download</a>
          </nav>

          <div className="footer-maker">
            <p className="footer-label">Designed &amp; built by</p>
            <strong>Peter Mirithu</strong>
            <span>Software Engineer · AI/ML · Mobile</span>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="container footer-meta">
          <span>© {new Date().getFullYear()} Mali. All rights reserved.</span>
          <span>Made in Nairobi 🇰🇪</span>
        </div>
      </footer>
    </div>
  );
}
