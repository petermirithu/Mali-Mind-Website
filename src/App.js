import React, { useEffect } from 'react';
import logo from './assets/logo.png';
import landingScreen from './assets/Landing Screen.png';
import signInScreen from './assets/SignIn Screen.png';
import homeScreen from './assets/Home Screen.png';
import impactScreen from './assets/Impact Screen.png';
import feedScreen from './assets/Feed Screen.png';
import askMaliScreen from './assets/Chat Screen.png';

const ANDROID_DOWNLOAD_URL = 'https://maliassets.blob.core.windows.net/maliapks/Mali_Android_APK_v1_0_0.apk.zip';

const heroScreens = [
  { image: homeScreen, className: 'hero-device hero-device-main', alt: 'Mali home screen showing cost of living pulse and key indicators' },
  { image: impactScreen, className: 'hero-device hero-device-side hero-device-left', alt: 'Mali impact screen showing spending impact and profile cards' },
  { image: feedScreen, className: 'hero-device hero-device-side hero-device-right', alt: 'Mali feed screen showing live market and fuel updates' },
];

const featureCards = [
  {
    eyebrow: 'Pulse',
    title: 'Read the week in seconds.',
    body: 'Open Mali and see what changed across fuel, forex, food and inflation before those shifts hit your wallet.',
  },
  {
    eyebrow: 'Impact',
    title: 'Make it personal.',
    body: 'Profiles and breakdowns turn national economic moves into your household, commute, rent and grocery reality.',
  },
  {
    eyebrow: 'Ask Mali',
    title: 'Get plain-language answers.',
    body: 'Ask why prices moved, what they mean, and what to watch next without reading through complicated reports.',
  },
  {
    eyebrow: 'Feed',
    title: 'Stay ahead of every update.',
    body: 'Live stories, quick summaries and source links keep your economic picture current throughout the week.',
  },
];

const screenStories = [
  {
    id: 'landing',
    image: landingScreen,
    title: 'A launch screen that already feels alive',
    body: 'The first touchpoint sets the mood immediately: Kenya-first, cinematic, and unmistakably Mali.',
    tone: 'lime',
  },
  {
    id: 'signin',
    image: signInScreen,
    title: 'Fast entry, clean trust signals',
    body: 'The sign-in experience carries the same visual language as the product, so the brand feels cohesive end to end.',
    tone: 'glass',
  },
  {
    id: 'home',
    image: homeScreen,
    title: 'Your economic dashboard',
    body: 'Weekly pulse, key indicators and AI insight all sit above the fold so users can act quickly.',
    tone: 'teal',
  },
  {
    id: 'impact',
    image: impactScreen,
    title: 'See what pressure really means',
    body: 'Impact Profiles and category breakdowns connect market changes to individual lifestyle choices and spending patterns.',
    tone: 'amber',
  },
  {
    id: 'feed',
    image: feedScreen,
    title: 'Follow the signal',
    body: 'A readable feed surfaces major updates with source attribution and quick analysis links.',
    tone: 'red',
  },
  {
    id: 'ask-mali',
    image: askMaliScreen,
    title: 'Ask Mali anything',
    body: 'The assistant breaks down the why behind price moves with plain language built for Kenyan users.',
    tone: 'lime',
  },
];

const productPillars = [
  'Live indicators for fuel, food, forex and inflation',
  'Personalized impact views for budgets and routines',
  'AI answers grounded in everyday Kenyan realities',
  'Feed updates with readable summaries and source links',
];

const androidInstallSteps = [
  'Download the ZIP package to your Android device.',
  'Unzip the file to reveal the Mali APK.',
  'Open the APK and complete the Android install flow.',
];

