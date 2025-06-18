// File: src/App.tsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import HomeSection from './components/HomeSection.tsx';
import TechnologyStack from './components/TechnologyStack.tsx';
import Features from './components/Features.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import Services from './components/Services.tsx';
import LogoLoader from './components/LogoLoader.tsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // 1.8s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider children={
      <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-200">
        <LogoLoader show={loading} />
        <div className={loading ? 'pointer-events-none select-none opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <Header />
          <main className="relative">
            <HomeSection />
            <TechnologyStack />
            <Services />
            <Features />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    } />
  );
}

export default App;