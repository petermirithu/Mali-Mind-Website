import React, { useEffect, useRef } from 'react';

const TICKER = [
  { label: 'FUEL (SUPER)', value: 'KES 188.40', change: '+3.6%', up: true },
  { label: 'DIESEL', value: 'KES 172.15', change: '+2.9%', up: true },
  { label: 'USD/KES', value: '129.45', change: '+1.2%', up: true },
  { label: 'FOOD BASKET', value: 'KES 6,245', change: '+2.7%', up: true },
  { label: 'INFLATION', value: '5.2% CPI', change: '+0.4%', up: true },
  { label: 'ELECTRICITY', value: 'KES 24.7/kWh', change: '+5.1%', up: true },
  { label: 'UNGA 2KG', value: 'KES 195', change: '-2.1%', up: false },
  { label: 'GBP/KES', value: '163.20', change: '+0.8%', up: true },
];

function PhoneScreen() {
  return (
    <div className="animate-float" style={{
      width: 248,
      borderRadius: 36,
      background: 'linear-gradient(160deg, #0D1828 0%, #070E18 100%)',
      border: '1.5px solid rgba(11,191,106,0.2)',
      boxShadow: '0 0 0 6px rgba(5,11,18,0.8), 0 0 0 7px rgba(11,191,106,0.08), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(11,143,77,0.12)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Notch */}
      <div style={{ height: 28, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 4 }}>
        <div style={{ width: 70, height: 18, background: '#040A11', borderRadius: '0 0 14px 14px' }} />
      </div>

      {/* Status bar */}
      <div style={{ padding: '0 18px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.5)' }}>9:41</span>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <span style={{ fontSize: 9 }}>▲▲▲</span>
          <span style={{ fontSize: 9 }}>WiFi</span>
          <span style={{ fontSize: 9 }}>🔋</span>
        </div>
      </div>

      <div style={{ padding: '0 14px 14px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff' }}>Hello, Alex 👋</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(168,179,199,0.4)', letterSpacing: '0.8px' }}>23 MAY 2025</div>
          </div>
          <div style={{ width: 26, height: 26, borderRadius: 8, border: '1px solid rgba(11,191,106,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🔔</div>
        </div>

        {/* Pulse card */}
        <div style={{
          background: 'rgba(11,143,77,0.1)',
          border: '1px solid rgba(11,191,106,0.2)',
          borderRadius: 12,
          padding: '10px 12px',
          marginBottom: 10,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'rgba(168,179,199,0.5)', letterSpacing: '1px', marginBottom: 3 }}>COST OF LIVING PULSE</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: '#0BBF6A', lineHeight: 1 }}>↑ 2.3%</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'rgba(168,179,199,0.4)', marginTop: 3 }}>HIGH IMPACT: FUEL · FOOD · TRANSPORT</div>
            </div>
            {/* Tiny chart */}
            <svg width="64" height="36" viewBox="0 0 64 36">
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0BBF6A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0BBF6A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline points="0,28 10,24 20,26 30,18 40,20 50,13 64,10" fill="none" stroke="#0BBF6A" strokeWidth="1.5" strokeLinecap="round" />
              <polygon points="0,28 10,24 20,26 30,18 40,20 50,13 64,10 64,36 0,36" fill="url(#hg)" />
            </svg>
          </div>
        </div>

        {/* Key indicators 2x2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 10 }}>
          {[
            { e: '⛽', l: 'Fuel', v: 'KES 188.40', c: '↑ 3.6%' },
            { e: '💵', l: 'USD/KES', v: '129.45', c: '↑ 1.2%' },
            { e: '🛒', l: 'Food Basket', v: 'KES 6,245', c: '↑ 2.7%' },
            { e: '📈', l: 'Inflation', v: '5.2%', c: '↑ 0.4%' },
          ].map(item => (
            <div key={item.l} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '7px 8px' }}>
              <div style={{ fontSize: 8, color: 'rgba(168,179,199,0.45)', marginBottom: 3 }}>{item.e} {item.l}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#fff' }}>{item.v}</div>
              <div style={{ fontSize: 8, color: '#0BBF6A', fontWeight: 600 }}>{item.c}</div>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        <div style={{ background: 'rgba(11,143,77,0.07)', border: '1px solid rgba(11,191,106,0.15)', borderRadius: 8, padding: '8px 10px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7.5, color: '#0BBF6A', marginBottom: 4, letterSpacing: '0.8px' }}>✦ AI INSIGHT</div>
          <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            Fuel prices rose this week, pushing up transport costs. Budget <strong style={{ color: 'rgba(255,255,255,0.85)' }}>KES 1,850 more</strong> this month.
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', padding: '8px 4px 12px' }}>
        {[
          { ic: '⊞', l: 'Home', a: true },
          { ic: '↑', l: 'Impact' },
          { ic: '✦', l: 'Ask Mali' },
          { ic: '📰', l: 'Feed' },
          { ic: '◉', l: 'Profile' },
        ].map(t => (
          <div key={t.l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <span style={{ fontSize: 12, color: t.a ? '#0BBF6A' : 'rgba(255,255,255,0.2)' }}>{t.ic}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 6.5, color: t.a ? '#0BBF6A' : 'rgba(255,255,255,0.2)', letterSpacing: '0.5px' }}>{t.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-base)' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '60%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(11,143,77,0.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '0%', right: '-10%',
          width: '50%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(245,179,1,0.06) 0%, transparent 70%)',
        }} />
        {/* Kenya map dots silhouette */}
        <svg style={{ position: 'absolute', right: '0%', top: '10%', opacity: 0.04, width: '55%' }} viewBox="0 0 400 400">
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="#0BBF6A" />
          </pattern>
          <ellipse cx="220" cy="200" rx="160" ry="180" fill="url(#dots)" />
        </svg>
      </div>

      {/* Live Ticker */}
      <div style={{
        marginTop: 64,
        background: 'rgba(11, 18, 32, 0.8)',
        borderTop: '1px solid rgba(11,191,106,0.1)',
        borderBottom: '1px solid rgba(11,191,106,0.1)',
        padding: '8px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, rgba(11,18,32,0.9), transparent)', zIndex: 10 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(270deg, rgba(11,18,32,0.9), transparent)', zIndex: 10 }} />

        <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 35s linear infinite', gap: 0 }}>
          {[...TICKER, ...TICKER].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 24px', borderRight: '1px solid rgba(11,191,106,0.08)' }}>
              <span className="live-dot" style={{ width: 5, height: 5 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '1px' }}>{item.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: '#fff' }}>{item.value}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                color: item.up ? '#0BBF6A' : '#D62828',
              }}>{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 80, padding: '60px 40px', width: '100%' }}>

          {/* Left */}
          <div style={{ flex: 1, maxWidth: 580 }}>
            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(11,191,106,0.2)',
              background: 'rgba(11,191,106,0.05)',
              borderRadius: 100,
              padding: '5px 12px',
              marginBottom: 32,
            }}>
              <span className="live-dot" />
              <span className="mono-label green">Live Economic Signal · Kenya</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-2.5px',
              marginBottom: 24,
              color: '#fff',
            }}>
              Understand what<br />
              <span style={{
                background: 'linear-gradient(90deg, #0BBF6A, #0B8F4D, #0BBF6A)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 4s linear infinite',
              }}>
                rising prices
              </span>
              <br />
              mean for you.
            </h1>

            <p style={{
              fontSize: 17,
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 460,
              fontWeight: 300,
            }}>
              Mali tracks fuel, food, forex, taxes & electricity in real time — then uses AI to explain exactly how these changes impact your wallet, business, and daily decisions.
            </p>

            {/* Data stats row */}
            <div style={{ display: 'flex', gap: 0, marginBottom: 40, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 100, overflow: 'hidden' }}>
              {[
                { v: '25+', l: 'Live Indicators' },
                { v: '47', l: 'Counties' },
                { v: 'Daily', l: 'AI Reports' },
              ].map((s, i) => (
                <div key={s.l} style={{
                  flex: 1, padding: '14px 16px', textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: '#0BBF6A' }}>{s.v}</div>
                  <div className="mono-label" style={{ marginTop: 3, fontSize: 9 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Early Access →
              </button>
              <button className="btn-ghost" style={{ fontSize: 15, padding: '13px 24px' }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                See Features
              </button>
            </div>

            <p className="mono-label" style={{ marginTop: 16, fontSize: 9 }}>
              Free during beta · No card required · Built in Nairobi 🇰🇪
            </p>
          </div>

          {/* Right: Phone */}
          <div className="hero-phone" style={{ flex: '0 0 auto', position: 'relative' }}>
            {/* Glow halo */}
            <div style={{
              position: 'absolute', inset: -40,
              background: 'radial-gradient(ellipse, rgba(11,143,77,0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }} />
            <PhoneScreen />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .hero-phone { display: none; } }
      `}</style>
    </section>
  );
}
