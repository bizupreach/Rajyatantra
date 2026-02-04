
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative py-48 bg-[#0d1b2a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="120%" height="120%" viewBox="0 0 100 100">
              <path d="M0,50 Q25,0 50,50 T100,50" stroke="#B38B3F" fill="none" strokeWidth="0.1" />
              <path d="M0,60 Q25,10 50,60 T100,60" stroke="#B38B3F" fill="none" strokeWidth="0.1" />
              <path d="M0,40 Q25,-10 50,40 T100,40" stroke="#B38B3F" fill="none" strokeWidth="0.1" />
           </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-xs uppercase tracking-[0.4em] text-[#778da9] font-bold mb-10 underline decoration-[#B38B3F] underline-offset-8">Contact & Engagement</h1>
          <h2 className="text-4xl md:text-6xl serif font-bold leading-tight max-w-5xl mb-12">
            Institutional Inquiries <br/>& Consultation.
          </h2>
          <p className="text-2xl text-[#a2abb5] max-w-3xl font-light leading-relaxed border-l-4 border-[#B38B3F]/40 pl-10">
            We prioritize discretion and institutional standards in all our communications. Please use the following formal channels for engagement.
          </p>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal">
              <h3 className="text-3xl serif font-bold text-[#0d1b2a] mb-16 text-center">Administrative Headquarters</h3>
              <div className="space-y-24">
                <div className="text-center">
                  <h4 className="text-xs uppercase tracking-widest text-[#415a77] font-bold mb-6">Location</h4>
                  <p className="text-4xl text-[#0d1b2a] serif leading-relaxed tracking-tight">
                    New Delhi
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-xs uppercase tracking-widest text-[#415a77] font-bold mb-6">Direct Correspondence</h4>
                  <a href="mailto:engage@rajyatantra.in" className="text-2xl md:text-3xl text-[#0d1b2a] serif leading-relaxed hover:text-[#B38B3F] transition-colors border-b-2 border-transparent hover:border-[#B38B3F] inline-block">
                    engage@rajyatantra.in
                  </a>
                </div>
                <div className="p-14 bg-[#f0f4f8] border border-[#1b263b]/10 shadow-sm rounded-sm border-l-4 border-l-[#B38B3F] max-w-3xl mx-auto">
                  <h4 className="text-xs uppercase tracking-widest text-[#0d1b2a] font-bold mb-10 underline decoration-[#B38B3F] underline-offset-8">Confidential Desk</h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    For sensitive policy inquiries or cabinet level briefs please specify Confidential in your communication. Our administrative desk ensures that such inquiries are routed directly to the Directorate under secure protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
