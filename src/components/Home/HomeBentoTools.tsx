import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight 
} from 'lucide-react';
import boyBannerImg from '../../image1/boybanner.png';
import internBoyImg from '../../image1/intern_boy.png';
import collegeProffesionalImg from '../../image1/college_proffesional.png';

export const HomeBentoTools: React.FC = () => {
  return (
    <section 
      className="relative w-full bg-[#F8FAFC] py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 border-none overflow-hidden" 
      id="career-tools"
    >
      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 items-stretch mx-3 sm:mx-6 lg:mx-8">
          
          {/* =========================================================
              COLUMN 1: FOR EMPLOYERS & RECRUITERS
              ========================================================= */}
          <div className="bg-white border border-slate-200/90 rounded-2xl lg:rounded-3xl p-5 sm:p-5.5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group isolate">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center h-full">
              
              {/* Left Text Column */}
              <div className="sm:col-span-7 space-y-2 text-left z-10 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                  FOR RECRUITERS
                </span>
                <h3 className="text-base sm:text-lg lg:text-[18px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                  Smart Hiring. <br />
                  Stronger Teams.
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed line-clamp-2 max-w-xs">
                  Access verified candidates, streamline recruitment, and build top teams without agency fees.
                </p>

                {/* Action CTA Button */}
                <div className="pt-1">
                  <Link
                    to="/employers"
                    className="inline-flex items-center gap-1.5 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all group/btn cursor-pointer"
                  >
                    <span>Explore Employer Features</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Illustration Graphic */}
              <div className="sm:col-span-5 relative flex items-center justify-center sm:justify-end select-none pointer-events-none">
                <img
                  src={boyBannerImg}
                  alt="Smart Hiring. Stronger Teams."
                  className="w-full h-auto object-contain max-h-[120px] sm:max-h-[135px] lg:max-h-[145px] drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

            </div>
          </div>

          {/* =========================================================
              COLUMN 2: FOR CANDIDATES & JOB SEEKERS
              ========================================================= */}
          <div className="bg-white border border-slate-200/90 rounded-2xl lg:rounded-3xl p-5 sm:p-5.5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group isolate">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-sky-500" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center h-full">
              
              {/* Left Text Column */}
              <div className="sm:col-span-7 space-y-2 text-left z-10 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">
                  CAREER GATEWAY
                </span>
                <h3 className="text-base sm:text-lg lg:text-[18px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                  Build Your Profile. <br />
                  Unlock Opportunities.
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed line-clamp-2 max-w-xs">
                  Create your portfolio, resume and professional identity to showcase your potential.
                </p>

                {/* Action CTA Button */}
                <div className="pt-1">
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all group/btn cursor-pointer"
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Illustration Graphic */}
              <div className="sm:col-span-5 relative flex items-center justify-center sm:justify-end select-none pointer-events-none">
                <img
                  src={internBoyImg}
                  alt="Build Your Profile. Unlock Opportunities."
                  className="w-full h-auto object-contain max-h-[120px] sm:max-h-[135px] lg:max-h-[145px] drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

            </div>
          </div>

          {/* =========================================================
              COLUMN 3: ATS RESUME BUILDER & CAREER TOOLS
              ========================================================= */}
          <div className="bg-white border border-slate-200/90 rounded-2xl lg:rounded-3xl p-5 sm:p-5.5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group isolate">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center h-full">
              
              {/* Left Text Column */}
              <div className="sm:col-span-7 space-y-2 text-left z-10 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                  AI CAREER TOOLS
                </span>
                <h3 className="text-base sm:text-lg lg:text-[18px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                  ATS Resume Builder. <br />
                  Get Hired Faster.
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed line-clamp-2 max-w-xs">
                  Generate single-page, ATS-scored resumes to pass screening filters and book interviews.
                </p>

                {/* Action CTA Button */}
                <div className="pt-1">
                  <Link
                    to="/resume-builder"
                    className="inline-flex items-center gap-1.5 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all group/btn cursor-pointer"
                  >
                    <span>Build ATS Resume</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Illustration Graphic */}
              <div className="sm:col-span-5 relative flex items-center justify-center sm:justify-end select-none pointer-events-none">
                <img
                  src={collegeProffesionalImg}
                  alt="ATS Resume Builder. Get Hired Faster."
                  className="w-full h-auto object-contain max-h-[120px] sm:max-h-[135px] lg:max-h-[145px] drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
