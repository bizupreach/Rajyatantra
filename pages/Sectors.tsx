
import React from 'react';
import { SECTORS } from '../constants.tsx';

const Sectors: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-40 bg-white border-b border-[#1b263b]/10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-xs uppercase tracking-[0.4em] text-[#415a77] font-bold mb-8 underline decoration-[#B38B3F] underline-offset-8">Sectors</h1>
          <h2 className="text-4xl md:text-6xl serif font-bold text-[#0d1b2a] leading-tight max-w-5xl mb-12">
            Thematic Depth across the <br/>
            <span className="underline-statutory">Governance Ecosystem.</span>
          </h2>
          <p className="text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            We operate across critical sectors that define the state engagement with its citizens providing niche governance insights for each domain.
          </p>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {SECTORS.map((sector, idx) => (
              <div key={sector.id} className="group reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="w-16 h-[3px] bg-[#B38B3F] mb-8 group-hover:w-full transition-all duration-700 shadow-sm"></div>
                <h3 className="text-2xl serif font-bold text-[#0d1b2a] mb-6 group-hover:text-[#415a77] transition-colors">{sector.name}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-light">
                  {sector.description.replace(/-/g, ' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-48 bg-[#0d1b2a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center reveal">
          <div>
             <h3 className="text-4xl serif font-bold mb-10 leading-tight text-[#f0f4f8]">Inter Sectoral <br/>Coordination Advisory</h3>
             <div className="h-1 w-20 bg-[#B38B3F] mb-10 shadow-[0_0_10px_rgba(179,139,63,0.5)]"></div>
             <p className="text-xl text-[#a2abb5] font-light leading-relaxed">
               Modern challenges such as nutrition or climate resilience rarely fit into a single departmental silo. Rajyatantra specializes in designing multi sectoral frameworks that enable seamless inter departmental collaboration and resource sharing.
             </p>
          </div>
          <div className="relative aspect-video bg-[#1b263b] rounded-sm border border-white/5 overflow-hidden">
             {/* Abstract Graphical Network Replacement */}
             <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-20">
                  <path d="M10,20 L90,80 M10,80 L90,20 M50,10 L50,90 M10,50 L90,50" stroke="#B38B3F" strokeWidth="0.2" fill="none" />
                  <circle cx="50" cy="50" r="2" fill="#B38B3F" />
                  <circle cx="10" cy="20" r="1.5" fill="#B38B3F" />
                  <circle cx="90" cy="80" r="1.5" fill="#B38B3F" />
                  <circle cx="10" cy="80" r="1.5" fill="#B38B3F" />
                  <circle cx="90" cy="20" r="1.5" fill="#B38B3F" />
                  <circle cx="50" cy="10" r="1.5" fill="#B38B3F" />
                  <circle cx="50" cy="90" r="1.5" fill="#B38B3F" />
                  <circle cx="10" cy="50" r="1.5" fill="#B38B3F" />
                  <circle cx="90" cy="50" r="1.5" fill="#B38B3F" />
                </svg>
             </div>
             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0d1b2a]/40"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
