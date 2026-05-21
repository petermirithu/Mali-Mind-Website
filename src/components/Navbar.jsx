import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Indicators', href: '#indicators' },
    { label: 'Ask Mali', href: '#ask-mali' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled
        ? 'rgba(10, 15, 13, 0.85)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(11,143,77,0.15)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="Mali" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.3px' }}>
              MAL<span style={{ color: '#F5B301' }}>i</span>
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'rgba(168,179,199,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Economic Intelligence</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.3px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#0BBF6A'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >{link.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            className="btn-ghost"
            style={{ padding: '9px 20px', fontSize: 13, display: window.innerWidth < 640 ? 'none' : 'block' }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Sign In
          </button>
          <button
            className="btn-primary"
            style={{ padding: '9px 22px', fontSize: 13 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
