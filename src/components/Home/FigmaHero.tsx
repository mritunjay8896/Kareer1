import React from 'react';
import { Link } from 'react-router-dom';
import jobForAllImg from '../../image1/jobforall.png';
import { 
  Sparkles, 
  FileText,
  Briefcase,
  ArrowRight
} from 'lucide-react';

interface FigmaHeroProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const FigmaHero: React.FC<FigmaHeroProps> = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-8 sm:py-12 lg:py-16 px-2 sm:px-4 lg:px-6 overflow-hidden">
      {/* Enterprise ambient glow & mesh gradient background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        {/* Enterprise Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 mx-3 sm:mx-6 lg:mx-8 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 relative overflow-hidden">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 flex flex-col justify-center">

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[62px] font-extrabold text-slate-950 tracking-[-0.035em] leading-[1.06] font-display">
                Hire From Us. <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
                  Get Hired Fast.
                </span>
              </h1>

              <p className="text-base sm:text-[17px] text-slate-600 font-medium leading-relaxed max-w-xl">
                India's modern career and hiring platform. Connect with 2 lakh+ pre-screened freshers and experienced professionals. Build ATS-optimized resumes, publish 1-click web portfolios, and apply with zero placement fees.
              </p>
            </div>

            {/* Action Buttons Row - Clear Enterprise Hierarchy */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {/* Primary Action: Dark Blue */}
              <a
                href="#talent-pool"
                className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-900/20 active:scale-[0.98] transition-all flex items-center gap-2 shrink-0 cursor-pointer group"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Talent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary Action: High-Trust White Inset */}
              <Link
                to="/resume-builder"
                className="bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 active:scale-[0.98] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Build ATS Resume</span>
              </Link>

              {/* Tertiary Action: Clean Outline */}
              <Link
                to="/portfolio"
                className="bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 active:scale-[0.98] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Portfolio Builder</span>
              </Link>
            </div>

            {/* Institutional Trust Metrics Strip */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-extrabold text-slate-900 text-sm">2,50,000+</span>
                <span className="text-slate-500 font-medium text-xs">Pre-Screened Talent</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="font-extrabold text-blue-600 text-sm">10,000+</span>
                <span className="text-slate-500 font-medium text-xs">Live Vacancies</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="font-extrabold text-slate-900 text-sm">3,800+</span>
                <span className="text-slate-500 font-medium text-xs">Verified Recruiters</span>
              </div>
            </div>

          </div>

          {/* Right Graphic Column (5 cols) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[460px] lg:max-w-[500px] flex items-end justify-center lg:justify-end">
              {/* Central Illustration */}
              <img
                src={jobForAllImg}
                alt="Young professionals and graduates ready to build careers"
                className="relative z-10 w-full h-auto object-contain object-bottom max-h-[400px] sm:max-h-[440px] lg:max-h-[480px] select-none block drop-shadow-sm"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