const socials = [
  {
    label: 'Portfolio',
    href: 'https://petermirithu.github.io/Portfolio/',
    icon: 'globe',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/peter-mirithu',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/petermirithu',
    icon: 'github',
  },
];

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 8.4a5.9 5.9 0 0 1 9.6 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.5 9.8h9a2.5 2.5 0 0 1 2.5 2.5v4.6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.9v-4.6a2.5 2.5 0 0 1 2.5-2.5Z" fill="currentColor" />
      <circle cx="9.5" cy="14.2" r="0.9" fill="#0b0f14" />
      <circle cx="14.5" cy="14.2" r="0.9" fill="#0b0f14" />
      <path d="M8.5 6.7 7.3 4.9M15.5 6.7l1.2-1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 4.1c-.7.8-1.2 1.9-1.1 3 .9.1 2-.4 2.6-1.2.7-.8 1.1-1.9 1-2.9-1 .1-2 .5-2.5 1.1Z" fill="currentColor" />
      <path d="M17.7 12.3c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3-1.8-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.9-3.6 2.1-1.6 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.1 2.8 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.7-2.1.8-1.2 1.1-2.4 1.1-2.5-.1 0-2.8-1.1-2.8-3.3Z" fill="currentColor" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 12h16.4M12 3.5c2.1 2.2 3.3 5.2 3.3 8.5S14.1 18.3 12 20.5M12 3.5c-2.1 2.2-3.3 5.2-3.3 8.5s1.2 6.3 3.3 8.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.3 8.1a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM4.9 9.7h2.8V19H4.9V9.7Zm4.6 0h2.7V11h.1c.4-.7 1.3-1.6 2.8-1.6 3 0 3.5 1.9 3.5 4.4V19h-2.8v-4.6c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V19H9.5V9.7Z" fill="currentColor" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.6a8.6 8.6 0 0 0-2.7 16.8c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-.9-2.7-.9-.3-.8-.8-1.1-.8-1.1-.7-.4.1-.4.1-.4.8.1 1.2.8 1.2.8.7 1.2 1.9.8 2.3.7.1-.5.3-.8.5-1-1.8-.2-3.8-.9-3.8-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.3.8a7.9 7.9 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.2-1.9 3.9-3.8 4 .3.2.6.8.6 1.5V20c0 .2.1.5.5.4A8.6 8.6 0 0 0 12 3.6Z" fill="currentColor" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === 'linkedin') return <LinkedInIcon />;
  if (name === 'github') return <GitHubIcon />;
  return <GlobeIcon />;
}

function AndroidButton({ className = '', children = 'Download for Android' }) {
  return (
    <a className={className} href={ANDROID_DOWNLOAD_URL} target="_blank" rel="noreferrer">
      <span className="button-icon" aria-hidden="true"><AndroidIcon /></span>
      {children}
    </a>
  );
}

