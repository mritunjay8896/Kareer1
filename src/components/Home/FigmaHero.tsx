import React from 'react';
import { Link } from 'react-router-dom';
import jobForAllImg from '../../image1/jobforall.png';
import { 
  Sparkles, 
  FileText,
  Briefcase
} from 'lucide-react';

interface FigmaHeroProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const FigmaHero: React.FC<FigmaHeroProps> = () => {
  return (
    <section className="relative w-full bg-slate-50/40 py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mx-3 sm:mx-6 lg:mx-8 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8 relative overflow-hidden">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 flex flex-col justify-center pt-1">

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.12] font-display">
                Hire From Us. <br />
                <span className="text-blue-600">Get Hired Fast.</span>
              </h1>

              <p className="text-sm sm:text-[15px] lg:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                India's modern career and hiring platform. Connect with 2 lakh+ pre-screened freshers and experienced professionals. Build ATS-optimized resumes, publish 1-click web portfolios, and apply with zero placement fees.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#talent-pool"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Hire Talent</span>
              </a>

              <Link
                to="/resume-builder"
                className="bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-200 shadow-2xs transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Build ATS Resume</span>
              </Link>

              <Link
                to="/portfolio"
                className="bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-200 shadow-2xs transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Portfolio Builder</span>
              </Link>
            </div>

            {/* Metric Counters Strip */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-slate-900 text-sm sm:text-base">2,50,000+</span>
                <span className="text-slate-500 font-normal">Candidates</span>
              </div>
              <span className="text-slate-200">|</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-blue-600 text-sm sm:text-base">10,000+</span>
                <span className="text-slate-500 font-normal">Live Vacancies</span>
              </div>
              <span className="text-slate-200">|</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-slate-900 text-sm sm:text-base">3,800+</span>
                <span className="text-slate-500 font-normal">Recruiters</span>
              </div>
            </div>

          </div>

          {/* Right Graphic Column (5 cols) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[440px] lg:max-w-[480px] flex items-end justify-center lg:justify-end">
              


              {/* Central Illustration */}
              <img
                src={jobForAllImg}
                alt="Young professionals and graduates ready to build careers"
                className="relative z-10 w-full h-auto object-contain object-bottom max-h-[380px] sm:max-h-[420px] lg:max-h-[460px] select-none block"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
