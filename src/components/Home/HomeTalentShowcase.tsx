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
    <section id="talent-pool" className="relative w-full bg-[#F8FAFC] py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 border-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 mx-3 sm:mx-6 lg:mx-8 px-6 py-7 sm:px-8 sm:py-9 lg:px-11 lg:py-10 relative overflow-hidden">
          
          {/* Left Column: 3D Illustration Scene (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Radial Ring */}
            <div className="absolute inset-0 m-auto w-[110%] h-[110%] rounded-full bg-gradient-to-tr from-blue-200/30 via-indigo-100/20 to-transparent blur-3xl pointer-events-none -z-0" />
            
            <img
              src={boyBannerImg}
              alt="Candidate showcase with portfolio and work ready"
              className="relative z-10 w-full h-auto object-contain max-h-[460px] sm:max-h-[500px] select-none drop-shadow-md hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* Right Column: Content & Recruiter Value Props (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                PRE-SCREENED TALENT MARKETPLACE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-950 tracking-tight font-display leading-tight">
                Hire Pre-Screened Talent <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
                  In 48 Hours. Zero Placement Fees.
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 font-medium leading-relaxed max-w-xl">
                Skip sluggish staffing agency contracts and resume spam. Connect directly with over 2 lakh+ verified freshers and experienced engineers with live GitHub portfolios and ATS-rated skill profiles.
              </p>
            </div>

            {/* Candidate Domain Tags */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Popular Talent Pools:
              </span>
              <div className="flex flex-wrap gap-2">
                {candidateTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold border border-slate-200/90 transition-colors cursor-default shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Value Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm font-display">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2 Lakh+ Profiles</span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-normal">Pre-screened tech and business candidates across India.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm font-display">
                  <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>48h Shortlists</span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-normal">Direct contact info and verified GitHub repositories.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm font-display">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Agency Fee</span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-normal">No placement commission cuts or middleman delays.</p>
              </div>
            </div>

            {/* Recruiter Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/search-profiles"
                className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-pointer group"
              >
                <Briefcase className="w-4 h-4" />
                <span>Search Candidate Database</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/employers/register"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all cursor-pointer"
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
