
import React from 'react';
import { PUBLICATIONS } from '../constants.tsx';

const Publications: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-40 bg-[#f0f4f8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-xs uppercase tracking-[0.4em] text-[#0d1b2a] font-bold mb-8 underline decoration-[#B38B3F] underline-offset-8">Publications & Insights</h1>
          <h2 className="text-4xl md:text-6xl serif font-bold text-[#0d1b2a] leading-tight max-w-5xl mb-12">
            Thought Leadership <br/>on Public Systems.
          </h2>
          <p className="text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Our repository of white papers policy briefs and research notes reflecting our ongoing engagement with administrative challenges.
          </p>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={pub.id} className="group cursor-pointer reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-16 transition-all group-hover:border-[#B38B3F]">
                  <div className="md:col-span-2">
                    <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-[#415a77] block mb-3">{pub.category.replace(/-/g, ' ')}</span>
                    <span className="text-sm text-slate-500">{pub.date}</span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl serif font-bold text-[#0d1b2a] group-hover:text-[#415a77] transition-colors mb-6">{pub.title.replace(/-/g, ' ')}</h3>
                    <p className="text-slate-600 text-lg font-light leading-relaxed">{pub.description.replace(/-/g, ' ')}</p>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <span className="text-[#0d1b2a] font-bold uppercase tracking-widest text-[11px] border-2 border-[#0d1b2a] px-6 py-3 hover:bg-gold-statutory hover:text-white hover:border-transparent transition-all rounded-sm">
                      Access Report
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
