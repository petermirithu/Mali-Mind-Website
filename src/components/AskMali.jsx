import React, { useState, useRef, useEffect } from 'react';

const QA_MAP = [
  { keys: ['fuel', 'petrol', 'diesel', 'prices increase', 'rise'],
    a: `Based on current signals, fuel prices are likely to remain elevated over the next 3–4 weeks.\n\nGlobal crude (Brent) is trading above $85/barrel. The KES has weakened 1.2% against the USD this week. EPRA\'s next price review is due in 11 days — current input factors suggest a KES 3–6 upward adjustment is probable.\n\n↗ Recommended action: If you run a fleet or fuel-heavy operation, consider filling reserves before mid-month.` },
  { keys: ['inflation', 'cpi', 'prices rising', 'why'],
    a: `Kenya\'s CPI is currently at 5.2%, up 0.4% from last month.\n\nThe primary drivers this month are:\n• Fuel prices (+3.6%) pushing up transport and logistics costs\n• Food basket (+2.7%) driven by unga and milk\n• Housing costs (+4.2%) in Nairobi and major towns\n\nThe KES weakening against the dollar adds ~1.2% to all imported goods. Inflation is expected to remain in the 4.8–5.5% range through Q3 based on current trends.` },
  { keys: ['rent', 'housing', 'landlord'],
    a: `With headline inflation at 5.2%, rental inflation in Nairobi typically lags by 3–6 months before landlords revise upward.\n\nCurrent data shows average Nairobi rent has risen 4.2% year-on-year. On a KES 28,000/month apartment, that\'s approximately KES 1,176 more at renewal.\n\n↗ Strategy: If your lease is up for renewal in the next 60 days, try locking in a 12–18 month term now before landlords factor in Q3 inflation adjustments.` },
  { keys: ['save', 'saving', 'budget', 'cut costs', 'cheaper'],
    a: `Three specific actions for this month:\n\n1. Stock dry goods now — unga is down 2.1% this week but typically rises in June as planting season affects supply. KES 500 stocked today saves KES 800–1,200 in 6 weeks.\n\n2. Matatu pass vs daily fare — daily fares have risen 14.3% but monthly passes from major saccos have risen ~6%. If you commute 20+ days, the pass saves KES 600–900/month.\n\n3. Delay large appliance purchases — the ERC tariff review expected next month may reduce electricity costs 3–5%, which improves the economics of energy-efficient appliances.` },
  { keys: ['matatu', 'fare', 'transport', 'commute'],
    a: `Matatu fares have risen 14.3% this month, driven by:\n\n• Diesel prices up 2.9% (fuel = ~38% of matatu operating cost)\n• NTSA levy increases effective this quarter\n• Insurance costs up ~8% industry-wide\n\nExpect fares to stay elevated for 4–6 weeks unless diesel reverses. The CBD–Westlands route is now KES 80, up from KES 70.\n\n↗ If you commute daily, ask your sacco about monthly passes — they typically lag single-trip increases by 6–8 weeks.` },
];

const SUGGESTIONS = [
  'Will fuel prices increase next month?',
  'Why are matatu fares going up?',
  'How do I save money this month?',
  'How does inflation affect my rent?',
];

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px 12px 12px 3px', width: 'fit-content' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 5, height: 5, borderRadius: '50%', background: '#0BBF6A',
          animation: `pulseGreen 1.2s ease-in-out infinite ${i * 0.2}s`,
        }} />
      ))}
    </div>
  );
}

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

