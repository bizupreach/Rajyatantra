
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DynamicBackground from './DynamicBackground';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Practice Areas', path: '/practice-areas' },
  { name: 'Approach', path: '/approach' },
  { name: 'Sectors', path: '/sectors' },
  { name: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [location]);

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <DynamicBackground />
      
      {/* Header */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-[#0d1b2a]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[110] bg-white">
          <Link to="/" className="flex flex-col group">
            <span className="serif text-2xl font-bold tracking-widest text-[#0d1b2a] uppercase group-hover:text-[#B38B3F] transition-colors">Rajyatantra</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#415a77] font-semibold -mt-1 group-hover:text-[#B38B3F]/70 transition-colors">Policy & Governance Consulting</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all ${
                  location.pathname === link.path 
                    ? 'text-[#0d1b2a] border-b-2 border-[#B38B3F] pb-1' 
                    : 'text-slate-500 hover:text-[#0d1b2a]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#0d1b2a] p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay - White Background Version */}
        <div 
          className={`fixed inset-0 z-[90] bg-white transition-all duration-300 ease-in-out transform md:hidden flex flex-col pt-20 ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex-grow flex flex-col px-6 py-10 overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-6 serif text-3xl font-bold tracking-tight border-b border-slate-100 transition-all ${
                    location.pathname === link.path 
                      ? 'text-[#B38B3F] pl-4 border-l-4 border-l-[#B38B3F]' 
                      : 'text-[#0d1b2a] hover:text-[#B38B3F] hover:pl-4'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${idx * 40}ms` : '0ms'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto py-12 text-center">
               <div className="h-px w-16 bg-[#B38B3F]/30 mx-auto mb-6"></div>
               <p className="text-[10px] uppercase tracking-[0.4em] text-[#778da9] font-bold">Administrative Advisory</p>
               <p className="text-[9px] uppercase tracking-[0.2em] text-[#415a77] mt-2">New Delhi, India</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0d1b2a] border-t border-[#1b263b] pt-24 pb-12 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 reveal">
            <div className="md:col-span-1">
              <div className="flex flex-col mb-8">
                <span className="serif text-2xl font-bold tracking-widest text-[#B38B3F] uppercase gold-shimmer">Rajyatantra</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#778da9] font-bold">Policy & Governance Consulting</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Strengthening public systems through evidence based advisory, institutional reform, and data led insights.
              </p>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="text-xs uppercase tracking-widest text-[#B38B3F] font-bold mb-8">Engagement</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {navLinks.slice(0, 4).map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="text-xs uppercase tracking-widest text-[#B38B3F] font-bold mb-8">Insights</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {navLinks.slice(4).map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="text-xs uppercase tracking-widest text-[#B38B3F] font-bold mb-8">Inquiry</h4>
              <p className="text-sm text-slate-400 mb-6">
                Institutional queries may be directed to our administrative desk for confidential processing.
              </p>
              <Link to="/contact" className="text-white font-bold text-sm border-b border-[#B38B3F] pb-1 hover:text-[#B38B3F] transition-all">
                Contact Office
              </Link>
            </div>
          </div>
          
          <div className="pt-12 border-t border-[#1b263b] flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
            <p>© 2025 Rajyatantra Consulting Private Limited. Non Partisan Advisory.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <span className="cursor-pointer hover:text-white transition-colors">Confidentiality Policy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Public Disclosures</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
