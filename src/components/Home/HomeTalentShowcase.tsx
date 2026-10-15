import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Briefcase 
} from 'lucide-react';
import boyBannerImg from '../../image1/boybanner.png';

export const HomeTalentShowcase: React.FC = () => {
  const candidateTags = [
    'React & Next.js Developers',
    'Python & AI Engineers',
    'Full Stack MERN',
    'Data Analysts & BI',
    'UI/UX Product Designers',
    'DevOps & Cloud Interns',
    'Java & Spring Boot'
  ];

  return (
    <section id="talent-pool" className="relative w-full bg-slate-50/40 py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 border-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mx-3 sm:mx-6 lg:mx-8 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8 relative overflow-hidden">
          
          {/* Left Column: 3D Illustration Scene (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Radial Ring */}
            <div className="absolute inset-0 m-auto w-[110%] h-[110%] rounded-full bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-transparent blur-3xl pointer-events-none -z-0" />
            
            <img
              src={boyBannerImg}
              alt="Candidate showcase with portfolio and work ready"
              className="relative z-10 w-full h-auto object-contain max-h-[460px] sm:max-h-[520px] select-none drop-shadow-xl hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* Right Column: Content & Recruiter Value Props (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-display leading-snug">
                Hire Pre-Screened Talent <br />
                <span className="text-blue-600">In 48 Hours. Zero Placement Fees.</span>
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-xl">
                Skip sluggish staffing agency contracts and resume spam. Connect directly with over 2 lakh+ verified freshers and experienced engineers with live GitHub portfolios and ATS-rated skill profiles.
              </p>
            </div>

            {/* Candidate Domain Tags */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Popular Talent Pools:
              </span>
              <div className="flex flex-wrap gap-2">
                {candidateTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-xs font-medium border border-slate-200/80 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Value Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2 Lakh+ Profiles</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">Pre-screened tech and business candidates across India.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>48h Shortlists</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">Direct contact info and verified GitHub repositories.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Agency Fee</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">No placement commission cuts or middleman delays.</p>
              </div>
            </div>

            {/* Recruiter Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/employers/login"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer group"
              >
                <Briefcase className="w-4 h-4" />
                <span>Search Candidate Database</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/employers/login"
                className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-amber-200 transition-all cursor-pointer"
              >
                <span>Post A Vacancy Free</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
