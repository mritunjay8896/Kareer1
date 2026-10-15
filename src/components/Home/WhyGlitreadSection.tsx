import React from 'react';

export const WhyGlitreadSection: React.FC = () => {
  const features = [
    {
      id: 'verified',
      icon: (
        <svg className="w-7 h-7 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      bgClass: 'bg-[#F0F6FF] border border-blue-100/70',
      line1: 'Verified',
      line2: 'Profiles'
    },
    {
      id: 'contact',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path d="M12 3C6.48 3 2 6.8 2 11.5c0 2.5 1.25 4.7 3.25 6.2-.2 1.4-.8 2.8-1.7 3.8 2.2 0 4.2-.8 5.6-2 .9.3 1.9.5 2.85.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3z" fill="#0084FF" />
          <circle cx="8" cy="11.5" r="1.25" fill="white" />
          <circle cx="12" cy="11.5" r="1.25" fill="white" />
          <circle cx="16" cy="11.5" r="1.25" fill="white" />
        </svg>
      ),
      bgClass: 'bg-[#F0F6FF] border border-blue-100/70',
      line1: 'Direct',
      line2: 'Contact'
    },
    {
      id: 'fees',
      icon: (
        <svg className="w-7 h-7 text-[#D946EF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 14.14 14.14" />
        </svg>
      ),
      bgClass: 'bg-[#FAF5FF] border border-fuchsia-100/70',
      line1: 'No Agency',
      line2: 'Fees'
    },
    {
      id: 'hiring',
      icon: (
        <svg className="w-7 h-7 text-[#0284C7]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      bgClass: 'bg-[#F0F9FF] border border-sky-100/70',
      line1: 'Fast',
      line2: 'Hiring'
    },
    {
      id: 'projects',
      icon: (
        <svg className="w-7 h-7 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      bgClass: 'bg-[#F1F5F9] border border-slate-200/60',
      line1: 'Live Projects',
      line2: '& Repos'
    }
  ];

  return (
    <section 
      className="relative w-full bg-slate-50/40 py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 border-none overflow-hidden" 
      id="why-glitread"
    >
      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] transition-all duration-300 mx-3 sm:mx-6 lg:mx-8 px-5 py-3.5 sm:px-7 sm:py-4 lg:px-8 lg:py-4.5 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center py-2 sm:py-2.5 lg:py-3 px-1 sm:px-2">
            
            {/* Left Headline & Description */}
            <div className="lg:col-span-5 text-left space-y-1 flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-blue-600 tracking-wider uppercase block">
                WHY GLITREAD?
              </span>
              <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                Everything You Need in One Platform
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed max-w-sm">
                From hiring to career growth — we provide the tools, talent and technology to make it happen, faster and smarter.
              </p>
            </div>

            {/* Right: 5 Value Pillars strictly matching screenshot */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-3.5 items-start justify-items-center">
                {features.map((item) => (
                  <div key={item.id} className="flex flex-col items-center text-center group cursor-default">
                    {/* Squircle Tile */}
                    <div className={`w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-[15px] sm:rounded-[18px] flex items-center justify-center ${item.bgClass} shadow-2xs group-hover:scale-105 transition-transform duration-200 [&>svg]:w-5.5 [&>svg]:h-5.5 sm:[&>svg]:w-6 sm:[&>svg]:h-6`}>
                      {item.icon}
                    </div>

                    {/* 2-line Label */}
                    <div className="mt-1.5 text-[11px] sm:text-xs font-semibold text-slate-800 text-center leading-tight">
                      <div>{item.line1}</div>
                      <div>{item.line2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
