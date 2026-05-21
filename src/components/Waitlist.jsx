import React, { useState, useRef, useEffect } from 'react';

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  useReveal(ref);

  const handleSubmit = async () => {
    if (!email.trim()) { setError('Email address is required.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email address.'); return; }
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 1100));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" style={{ padding: '120px 0', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(11,143,77,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={ref} className="reveal" style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40, marginBottom: 56, flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <div className="mono-label green" style={{ marginBottom: 14 }}>BETA LAUNCH · Q3 2026</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                fontWeight: 800,
                letterSpacing: '-2px',
                color: '#fff',
                lineHeight: 1.06,
                marginBottom: 16,
              }}>
                Be first to access<br />
                <span style={{ color: '#0BBF6A' }}>Mali Intelligence</span>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, maxWidth: 440 }}>
                Join Kenyan households and businesses getting ahead of economic shifts. Early access includes full premium features, free during beta.
              </p>
            </div>

            {/* Stats panel */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12,
              padding: '20px',
              minWidth: 180,
            }}>
              {[
                { v: '2,400+', l: 'ON WAITLIST' },
                { v: '47', l: 'COUNTIES' },
                { v: 'FREE', l: 'BETA ACCESS' },
              ].map((s, i) => (
                <div key={s.l} style={{ paddingBottom: i < 2 ? 14 : 0, marginBottom: i < 2 ? 14 : 0, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: '#0BBF6A' }}>{s.v}</div>
                  <div className="mono-label" style={{ fontSize: 8, marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form or success */}
          {!submitted ? (
            <div>
              {/* What you get */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, marginBottom: 32 }}>
                {[
                  { icon: '◉', text: 'Full dashboard access during beta' },
                  { icon: '✦', text: 'Unlimited Ask Mali queries' },
                  { icon: '◈', text: 'Weekly economic briefing emails' },
                  { icon: '↗', text: 'Early access to new indicators' },
                ].map(item => (
                  <div key={item.text} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 100,
                    padding: '6px',
                  }}>
                    <span style={{ color: '#0BBF6A', fontSize: 14, marginTop: 1 }}>{item.icon}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, fontWeight: 300 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Email input */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${error ? 'rgba(214,40,40,0.4)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 100,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '5px 5px 5px 18px',
                maxWidth: 520,
                marginBottom: 8,
                transition: 'border-color 0.2s',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-muted)' }}>@</span>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'var(--font-body)',
                    padding: '10px 0',
                  }}
                />
                <button className="btn-primary" onClick={handleSubmit} disabled={loading}
                  style={{ padding: '12px 22px', fontSize: 13, borderRadius: 100, opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Joining...' : 'Get Early Access'}
                </button>
              </div>

              {error && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#D62828', marginBottom: 8, letterSpacing: '0.5px' }}>{error}</p>}
              <p className="mono-label" style={{ fontSize: 9 }}>No spam · Unsubscribe anytime · Kenya 🇰🇪 only for now</p>
            </div>
          ) : (
            <div style={{
              background: 'rgba(11,143,77,0.08)',
              border: '1px solid rgba(11,191,106,0.2)',
              borderRadius: 14,
              padding: '36px 32px',
              maxWidth: 480,
              animation: 'fadeIn 0.5s ease',
            }}>
              <div style={{ width: 48, height: 48, background: 'rgba(11,191,106,0.12)', border: '1px solid rgba(11,191,106,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16 }}>✓</div>
              <div className="mono-label green" style={{ marginBottom: 10 }}>CONFIRMED · ACCESS RESERVED</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 10, letterSpacing: '-0.5px' }}>
                You're on the list.
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                We'll notify <strong style={{ color: '#0BBF6A' }}>{email}</strong> when Mali launches. Expect early access and free premium features throughout beta.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
