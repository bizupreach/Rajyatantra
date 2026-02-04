
import React from 'react';

const steps = [
  { step: '01', title: 'Problem Diagnosis', desc: 'Identifying administrative bottlenecks and systemic gaps through deep dive assessments.' },
  { step: '02', title: 'Institutional Mapping', desc: 'Understanding the stakeholder ecosystem and departmental hierarchies involved.' },
  { step: '03', title: 'Stakeholder Consultation', desc: 'Engaging with bureaucrats front line workers and citizens for holistic perspectives.' },
  { step: '04', title: 'Evidence Data Analysis', desc: 'Utilizing secondary data and primary research to validate diagnostic findings.' },
  { step: '05', title: 'Design Recommendation', desc: 'Formulating feasible scalable and institutionally aligned policy frameworks.' },
  { step: '06', title: 'Implementation Support', desc: 'Providing hands on advisory to ensure transition from design to delivery.' },
  { step: '07', title: 'Monitoring Feedback', desc: 'Establishing feedback loops to track outcomes and suggest iterative improvements.' }
];

const GovernanceApproach: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative py-40 bg-[#0d1b2a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0" style={{ 
             backgroundImage: 'linear-gradient(#B38B3F 1px, transparent 1px), linear-gradient(90deg, #B38B3F 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-xs uppercase tracking-[0.4em] text-[#778da9] font-bold mb-8 underline decoration-[#B38B3F] underline-offset-8">Governance Approach</h1>
          <h2 className="text-4xl md:text-6xl serif font-bold leading-tight max-w-5xl mb-12">
            A Structured Framework <br/>for Public Excellence.
          </h2>
          <p className="text-2xl text-[#a2abb5] max-w-3xl font-light leading-relaxed border-l-4 border-[#B38B3F]/40 pl-10">
            Rajyatantra employs a rigorous seven stage methodology designed to ensure that every policy intervention is grounded in reality and geared toward measurable impact.
          </p>
        </div>
      </section>

      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-16">
                {steps.map((item, idx) => (
                  <div key={item.step} className="relative pl-12 md:pl-0 reveal group" style={{ transitionDelay: `${idx * 100}ms` }}>
                    <div className="absolute left-[-9px] md:left-0 top-0 w-4 h-4 rounded-full bg-[#0d1b2a] md:hidden"></div>
                    <div className="flex flex-row items-center gap-4 mb-6">
                        <span className="serif text-5xl text-slate-100 font-bold block transition-colors gold-shimmer">{item.step}</span>
                        <h3 className="text-xl serif font-bold text-[#0d1b2a]">{item.title}</h3>
                    </div>
                    <p className="text-base text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-[20%] right-[-40px] w-12 h-px bg-[#B38B3F]/30"></div>
                    )}
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default GovernanceApproach;