export default function AskMali() {
  const [msgs, setMsgs] = useState([
    { role: 'mali', text: "Hi, I'm Mali 👋\n\nI'm your AI economic assistant for Kenya. Ask me anything about prices, trends, or how economic changes affect your household or business." }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);
  const hRef = useRef(null);
  useReveal(hRef);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q) return;
    setInput('');
    setMsgs(m => [...m, { role: 'user', text: q }]);
    setTyping(true);
    await new Promise(r => setTimeout(r, 900 + Math.random() * 700));
    setTyping(false);
    const ql = q.toLowerCase();
    const match = QA_MAP.find(x => x.keys.some(k => ql.includes(k)));
    const answer = match?.a || `Based on current Kenya economic data, I don't have a specific signal on that query yet. Mali tracks 25+ indicators across fuel, forex, food, and macro data.\n\nFor the most relevant insight, try asking about fuel prices, matatu fares, inflation, or how to reduce your monthly costs.`;
    setMsgs(m => [...m, { role: 'mali', text: answer }]);
  };

  return (
    <section id="ask-mali" style={{padding: '120px 0', background: 'var(--bg-base)', position: 'relative' }}>
      <div className="line-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={hRef} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>

          {/* Left info */}
          <div style={{ paddingTop: 8 }}>
            <div className="mono-label green" style={{ marginBottom: 16 }}>AI ECONOMIC ASSISTANT</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 50px)',
              fontWeight: 800,
              letterSpacing: '-2px',
              color: '#fff',
              lineHeight: 1.08,
              marginBottom: 20,
            }}>
              Ask anything.<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>Get data-backed answers.</span>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
              Mali's AI engine doesn't just retrieve information — it reasons about Kenya's economic cause and effect. Ask in plain English, receive answers grounded in live data from EPRA, KNBS, CBK, and more.
            </p>

            {/* Capabilities list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid rgba(255,255,255,0.07)', borderRadius: 25, overflow: 'hidden', marginBottom: 36 }}>
              {[
                { icon: '◉', text: 'Explains why prices are changing', sub: 'Causal chain analysis' },
                { icon: '↗', text: 'Forecasts short-term movements', sub: 'AI-powered predictions' },
                { icon: '⊞', text: 'Personalised budgeting guidance', sub: 'Based on your profile' },
                { icon: '◈', text: 'Contextualises economic news', sub: 'Real-time interpretation' },
              ].map((item, i) => (
                <div key={item.text} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 16px',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  background: 'rgba(255,255,255,0.02)',
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(11,191,106,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0BBF6A', fontSize: 14, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{item.text}</div>
                    <div className="mono-label" style={{ marginTop: 2, fontSize: 8.5 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mono-label" style={{ fontSize: 9, lineHeight: 1.6 }}>
              Mali uses live data from official Kenyan sources.<br />
              Verify important financial decisions independently.
            </div>
          </div>

          {/* Right chat */}
          <div style={{
            background: 'rgba(11,18,28,0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 25,
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
          }}>
            {/* Chat header */}
            <div style={{
              padding: '14px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <img src="/logo.png" alt="Mali" style={{ width: 28, height: 28, borderRadius:100, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff' }}>Ask Mali</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 1 }}>
                  <span className="live-dot" style={{ width: 5, height: 5 }} />
                  <span className="mono-label green" style={{ fontSize: 8.5 }}>ONLINE · REAL-TIME ECONOMIC SIGNALS</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ height: 320, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {msgs.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '85%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                    background: msg.role === 'user' ? 'var(--green)' : 'rgba(255,255,255,0.05)',
                    border: msg.role === 'mali' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(11,191,106,0.3)',
                    fontSize: 13,
                    color: '#fff',
                    lineHeight: 1.65,
                    whiteSpace: 'pre-line',
                    fontWeight: 300,
                  }}>{msg.text}</div>
                </div>
              ))}
              {typing && <TypingIndicator />}
              <div ref={endRef} />
            </div>

            {/* Suggestions */}
            <div style={{ padding: '0 12px 10px', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {SUGGESTIONS.slice(0, 2).map(s => (
                <button key={s} onClick={() => send(s)} style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 100,
                  padding: '5px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: '0.5px',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.target.style.borderColor = 'rgba(11,191,106,0.3)'; e.target.style.color = '#0BBF6A'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = 'var(--text-muted)'; }}
                >{s}</button>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: '10px 14px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', gap: 8, alignItems: 'center',
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
                placeholder="Ask about prices, trends, forecasts..."
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 100,
                  padding: '9px 14px',
                  color: '#fff',
                  fontSize: 13,
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(11,191,106,0.3)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
              <button className="btn-primary" style={{ padding: '9px 12px', fontSize: 13, borderRadius: 100, minWidth: 'unset' }} onClick={() => send()}>→</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { #ask-mali .container > div { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
