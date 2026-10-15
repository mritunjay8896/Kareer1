import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Globe, 
  GraduationCap, 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Cloud, 
  Settings, 
  Briefcase, 
  Sparkles, 
  Rocket, 
  PenTool, 
  BarChart3, 
  Check, 
  Search,
  Building2,
  X
} from 'lucide-react';
import internBoyImg from '../../image1/intern_boy.png';
import collegeProffesionalImg from '../../image1/college_proffesional.png';

interface CategoryItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  cardBg: string;
  bloomColor: string;
  hoverGlow: string;
  badgeBg: string;
  textColor: string;
  arrowHover: string;
  dividerBorder: string;
  count: string;
  filterRole: string;
}

export const HireTalentPoolSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  const categories: CategoryItem[] = [
    {
      id: 'developers',
      name: 'Software Developers',
      desc: 'Build great products',
      icon: Code2,
      iconColor: 'text-[#1565ED]',
      bgColor: 'bg-blue-100/70',
      borderColor: 'border-blue-200/60 hover:border-blue-400/80',
      cardBg: 'bg-gradient-to-b from-blue-50/70 via-blue-50/20 to-white/95',
      bloomColor: 'bg-blue-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(37,99,235,0.18)]',
      badgeBg: 'bg-blue-100/80 text-blue-700',
      textColor: 'group-hover:text-blue-600',
      arrowHover: 'group-hover:text-blue-600',
      dividerBorder: 'border-blue-100/70',
      count: '65,000+',
      filterRole: 'Software Developer'
    },
    {
      id: 'qa-testers',
      name: 'QA & Software Testers',
      desc: 'Ensure quality',
      icon: ShieldCheck,
      iconColor: 'text-[#059669]',
      bgColor: 'bg-emerald-100/70',
      borderColor: 'border-emerald-200/60 hover:border-emerald-400/80',
      cardBg: 'bg-gradient-to-b from-emerald-50/70 via-emerald-50/20 to-white/95',
      bloomColor: 'bg-emerald-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(16,185,129,0.18)]',
      badgeBg: 'bg-emerald-100/80 text-emerald-700',
      textColor: 'group-hover:text-emerald-600',
      arrowHover: 'group-hover:text-emerald-600',
      dividerBorder: 'border-emerald-100/70',
      count: '24,000+',
      filterRole: 'QA Tester'
    },
    {
      id: 'devops',
      name: 'DevOps Engineers',
      desc: 'Keep systems running',
      icon: Cloud,
      iconColor: 'text-[#0284C7]',
      bgColor: 'bg-sky-100/70',
      borderColor: 'border-sky-200/60 hover:border-sky-400/80',
      cardBg: 'bg-gradient-to-b from-sky-50/70 via-sky-50/20 to-white/95',
      bloomColor: 'bg-sky-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(14,165,233,0.18)]',
      badgeBg: 'bg-sky-100/80 text-sky-700',
      textColor: 'group-hover:text-sky-600',
      arrowHover: 'group-hover:text-sky-600',
      dividerBorder: 'border-sky-100/70',
      count: '18,500+',
      filterRole: 'DevOps'
    },
    {
      id: 'it-support',
      name: 'IT Support & Operations',
      desc: 'Support & maintain',
      icon: Settings,
      iconColor: 'text-[#6366F1]',
      bgColor: 'bg-indigo-100/70',
      borderColor: 'border-indigo-200/60 hover:border-indigo-400/80',
      cardBg: 'bg-gradient-to-b from-indigo-50/70 via-indigo-50/20 to-white/95',
      bloomColor: 'bg-indigo-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(99,102,241,0.18)]',
      badgeBg: 'bg-indigo-100/80 text-indigo-700',
      textColor: 'group-hover:text-indigo-600',
      arrowHover: 'group-hover:text-indigo-600',
      dividerBorder: 'border-indigo-100/70',
      count: '21,000+',
      filterRole: 'IT Operations'
    },
    {
      id: 'biz-ops',
      name: 'Business Operations',
      desc: 'Drive efficiency',
      icon: Briefcase,
      iconColor: 'text-[#D97706]',
      bgColor: 'bg-amber-100/70',
      borderColor: 'border-amber-200/60 hover:border-amber-400/80',
      cardBg: 'bg-gradient-to-b from-amber-50/70 via-amber-50/20 to-white/95',
      bloomColor: 'bg-amber-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(245,158,11,0.18)]',
      badgeBg: 'bg-amber-100/80 text-amber-700',
      textColor: 'group-hover:text-amber-600',
      arrowHover: 'group-hover:text-amber-600',
      dividerBorder: 'border-amber-100/70',
      count: '16,000+',
      filterRole: 'Operations'
    },
    {
      id: 'consultants',
      name: 'Consultants',
      desc: 'Provide strategic advice',
      icon: Sparkles,
      iconColor: 'text-[#7C3AED]',
      bgColor: 'bg-purple-100/70',
      borderColor: 'border-purple-200/60 hover:border-purple-400/80',
      cardBg: 'bg-gradient-to-b from-purple-50/70 via-purple-50/20 to-white/95',
      bloomColor: 'bg-purple-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(139,92,246,0.18)]',
      badgeBg: 'bg-purple-100/80 text-purple-700',
      textColor: 'group-hover:text-purple-600',
      arrowHover: 'group-hover:text-purple-600',
      dividerBorder: 'border-purple-100/70',
      count: '12,000+',
      filterRole: 'Consultant'
    },
    {
      id: 'biz-dev',
      name: 'Business Development',
      desc: 'Grow your business',
      icon: Rocket,
      iconColor: 'text-[#E11D48]',
      bgColor: 'bg-rose-100/70',
      borderColor: 'border-rose-200/60 hover:border-rose-400/80',
      cardBg: 'bg-gradient-to-b from-rose-50/70 via-rose-50/20 to-white/95',
      bloomColor: 'bg-rose-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(244,63,94,0.18)]',
      badgeBg: 'bg-rose-100/80 text-rose-700',
      textColor: 'group-hover:text-rose-600',
      arrowHover: 'group-hover:text-rose-600',
      dividerBorder: 'border-rose-100/70',
      count: '19,000+',
      filterRole: 'Business Development'
    },
    {
      id: 'designers',
      name: 'UI/UX Designers',
      desc: 'Create better experiences',
      icon: PenTool,
      iconColor: 'text-[#C026D3]',
      bgColor: 'bg-fuchsia-100/70',
      borderColor: 'border-fuchsia-200/60 hover:border-fuchsia-400/80',
      cardBg: 'bg-gradient-to-b from-fuchsia-50/70 via-fuchsia-50/20 to-white/95',
      bloomColor: 'bg-fuchsia-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(217,70,239,0.18)]',
      badgeBg: 'bg-fuchsia-100/80 text-fuchsia-700',
      textColor: 'group-hover:text-fuchsia-600',
      arrowHover: 'group-hover:text-fuchsia-600',
      dividerBorder: 'border-fuchsia-100/70',
      count: '14,000+',
      filterRole: 'UI/UX Designer'
    },
    {
      id: 'analysts',
      name: 'Data Analysts',
      desc: 'Turn data into insights',
      icon: BarChart3,
      iconColor: 'text-[#0D9488]',
      bgColor: 'bg-teal-100/70',
      borderColor: 'border-teal-200/60 hover:border-teal-400/80',
      cardBg: 'bg-gradient-to-b from-teal-50/70 via-teal-50/20 to-white/95',
      bloomColor: 'bg-teal-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(20,184,166,0.18)]',
      badgeBg: 'bg-teal-100/80 text-teal-700',
      textColor: 'group-hover:text-teal-600',
      arrowHover: 'group-hover:text-teal-600',
      dividerBorder: 'border-teal-100/70',
      count: '22,000+',
      filterRole: 'Data Analyst'
    },
    {
      id: 'freshers',
      name: 'Interns & Fresh Graduates',
      desc: 'Build your future team',
      icon: GraduationCap,
      iconColor: 'text-[#EA580C]',
      bgColor: 'bg-orange-100/70',
      borderColor: 'border-orange-200/60 hover:border-orange-400/80',
      cardBg: 'bg-gradient-to-b from-orange-50/70 via-orange-50/20 to-white/95',
      bloomColor: 'bg-orange-400/25',
      hoverGlow: 'hover:shadow-[0_10px_25px_-4px_rgba(249,115,22,0.18)]',
      badgeBg: 'bg-orange-100/80 text-orange-700',
      textColor: 'group-hover:text-orange-600',
      arrowHover: 'group-hover:text-orange-600',
      dividerBorder: 'border-orange-100/70',
      count: '45,000+',
      filterRole: 'Intern'
    }
  ];

  return (
    <section 
      id="talent-pool-categories" 
      className="relative w-full bg-slate-50/40 py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 border-none overflow-hidden"
    >
      <div className="w-full max-w-[1340px] mx-auto relative z-10 space-y-4 sm:space-y-5">
        
        {/* =========================================================
            PART 1: Hire From Us: 2 Lakh+ Talent Pool & Top Categories
            ========================================================= */}
        <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] transition-all duration-300 mx-3 sm:mx-6 lg:mx-8 px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-7 relative overflow-hidden">
          
          {/* Header Row: Title on Left, 3 Stat Badges on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pb-6 border-b border-slate-100">
            
            {/* Left Headline & Subtitle */}
            <div className="lg:col-span-7 text-left space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 tracking-tight leading-snug font-display">
                Hire From Us: <span className="text-blue-600">2 Lakh+ Talent Pool</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl">
                Find the right people for your business, from interns and freshers to experienced professionals across India's fastest growing tech and business sectors.
              </p>

              <div className="pt-1 flex items-center gap-3">
                <Link
                  to="/search-profiles"
                  className="inline-flex items-center gap-2 bg-[#1565ED] hover:bg-[#0E56D6] text-white font-semibold text-xs sm:text-sm px-4.5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <span>Explore Talent Pool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/employers"
                  className="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Employer Solutions →
                </Link>
              </div>
            </div>

            {/* Right Quick-Stats Strip */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="bg-[#F0F6FF] border border-blue-100/80 rounded-xl p-3 sm:p-3.5 text-center flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1565ED] flex items-center justify-center mb-1.5">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 font-display leading-tight">
                  2,00,000+
                </div>
                <div className="text-[10.5px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">
                  Talent Pool
                </div>
              </div>

              <div className="bg-[#FAF5FF] border border-purple-100/80 rounded-xl p-3 sm:p-3.5 text-center flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-1.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 font-display leading-tight">
                  Multiple
                </div>
                <div className="text-[10.5px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">
                  Skills & Domains
                </div>
              </div>

              <div className="bg-[#ECFDF5] border border-emerald-100/80 rounded-xl p-3 sm:p-3.5 text-center flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 font-display leading-tight">
                  Freshers &
                </div>
                <div className="text-[10.5px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">
                  Experienced
                </div>
              </div>
            </div>

          </div>

          {/* Top Hiring Categories Subhead & Grid */}
          <div className="pt-5 text-left">
            <div className="flex items-center justify-between pb-3.5">
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                Top Hiring Categories
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                10 Specialized Domains
              </span>
            </div>

            {/* 10 Bento Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.id}
                    to={`/search-profiles?role=${encodeURIComponent(cat.filterRole)}`}
                    className={`group relative overflow-hidden p-3 sm:p-3.5 rounded-xl sm:rounded-2xl ${cat.cardBg} backdrop-blur-xs border ${cat.borderColor} shadow-2xs hover:shadow-md ${cat.hoverGlow} hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between cursor-pointer`}
                  >
                    {/* Ambient light transparent CSS bloom / blur orb */}
                    <div 
                      className={`absolute -top-6 -right-6 w-20 h-20 rounded-full ${cat.bloomColor} blur-xl pointer-events-none opacity-40 group-hover:opacity-85 group-hover:scale-125 transition-all duration-300`} 
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${cat.bgColor} ${cat.iconColor} flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs`}>
                          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                        </div>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${cat.badgeBg} transition-colors`}>
                          {cat.count}
                        </span>
                      </div>

                      <h4 className={`text-xs sm:text-[13px] font-bold text-slate-900 leading-snug ${cat.textColor} transition-colors`}>
                        {cat.name}
                      </h4>
                      <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                        {cat.desc}
                      </p>
                    </div>

                    <div className={`relative z-10 pt-2.5 mt-2 border-t ${cat.dividerBorder} flex items-center justify-between text-[10px] font-semibold text-slate-500 ${cat.arrowHover} transition-colors`}>
                      <span>Browse talent</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* =========================================================
            PART 2: Audience Segmentation — "We've Got You Covered"
            ========================================================= */}
        <div className="mx-3 sm:mx-6 lg:mx-8 mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6 pb-4 sm:pb-6">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2 sm:mb-2.5 px-3 py-1 bg-slate-100/80 rounded-full inline-block">
              Looking for Interns or Experienced Professionals?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug font-display mt-2 mb-2 sm:mb-3">
              We've Got You Covered.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 items-stretch">
            
            {/* Card 1: Interns & Fresh Graduates (Soft Mint / Teal) */}
            <div className="bg-gradient-to-br from-[#F0FDF4] via-[#F4FBF7] to-[#DCFCE7] border border-emerald-200/80 rounded-2xl lg:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                
                {/* Left Text */}
                <div className="sm:col-span-7 space-y-2.5 text-left z-10 flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase block">
                    EARLY-CAREER TALENT
                  </span>
                  
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug font-display">
                    Interns & Fresh Graduates
                  </h4>

                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                    Find motivated early-career talent for internships and entry-level roles equipped with hands-on project portfolios.
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/search-profiles?level=intern"
                      className="inline-flex items-center gap-1.5 bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs px-4.5 py-2.5 rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all group/btn cursor-pointer"
                    >
                      <span>Find Interns & Freshers</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right 3D Illustration Graphic */}
                <div className="sm:col-span-5 relative flex items-center justify-center sm:justify-end select-none pointer-events-none p-2">
                  <img
                    src={internBoyImg}
                    alt="Interns and Fresh Graduates"
                    className="w-full h-auto object-contain max-h-[140px] sm:max-h-[160px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

            {/* Card 2: Experienced Professionals (Soft Periwinkle / Blue) */}
            <div className="bg-gradient-to-br from-[#EFF6FF] via-[#F2F7FE] to-[#DBEAFE] border border-blue-200/80 rounded-2xl lg:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                
                {/* Left Text */}
                <div className="sm:col-span-7 space-y-2.5 text-left z-10 flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase block">
                    MID & SENIOR TALENT
                  </span>
                  
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug font-display">
                    Experienced Professionals
                  </h4>

                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                    Discover professionals with relevant industry experience and role-specific skills ready to scale your engineering and business teams.
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/search-profiles?level=experienced"
                      className="inline-flex items-center gap-1.5 bg-[#1565ED] hover:bg-[#0E56D6] text-white font-semibold text-xs px-4.5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all group/btn cursor-pointer"
                    >
                      <span>Find Experienced Talent</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right 3D Illustration Graphic */}
                <div className="sm:col-span-5 relative flex items-center justify-center sm:justify-end select-none pointer-events-none p-2">
                  <img
                    src={collegeProffesionalImg}
                    alt="Experienced Professionals"
                    className="w-full h-auto object-contain max-h-[140px] sm:max-h-[160px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