function IosButton({ className = '', children = 'iOS Coming Soon' }) {
  return (
    <a className={`${className} button-ios-link`} href="#ios-availability">
      <span className="button-icon" aria-hidden="true"><AppleIcon /></span>
      {children}
    </a>
  );
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true">
        <div className="backdrop-orb backdrop-orb-1" />
        <div className="backdrop-orb backdrop-orb-2" />
        <div className="backdrop-grid" />
        <div className="backdrop-rings" />
      </div>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Mali home">
          <img src={logo} alt="Mali logo" />
          <div>
            <strong>MALi</strong>
            <span>Economic companion for Kenya</span>
          </div>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#features">What it does</a>
          <a href="#screens">Screens</a>
          <a href="#intelligence">Why Mali</a>
          <a href="#download">Where to get it</a>
        </nav>

        <div className="header-actions">
          <IosButton className="button button-ios header-cta">iOS Coming Soon</IosButton>
          <AndroidButton className="button button-ghost header-cta">
            Android Download
          </AndroidButton>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="live-dot" />
              <span>Now live. Built for Kenyan users, budgets and decisions.</span>
            </div>
            
            <h1>
              Mali is live.
              <span>Understand today. Plan for tomorrow.</span>
            </h1>

            <p className="hero-text">
              Mali tracks fuel, food, forex in real time — then uses AI to explain exactly how these changes impact your wallet, business, and daily decisions.
            </p>

            <p className="hero-subtext">
              Free during beta · No card required · Built in Nairobi 🇰🇪
            </p>

            <div className="hero-actions">
              <AndroidButton className="button button-primary">Download for Android</AndroidButton>
              <IosButton className="button button-ios">iOS Coming Soon</IosButton>
              <a className="button button-secondary" href="#screens">Explore the app</a>
            </div>

            <div className="hero-proof">
              {productPillars.map((item) => (
                <div key={item} className="proof-pill">{item}</div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="App preview collage">
            <div className="hero-glow" />
            {heroScreens.map((screen) => (
              <div key={screen.alt} className={screen.className}>
                <img src={screen.image} alt={screen.alt} />
              </div>
            ))}
            <div className="hero-caption-card">
              <p>Weekly pulse</p>
              <strong>See the signal before it becomes a surprise.</strong>
            </div>
          </div>
        </section>

        <section className="launch-strip" aria-label="Product highlights">
          <div>
            <span>Live app</span>
            <strong>Real screenshots. Real product. Real economic context.</strong>
          </div>
          <div>
            <span>Built around</span>
            <strong>Fuel, forex, food, inflation, AI insight and personal impact.</strong>
          </div>
          <div>
            <span>Availability</span>
            <strong>Android download is live now. iOS is on the way.</strong>
          </div>
        </section>

        <section className="section-block" id="features">
          <div className="section-heading">
            <p className="eyebrow">What the app does</p>
            <h2>One product, multiple ways to stay ahead.</h2>
            <p>
              Mali combines live market signals with an interface that feels calm, useful and grounded in the way people
              actually make money decisions day to day.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="feature-card">
                <p>{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <span>{feature.body}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block screen-section" id="screens">
          <div className="section-heading">
            <p className="eyebrow">Inside Mali</p>
            <h2>The app, shown the way it really looks.</h2>
            <p>
              The screenshots below are not placeholders. They show the actual launch experience visitors should expect once they download Mali.
            </p>
          </div>

          <div className="screen-grid">
            {screenStories.map((screen) => (
              <article key={screen.id} className={`screen-card tone-${screen.tone}`}>
                <div className="screen-copy">
                  <p>{screen.id.replace('-', ' ')}</p>
                  <h3>{screen.title}</h3>
                  <span>{screen.body}</span>
                </div>
                <div className="screen-frame">
                  <img src={screen.image} alt={screen.title} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block intelligence-section" id="intelligence">
          <div className="intelligence-panel">
            <div className="intelligence-copy">
              <p className="eyebrow">Why Mali feels different</p>
              <h2>The product speaks like a guide, not a spreadsheet.</h2>
              <p>
                The interface has strong data bones, but the experience stays human. Mali translates economic movement into
                understandable guidance, which makes the app useful for fast daily decisions instead of just passive reading.
              </p>

              <ul className="intelligence-list">
                <li>Clean dark surfaces match the in-app experience and help the screenshots feel native to the page.</li>
                <li>AI guidance is positioned as support, not noise, so the value proposition is clearer.</li>
                <li>Navigation, cards and calls to action all now speak about a live product instead of a waitlist.</li>
              </ul>
            </div>

            <div className="intelligence-stack">
              <div className="stack-card stack-card-primary">
                <span>01</span>
                <strong>Understand what moved</strong>
                <p>Track weekly changes and read the signal quickly.</p>
              </div>
              <div className="stack-card">
                <span>02</span>
                <strong>See your impact</strong>
                <p>Connect macro shifts to transport, groceries, rent and household budgets.</p>
              </div>
              <div className="stack-card">
                <span>03</span>
                <strong>Act with clarity</strong>
                <p>Use Ask Mali and the feed to decide what matters now and what can wait.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block download-section" id="download">
          <div className="download-panel">
            <div className="download-copy">
              <p className="eyebrow">Where to find the app</p>
              <h2>Choose your platform.</h2>
              <p>
                Android users can download Mali right now. The current package is a ZIP file, so we show the install steps clearly before people start.
              </p>
            </div>

            <div className="download-actions">
              <AndroidButton className="button button-primary button-wide">Download Android ZIP</AndroidButton>
              <IosButton className="button button-ios button-wide">iOS Coming Soon</IosButton>
            </div>
          </div>

          <div className="platform-grid">
            <article className="platform-card platform-card-android">
              <div className="platform-copy">
                <p className="eyebrow">Android</p>
                <h3>Download, unzip, then install the APK.</h3>
                <span>
                  The Android package is hosted as a ZIP file. After downloading, unzip it on your phone and install the Mali APK from the extracted folder.
                </span>
              </div>

              <ol className="install-steps">
                {androidInstallSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <AndroidButton className="button button-primary button-wide">Get Mali for Android</AndroidButton>
            </article>

            <article className="platform-card platform-card-ios" id="ios-availability">
              <div className="platform-copy">
                <p className="eyebrow">iOS</p>
                <h3>iPhone version is coming soon.</h3>
                <span>
                  For iPhone users, we working hard to release the app for you.
                </span>
              </div>

              <div className="coming-soon-note">
                <strong>Coming soon</strong>
                <p>We will add the App Store link here as soon as the iOS release is ready.</p>
              </div>

              <IosButton className="button button-ios button-wide">iOS Coming Soon</IosButton>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>Mali</strong>
          <span>Economic intelligence for Kenya, now live.</span>
          <p>Designed and built by Peter Mirithu for a product that feels as sharp as the app itself.</p>
        </div>

        <div className="footer-maker-card">
          <p className="footer-label">Maker</p>
          <strong>Peter Mirithu</strong>
          <span>Software Engineer | AI/ML Engineer | Mobile App Developer</span>
        </div>

        <div className="footer-socials" aria-label="Social links">
          {socials.map((social) => (
            <a key={social.label} className="social-link" href={social.href} target="_blank" rel="noreferrer">
              <span className="social-icon" aria-hidden="true"><SocialIcon name={social.icon} /></span>
              <span>{social.label}</span>
            </a>
          ))}
        </div>

        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Mali. All rights reserved.</span>
          <span>Website by Peter Mirithu.</span>
        </div>
      </footer>
    </div>
  );
}
