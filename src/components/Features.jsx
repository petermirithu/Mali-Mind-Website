import React, { useEffect, useRef } from 'react';

const FEATURES = [
  {
    tag: 'REAL-TIME DATA',
    icon: '◉',
    title: 'Economic Pulse Dashboard',
    desc: 'Track 25+ live indicators — fuel prices from EPRA, CPI from KNBS, forex from CBK, electricity tariffs from ERC — updated daily and visualised in one clean dashboard.',
    color: '#0BBF6A',
    items: ['Fuel · Food · Forex · Electricity', 'EPRA · KNBS · CBK · ERC sources', 'Historical trends & 30-day charts'],
  },
  {
    tag: 'AI REASONING',
    icon: '✦',
    title: 'Ask Mali AI Assistant',
    desc: 'Converse directly with Mali\'s economic intelligence engine. Ask "Will fuel prices rise next month?" and get data-backed answers explained in plain language.',
    color: '#F5B301',
    items: ['Causal chain reasoning', 'Short-term price forecasting', 'Context-aware responses'],
  },
  {
    tag: 'PERSONALISED',
    icon: '⊞',
    title: 'Personal Impact Calculator',
    desc: 'Enter your monthly transport, food, housing and utilities. Mali calculates your exact KES exposure to current economic shifts — not average estimates.',
    color: '#0B8F4D',
    items: ['Custom spending profile', 'Month-on-month comparison', 'Category-level breakdown'],
  },
  {
    tag: 'INTELLIGENCE FEED',
    icon: '▣',
    title: 'Contextual News Feed',
    desc: 'Economic news translated into household impact. Not "fuel prices rose 3.6%" — but "your Nairobi commute will cost KES 1,200 more this month."',
    color: '#0BBF6A',
    items: ['AI-translated impact headlines', 'Business & household framing', 'Daily economic briefings'],
  },
  {
    tag: 'ANALYTICS',
    icon: '↗',
    title: 'Trend Charts & Forecasts',
    desc: 'Interactive historical charts for every tracked indicator. View 30-day, 90-day, and annual trends. AI-generated short-term forecasts for planning ahead.',
    color: '#F5B301',
    items: ['Interactive time-series charts', 'AI price forecasts', 'Cross-indicator correlation'],
  },
  {
    tag: 'PROACTIVE ALERTS',
    icon: '◈',
    title: 'Smart Threshold Alerts',
    desc: 'Set your own thresholds — get notified before fuel crosses KES 200, or the dollar breaks 130. Know before your competitors, tenants, or suppliers do.',
    color: '#0B8F4D',
    items: ['Custom price thresholds', 'Push & email alerts', 'Weekly economic digest'],
  },
];

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

function FeatureCard({ f, delay }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className={`reveal d${delay}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 30,
        padding: '28px 24px',
        transition: 'all 0.25s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.borderColor = `${f.color}30`;
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${f.color}0A`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 24, right: 24, height: '1px', background: `linear-gradient(90deg, transparent, ${f.color}40, transparent)` }} />

      {/* Tag */}
      <div className="mono-label" style={{ color: f.color, opacity: 0.9, marginBottom: 16 }}>{f.tag}</div>

      {/* Icon + title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 40, height: 40,
          background: `${f.color}10`,
          border: `1px solid ${f.color}20`,
          borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, color: f.color,
          fontFamily: 'var(--font-mono)',
        }}>{f.icon}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#fff', letterSpacing: '-0.3px', lineHeight: 1.3 }}>{f.title}</h3>
      </div>

      <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 20, fontWeight: 300 }}>{f.desc}</p>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {f.items.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: f.color, opacity: 0.7, flexShrink: 0 }} />
            <span className="mono-label" style={{ fontSize: 9, color: 'rgba(168,179,199,0.55)' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  useReveal(titleRef);

  return (
    <section id="features" style={{ padding: '120px 0', position: 'relative', background: 'var(--bg-2)' }}>
      <div className="line-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={titleRef} className="reveal" style={{ marginBottom: 64 }}>
          <div className="mono-label green" style={{ marginBottom: 16 }}>PLATFORM CAPABILITIES</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-2px',
              color: '#fff',
              lineHeight: 1.08,
            }}>
              Everything you need to<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>navigate Kenya's economy</span>
            </h2>
            <p style={{ maxWidth: 320, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300 }}>
              Mali connects live market data, government reports, and AI reasoning into one intelligence platform.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} f={f} delay={Math.min(i + 1, 6)} />
          ))}
        </div>
      </div>
    </section>
  );
}
