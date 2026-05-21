import React from 'react';

export default function Footer() {
  const cols = [
    {
      title: 'Product', links: [
        { label: 'Features', url: "#features" },
        { label: 'How It Works', url: "#how-it-works" },
        { label: 'Live Indicators', url: "#indicators" },
        { label: 'Ask Mali', url: "#ask-mali" },
        { label: 'Early Access', url: "#waitlist" }
      ]
    },
    {
      title: 'Data Sources', links: [
        { label: 'EPRA (Fuel)', url: "https://www.epra.go.ke/pump-prices/" },
        { label: 'KNBS (CPI)', url: "https://www.knbs.or.ke/" },
        { label: 'Open Exchange Rates (Forex)', url: "https://openexchangerates.org/" },
        { label: 'ERC (Energy and Petroleum Regulatory Authority)', url: "https://www.epra.go.ke" },
        { label: 'QuickMart', url: "https://www.quickmart.co.ke" }]
    }
  ];

  return (
    <footer style={{ background: 'var(--bg-base)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/logo.png" alt="Mali" style={{ width: 30, height: 30, objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: '#fff', letterSpacing: '-0.3px' }}>
                MAL<span style={{ color: '#F5B301' }}>i</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 240, marginBottom: 20, fontWeight: 300 }}>
              Economic intelligence for Kenya. Track fuel, forex, food prices and AI-powered insights in one platform.
            </p>
            <div className="mono-label" style={{ fontSize: 9, lineHeight: 1.8 }}>
              Built in Nairobi 🇰🇪<br />
              Data from official Kenyan sources
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 className="mono-label" style={{ marginBottom: 18, color: 'rgba(168,179,199,0.6)', fontSize: 9 }}>{col.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.links.map(link => (
                  <a key={link.label} href={link.url} style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 300 }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >{link.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <div className="mono-label" style={{ fontSize: 9 }}>
            © {new Date().getFullYear()} Mali. All rights reserved. Data sourced from public Kenyan government agencies.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { footer .container > div:first-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
