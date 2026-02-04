
import React from 'react';
import { PRACTICE_AREAS } from '../constants.tsx';

const PracticeAreas: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Header */}
      <section className="py-40 bg-white border-b border-[#1b263b]/10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-xs uppercase tracking-[0.4em] text-[#415a77] font-bold mb-8 underline decoration-[#B38B3F] underline-offset-8">Practice Areas</h1>
          <h2 className="text-4xl md:text-6xl serif font-bold text-[#0d1b2a] leading-tight max-w-5xl mb-12">
            Specialized Advisory <br/>for Public Systems.
          </h2>
          <p className="text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Our services are structured to address the complex lifecycle of public policy from design and fiscal mapping to evaluation and digital transformation.
          </p>
        </div>
      </section>

      {/* Areas List */}
      <section className="pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {PRACTICE_AREAS.map((area, index) => (
            <div key={area.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-slate-100 pt-32 reveal">
              <div className="lg:col-span-7 flex flex-row items-baseline gap-8">
                <span className="serif text-5xl text-[#B38B3F]/20 font-bold shrink-0">0{index + 1}</span>
                <div className="space-y-8">
                  <h3 className="text-3xl serif font-bold text-[#0d1b2a] leading-tight">{area.title.replace(/-/g, ' ')}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    {area.description.replace(/-/g, ' ')}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 bg-[#f0f4f8] p-12 border border-[#B38B3F]/10 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xs uppercase tracking-widest text-[#0d1b2a] font-bold mb-8 underline decoration-[#B38B3F] underline-offset-4">Key Focus Verticals</h4>
                <ul className="space-y-6">
                  {area.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#B38B3F] mr-5 font-bold text-xl leading-none">/</span>
                      <span className="text-slate-600 text-base font-light leading-relaxed">{point.replace(/-/g, ' ')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
