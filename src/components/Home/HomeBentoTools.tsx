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
      className="relative w-full bg-slate-50/40 py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 border-none overflow-hidden" 
      id="career-tools"
    >
      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 items-stretch mx-3 sm:mx-6 lg:mx-8">
          
          {/* =========================================================
              COLUMN 1: FOR EMPLOYERS & RECRUITERS (Slimmer Card)
              ========================================================= */}
          <div className="bg-gradient-to-br from-[#EBF5FE] via-[#EDF5FE] to-[#E3F0FD] border border-blue-200/70 rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:px-5.5 lg:py-4.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.09)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group isolate">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center h-full">
              
              {/* Left Text Column */}
              <div className="sm:col-span-7 space-y-1.5 sm:space-y-2 text-left z-10 flex flex-col justify-center">
                {/* Headline */}
                <h3 className="text-base sm:text-lg lg:text-[18px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                  Smart Hiring. <br />
                  Stronger Teams.
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed line-clamp-2 max-w-xs">
                  Access verified candidates, streamline recruitment, and build top teams without agency fees.
                </p>

                {/* Action CTA Button */}
                <div className="pt-0.5">
                  <Link
                    to="/employers"
                    className="inline-flex items-center gap-1.5 bg-[#1565ED] hover:bg-[#0E56D6] text-white font-semibold text-xs px-3.5 sm:px-4 py-2 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all group/btn cursor-pointer"
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
                  className="w-full h-auto object-contain max-h-[115px] sm:max-h-[130px] lg:max-h-[140px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

            </div>
          </div>

          {/* =========================================================
              COLUMN 2: FOR CANDIDATES & JOB SEEKERS (Slimmer Card - Logo Orange #FF5A00)
              ========================================================= */}
          <div className="bg-gradient-to-br from-[#FFF7ED] via-[#FFEDE1] to-[#FFE4D1] border border-orange-200/80 rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:px-5.5 lg:py-4.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.09)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group isolate">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center h-full">
              
              {/* Left Text Column */}
              <div className="sm:col-span-7 space-y-1.5 sm:space-y-2 text-left z-10 flex flex-col justify-center">
                {/* Headline */}
                <h3 className="text-base sm:text-lg lg:text-[18px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                  Build Your Profile. <br />
                  Unlock Opportunities.
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed line-clamp-2 max-w-xs">
                  Create your portfolio, resume and professional identity to showcase your potential.
                </p>

                {/* Action CTA Button */}
                <div className="pt-0.5">
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-1.5 bg-[#FF5A00] hover:bg-[#EA580C] text-white font-semibold text-xs px-3.5 sm:px-4 py-2 rounded-xl shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/30 transition-all group/btn cursor-pointer"
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
                  className="w-full h-auto object-contain max-h-[115px] sm:max-h-[130px] lg:max-h-[140px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

            </div>
          </div>

          {/* =========================================================
              COLUMN 3: ATS RESUME BUILDER & CAREER TOOLS (Slimmer Card - Mint/Emerald)
              ========================================================= */}
          <div className="bg-gradient-to-br from-[#ECFDF5] via-[#E6FBF0] to-[#DCFCE7] border border-emerald-200/80 rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:px-5.5 lg:py-4.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.09)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group isolate">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center h-full">
              
              {/* Left Text Column */}
              <div className="sm:col-span-7 space-y-1.5 sm:space-y-2 text-left z-10 flex flex-col justify-center">
                {/* Headline */}
                <h3 className="text-base sm:text-lg lg:text-[18px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                  ATS Resume Builder. <br />
                  Get Hired Faster.
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed line-clamp-2 max-w-xs">
                  Generate single-page, ATS-scored resumes to pass screening filters and book interviews.
                </p>

                {/* Action CTA Button */}
                <div className="pt-0.5">
                  <Link
                    to="/resume-builder"
                    className="inline-flex items-center gap-1.5 bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs px-3.5 sm:px-4 py-2 rounded-xl shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/30 transition-all group/btn cursor-pointer"
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
                  className="w-full h-auto object-contain max-h-[115px] sm:max-h-[130px] lg:max-h-[140px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
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
