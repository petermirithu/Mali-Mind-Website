import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Indicators from './components/Indicators';
import AskMali from './components/AskMali';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Indicators />
        <AskMali />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
