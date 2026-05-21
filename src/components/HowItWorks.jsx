import React, { useEffect, useRef } from 'react';

const STEPS = [
  {
    num: '01',
    tag: 'DATA COLLECTION',
    title: 'Aggregated from primary Kenyan sources',
    desc: 'Mali ingests data directly from EPRA for fuel prices, KNBS for CPI, the Central Bank of Kenya for forex rates, ERC for electricity tariffs, and live Nairobi market feeds for food basket prices. No middlemen, no delays.',
    bullets: [
      'EPRA fuel price announcements',
      'KNBS monthly CPI releases',
      'CBK daily forex rates',
      'ERC electricity tariff schedules',
      'Nairobi wholesale food markets',
    ],
    color: '#0BBF6A',
  },
  {
    num: '02',
    tag: 'AI REASONING ENGINE',
    title: 'Cross-indicator causal chain analysis',
    desc: 'A fuel price increase doesn\'t just affect transport — it cascades into food logistics, electricity generation, and consumer purchasing power. Mali\'s AI models these second and third-order effects automatically.',
    bullets: [
      'Causal chain modelling',
      'Cross-indicator correlation',
      'Kenyan economic context layer',
      'Short-term price forecasting',
    ],
    color: '#F5B301',
  },
  {
    num: '03',
    tag: 'PERSONALISED IMPACT',
    title: 'Your KES exposure, not average estimates',
    desc: 'By mapping your spending profile against economic shifts, Mali calculates your exact monthly exposure. A Nairobi professional commuting daily is not impacted the same as a household in Mombasa or a maize farmer in Eldoret.',
    bullets: [
      'Custom household spending profile',
      'Business cost exposure modelling',
      'Regional price variation',
      'Month-on-month delta calculations',
    ],
    color: '#0BBF6A',
  },
  {
    num: '04',
    tag: 'ACURATE INTELLIGENCE',
    title: 'Clarity, not more noise',
    desc: 'Mali delivers specific, timely recommendations. Not "inflation is rising" — but "stock dry goods before June, lock in your electricity-heavy contracts before the Q3 tariff review, and consider the matatu pass over daily fare." That is economic intelligence.',
    bullets: [
      'Timing-specific recommendations',
      'Plain language explanations',
      'Ask Mali conversational AI',
      'Weekly economic digest emails',
    ],
    color: '#F5B301',
  },
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add('in'), delay);
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

function StepRow({ step, idx }) {
  const ref = useRef(null);
  useReveal(ref, idx * 80);
  const isEven = idx % 2 === 0;

  return (
    <div ref={ref} className="reveal" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center',
      padding: '56px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Number side */}
      <div style={{ order: isEven ? 0 : 1, display: 'flex', justifyContent: isEven ? 'flex-end' : 'flex-start' }}>
        <div style={{
          width: 180, height: 180,
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'rgba(255,255,255,0.02)',
          gap: 4,
        }}>
          {/* Corner accent */}
          <div style={{
            position: 'absolute', top: -1, left: -1, width: 40, height: 40,
            borderTop: `2px solid ${step.color}`,
            borderLeft: `2px solid ${step.color}`,
            borderRadius: '24px 0 0 0',
          }} />
          <div style={{
            position: 'absolute', bottom: -1, right: -1, width: 40, height: 40,
            borderBottom: `2px solid ${step.color}`,
            borderRight: `2px solid ${step.color}`,
            borderRadius: '0 0 24px 0',
          }} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 64,
            fontWeight: 900,
            color: `${step.color}15`,
            lineHeight: 1,
            position: 'absolute',
          }}>{step.num}</span>
          <span className="mono-label" style={{color: step.color, position: 'relative', zIndex: 1, fontSize: 11, textAlign:"center" }}>{step.tag}</span>
        </div>
      </div>

      {/* Content side */}
      <div style={{ order: isEven ? 1 : 0 }}>
        <div className="mono-label green" style={{ marginBottom: 12 }}>STEP {step.num}</div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-0.8px',
          marginBottom: 14,
          lineHeight: 1.25,
        }}>{step.title}</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>{step.desc}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {step.bullets.map(b => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: step.color, flexShrink: 0 }} />
              <span className="mono-label" style={{ fontSize: 9, color: 'rgba(168,179,199,0.5)' }}>{b}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default function HowItWorks() {
  const hRef = useRef(null);
  useReveal(hRef);

  return (
    <section id="how-it-works" style={{ padding: '120px 0', background: 'var(--bg-base)', position: 'relative' }}>
      <div className="container">
        <div ref={hRef} className="reveal" style={{ marginBottom: 72, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 48 }}>
          <div className="mono-label green" style={{ marginBottom: 14 }}>HOW MALI WORKS</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 50px)',
              fontWeight: 800,
              letterSpacing: '-2px',
              color: '#fff',
              lineHeight: 1.08,
            }}>
              From raw signal<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>to real decisions.</span>
            </h2>
            <p style={{ maxWidth: 340, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300 }}>
              A four-layer pipeline that turns Kenya's economic data into clarity you can act on today.
            </p>
          </div>
        </div>

        {STEPS.map((step, i) => (
          <StepRow key={step.num} step={step} idx={i} />
        ))}
      </div>
    </section>
  );
}
