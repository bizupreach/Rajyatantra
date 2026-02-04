
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Header - Replaced image with abstract geometry */}
      <section className="relative py-40 bg-[#0d1b2a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <svg className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4" width="800" height="800" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" stroke="#B38B3F" strokeWidth="0.1" />
              <circle cx="50" cy="50" r="35" stroke="#B38B3F" strokeWidth="0.1" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#B38B3F" strokeWidth="0.1" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#B38B3F" strokeWidth="0.1" />
           </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-xs uppercase tracking-[0.4em] text-[#778da9] font-bold mb-10 underline decoration-[#B38B3F] underline-offset-8">About Rajyatantra</h1>
          <h2 className="text-4xl md:text-6xl serif font-bold leading-tight max-w-5xl">
            A Systemic Commitment to <br/>
            <span className="text-[#B38B3F]">Public Excellence.</span>
          </h2>
        </div>
      </section>

      {/* Content */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2 reveal space-y-24">
              <div className="space-y-10">
                <h3 className="text-3xl serif font-bold text-[#0d1b2a]">The Idea Behind Rajyatantra</h3>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Governance is not merely the exercise of power but the management of the Rajya Tantra the complex machinery of the state. Founded with the vision of institutionalizing evidence in policymaking Rajyatantra serves as a strategic bridge between high level policy objectives and ground level administrative realities.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  In a rapidly evolving landscape governments require more than just technical solutions they require institutional resilience. Our mission is to provide the research data support and structural guidance necessary to build that resilience.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="text-3xl serif font-bold text-[#0d1b2a]">Constitutional & Ethical Foundations</h3>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Our approach is strictly rooted in constitutional values and the overarching goal of public welfare. We operate as a neutral non partisan advisor ensuring that our recommendations are based on rigorous data and administrative feasibility rather than political expediency.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-[#f0f4f8] p-14 border border-[#1b263b]/10 shadow-sm sticky top-32 rounded-sm border-l-4 border-l-[#B38B3F]">
                <h4 className="text-xs uppercase tracking-widest text-[#0d1b2a] font-bold mb-12 border-b-2 border-[#B38B3F]/30 pb-6">Our Core Tenets</h4>
                <ul className="space-y-16">
                  <li>
                    <h5 className="text-[#1b263b] font-bold serif text-2xl mb-3">Evidence Based</h5>
                    <p className="text-base text-slate-500 leading-relaxed font-light">Every recommendation is backed by empirical research and field validated data sets.</p>
                  </li>
                  <li>
                    <h5 className="text-[#1b263b] font-bold serif text-2xl mb-3">Non Partisan</h5>
                    <p className="text-base text-slate-500 leading-relaxed font-light">Neutral advisory designed to serve the institution of governance ensuring stability across political cycles.</p>
                  </li>
                  <li>
                    <h5 className="text-[#1b263b] font-bold serif text-2xl mb-3">Systems First</h5>
                    <p className="text-base text-slate-500 leading-relaxed font-light">We solve for the process and the institution ensuring long term systemic sustainability.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote Section - Replaced image with background texture */}
      <section className="py-48 bg-[#0d1b2a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #B38B3F, #B38B3F 1px, transparent 1px, transparent 10px)' }}></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center reveal">
          <span className="text-7xl serif italic text-[#B38B3F] mb-12 block gold-shimmer">“</span>
          <p className="text-4xl md:text-6xl serif font-light leading-snug mb-20 text-[#f0f4f8]">
            The strength of a nation lies in the robustness of its institutions. At Rajyatantra we are dedicated to ensuring those institutions function with the precision of data and the compassion of public interest.
          </p>
          <div className="h-px w-40 bg-[#B38B3F] mx-auto mb-10 opacity-70"></div>
          <p className="text-xs uppercase tracking-[0.6em] font-bold text-[#778da9]">The Rajyatantra Directorate</p>
        </div>
      </section>
    </div>
  );
};

export default About;
