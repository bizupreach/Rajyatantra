
import React from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS, SECTORS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2a] text-white">
        {/* Graphical Animation Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B38B3F] opacity-10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#415a77] opacity-10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B3F 1px, transparent 0)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 reveal">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-[6.2rem] font-bold mb-12 leading-[1.05] serif tracking-tight">
              Strengthening the <br/>
              <span className="text-[#D4B67E] italic underline decoration-[#B38B3F] decoration-4 underline-offset-8">Foundations</span> of <br/>
              Public Governance.
            </h1>
            <p className="text-xl md:text-2xl text-[#a2abb5] mb-16 leading-relaxed font-light max-w-2xl border-l-4 border-[#B38B3F]/60 pl-10">
              Rajyatantra is India leading non partisan policy consulting firm. We partner with the state to build resilient evidence driven delivery systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mb-20">
              <Link 
                to="/practice-areas" 
                className="bg-gold-statutory text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all text-center shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Our Practice Areas</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </Link>
              <Link 
                to="/contact" 
                className="border border-[#B38B3F]/40 text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#B38B3F]/10 transition-all text-center backdrop-blur-sm"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-48 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="reveal">
              <h2 className="text-xs uppercase tracking-[0.4em] text-[#415a77] font-bold mb-8 underline decoration-[#B38B3F] decoration-2 underline-offset-8">The Rajyatantra Philosophy</h2>
              <h3 className="text-4xl md:text-5xl serif font-bold text-[#0d1b2a] mb-10 leading-tight">Systemic Clarity. <br/>Institutional Integrity.</h3>
              <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
                We believe that effective governance is not born of isolated decisions but of robust institutions and evidence led systems. Rajyatantra operates at the nexus of data research and administrative reality.
              </p>
              <div className="mb-6">
                <Link to="/about" className="text-[#1b263b] font-bold uppercase tracking-widest text-sm border-b-2 border-[#B38B3F] pb-2 hover:text-[#B38B3F] transition-all">
                  Our Governance Principles
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 reveal" style={{ transitionDelay: '200ms' }}>
              {[
                { label: 'Policy Sectors', val: '12+' },
                { label: 'Advisory Model', val: 'Neutral' },
                { label: 'Driven Base', val: 'Data' },
                { label: 'Interest First', val: 'Public' }
              ].map((stat, i) => (
                <div key={i} className="p-12 bg-[#f0f4f8] border border-[#B38B3F]/10 shadow-sm rounded-sm hover:shadow-xl hover:translate-y-[-4px] hover:border-[#B38B3F]/40 transition-all duration-500 group relative overflow-hidden">
                  {/* Replaced 'Watches' with subtle institutional node graphic */}
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0d1b2a]">
                      <circle cx="80" cy="20" r="10" />
                      <line x1="80" y1="30" x2="80" y2="100" />
                      <line x1="80" y1="30" x2="0" y2="30" />
                    </svg>
                  </div>
                  <div className="text-[#1b263b] text-5xl font-bold serif mb-4 group-hover:gold-shimmer">{stat.val}</div>
                  <div className="text-xs uppercase tracking-widest text-[#415a77] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-64 bg-[#0d1b2a] text-white text-center relative overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 opacity-10" style={{ 
             backgroundImage: 'linear-gradient(30deg, #B38B3F 12%, transparent 12.5%, transparent 87%, #B38B3F 87.5%, #B38B3F), linear-gradient(150deg, #B38B3F 12%, transparent 12.5%, transparent 87%, #B38B3F 87.5%, #B38B3F), linear-gradient(30deg, #B38B3F 12%, transparent 12.5%, transparent 87%, #B38B3F 87.5%, #B38B3F), linear-gradient(150deg, #B38B3F 12%, transparent 12.5%, transparent 87%, #B38B3F 87.5%, #B38B3F), linear-gradient(60deg, #B38B3F 25%, transparent 25.5%, transparent 75%, #B38B3F 75.5%, #B38B3F), linear-gradient(60deg, #B38B3F 25%, transparent 25.5%, transparent 75%, #B38B3F 75.5%, #B38B3F)',
             backgroundSize: '40px 70px'
           }}></div>
           <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a] via-[#0d1b2a]/80 to-[#0d1b2a]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 reveal">
          <h3 className="text-5xl md:text-7xl serif font-bold mb-12 leading-tight">Engage with Rajyatantra</h3>
          <p className="text-2xl text-[#a2abb5] mb-20 leading-relaxed font-light max-w-3xl mx-auto">
            Our engagement process is discrete professional and outcome oriented. Initiating a consultation starts with understanding your specific institutional requirement.
          </p>
          <div className="mb-16">
            <Link to="/contact" className="inline-block bg-gold-statutory text-white px-20 py-8 text-xs font-bold uppercase tracking-[0.4em] hover:brightness-110 transition-all shadow-2xl rounded-sm">
              Initiate Consultation
            </Link>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B38B3F] font-bold">Confidentiality Assured</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
