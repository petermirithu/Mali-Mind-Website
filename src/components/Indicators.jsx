import React, { useState, useEffect, useRef } from 'react';

const ALL_INDICATORS = [
  { cat: 'Energy',    icon: '⛽', label: 'Petrol (Super)',      value: 'KES 188.40', change: '+3.6%', up: true,  source: 'EPRA' },
  { cat: 'Energy',    icon: '🛢', label: 'Diesel',              value: 'KES 172.15', change: '+2.9%', up: true,  source: 'EPRA' },
  { cat: 'Energy',    icon: '⚡', label: 'Electricity (kWh)',   value: 'KES 24.7',   change: '+5.1%', up: true,  source: 'ERC' },
  { cat: 'Energy',    icon: '🔥', label: 'Kerosene',            value: 'KES 148.60', change: '+1.8%', up: true,  source: 'EPRA' },
  { cat: 'Forex',     icon: '💵', label: 'USD / KES',           value: '129.45',     change: '+1.2%', up: true,  source: 'CBK' },
  { cat: 'Forex',     icon: '💷', label: 'GBP / KES',           value: '163.20',     change: '+0.8%', up: true,  source: 'CBK' },
  { cat: 'Forex',     icon: '💶', label: 'EUR / KES',           value: '140.55',     change: '+0.5%', up: true,  source: 'CBK' },
  { cat: 'Food',      icon: '🛒', label: 'Food Basket',         value: 'KES 6,245',  change: '+2.7%', up: true,  source: 'KNBS' },
  { cat: 'Food',      icon: '🌽', label: 'Unga (2kg)',          value: 'KES 195',    change: '-2.1%', up: false, source: 'Market' },
  { cat: 'Food',      icon: '🍚', label: 'Rice (1kg)',          value: 'KES 185',    change: '+1.6%', up: true,  source: 'Market' },
  { cat: 'Food',      icon: '🥛', label: 'Fresh Milk (500ml)', value: 'KES 65',     change: '+3.2%', up: true,  source: 'Market' },
  { cat: 'Macro',     icon: '📊', label: 'Inflation (CPI)',     value: '5.2%',       change: '+0.4%', up: true,  source: 'KNBS' },
  { cat: 'Macro',     icon: '🏦', label: 'CBR Rate',            value: '13.0%',      change: '0.0%',  up: null,  source: 'CBK' },      
];

const CATS = ['All', 'Energy', 'Forex', 'Food', 'Macro'];

function sparkline(index, up) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const base = 40 + Math.sin(i * 1.1 + index * 0.7) * 12;
    const trend = up === true ? i * 2 : up === false ? -i * 2 : Math.sin(i * 0.5) * 5;
    return Math.max(5, Math.min(65, base + trend));
  });
  const svgPts = pts.map((y, i) => `${(i / 9) * 80},${70 - y}`).join(' ');
  return { pts, svgPts, area: `${svgPts} 80,70 0,70` };
}

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), delay); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

function Card({ ind, idx }) {
  const ref = useRef(null);
  useReveal(ref, idx * 40);
  const { svgPts, area } = sparkline(idx, ind.up);
  const cc = ind.up === true ? '#0BBF6A' : ind.up === false ? '#D62828' : '#F5B301';

  return (
    <div ref={ref} className="reveal" style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 30,
      padding: '16px',
      transition: 'all 0.2s ease',
      cursor: 'default',
      overflow: 'hidden',
      position: 'relative',
    }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = `${cc}25`; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
    >
      {/* Source tag */}
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <span className="mono-label" style={{ fontSize: 7.5, background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 4 }}>{ind.source}</span>
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 16 }}>{ind.icon}</span>
        <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{ind.label}</span>
      </div>

      <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
        {ind.value}
      </div>

      <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: cc }}>
          {ind.up === true ? '↑' : ind.up === false ? '↓' : '→'} {ind.change}
        </span>
        <span className="mono-label" style={{ fontSize: 8 }}>vs last week</span>
      </div>

      {/* Sparkline */}
      <svg width="100%" height="28" viewBox="0 0 80 70" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`sg${idx}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={cc} stopOpacity="0.25"/>
            <stop offset="100%" stopColor={cc} stopOpacity="0"/>
          </linearGradient>
        </defs>
        <polygon points={area} fill={`url(#sg${idx})`}/>
        <polyline points={svgPts} fill="none" stroke={cc} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function Indicators() {
  const [cat, setCat] = useState('All');
  const hRef = useRef(null);
  useReveal(hRef);

  const filtered = cat === 'All' ? ALL_INDICATORS : ALL_INDICATORS.filter(i => i.cat === cat);

  return (
    <section id="indicators" style={{ padding: '120px 0', background: 'var(--bg-2)', position: 'relative' }}>
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={hRef} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="mono-label green" style={{ marginBottom: 12 }}>LIVE ECONOMIC SIGNALS</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              color: '#fff',
              lineHeight: 1.1,
            }}>
              25+ indicators.<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>One dashboard.</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end', marginBottom: 4 }}>
              <span className="live-dot" />
              <span className="mono-label green">UPDATED DAILY</span>
            </div>
            <div className="mono-label" style={{ fontSize: 9 }}>Sources: EPRA · KNBS · CBK · ERC · Market feeds</div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 28, flexWrap: 'wrap' }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: cat === c ? '1px solid rgba(11,191,106,0.4)' : '1px solid rgba(255,255,255,0.08)',
              background: cat === c ? 'rgba(11,191,106,0.1)' : 'transparent',
              color: cat === c ? '#0BBF6A' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>{c}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          {filtered.map((ind, i) => <Card key={ind.label} ind={ind} idx={i} />)}
        </div>

        {/* Bottom CTA bar */}
        <div style={{
          marginTop: 48,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(11,191,106,0.15)',
          borderRadius: 12,
          padding: '20px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
        }}>
          <div>
            <div className="mono-label green" style={{ marginBottom: 6 }}>CUSTOM ALERT THRESHOLDS</div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 300 }}>
              Get notified before fuel crosses KES 200 or the dollar breaks 130.
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '10px 22px', fontSize: 13 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
            Set Up Alerts →
          </button>
        </div>
      </div>
    </section>
  );
}
