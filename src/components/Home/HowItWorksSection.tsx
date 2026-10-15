import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Bot, 
  Rocket, 
  Building2, 
  Sparkles, 
  CalendarCheck, 
  TrendingUp, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight,
  Zap,
  Users
} from 'lucide-react';

interface StepItem {
  number: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description?: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  ctaText?: string;
  ctaLink?: string;
}

export const HowItWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'candidate' | 'employer'>('candidate');

  const candidateSteps: StepItem[] = [
    {
      number: '01',
      badge: 'Free',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      title: 'Profile & ATS Resume',
      subtitle: 'ATS Resume & Portfolio',
      highlights: ['ATS Resume Checker', 'Shareable Portfolio URL'],
      icon: FileText,
      ctaText: 'Build ATS Resume',
      ctaLink: '/resume-builder'
    },
    {
      number: '02',
      badge: 'Find Jobs',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
      title: 'Find Jobs & Internships',
      subtitle: 'Verified Openings for Freshers',
      highlights: ['Search & Filter 10K+ Jobs', 'Direct 1-Click Applications'],
      icon: Search,
      ctaText: 'Find Jobs Now',
      ctaLink: '/jobs'
    },
    {
      number: '03',
      badge: 'Get Discovered',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      title: 'Employer Profile Search',
      subtitle: 'Employers Search Your Profile',
      highlights: ['Recruiters Search Profiles', 'Verified Skill & GitHub Badges'],
      icon: Users,
      ctaText: 'View Candidate Search',
      ctaLink: '/candidates'
    },
    {
      number: '04',
      badge: 'Get Hired',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/60',
      title: 'Interview & Offers',
      subtitle: 'Direct Offers & 0% Fees',
      highlights: ['Calendar Sync with Recruiters', '100% Salary, Zero Commission'],
      icon: Rocket,
      ctaText: 'Browse Openings',
      ctaLink: '/jobs'
    }
  ];

  const employerSteps: StepItem[] = [
    {
      number: '01',
      badge: 'Search Talent',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
      title: 'Search Candidate Profiles',
      subtitle: '2.5L+ Pre-Screened Talent',
      highlights: ['Search Profiles by Tech Stack', 'View GitHub Repos & Portfolios'],
      icon: Search,
      ctaText: 'Search Profiles',
      ctaLink: '/candidates'
    },
    {
      number: '02',
      badge: 'Post Jobs',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      title: 'Post Jobs Free',
      subtitle: 'Candidates Find Your Openings',
      highlights: ['Post Vacancies in 2 Minutes', 'Instant Candidate Applications'],
      icon: Building2,
      ctaText: 'Post a Job Free',
      ctaLink: '/employers/post-job'
    },
    {
      number: '03',
      badge: 'AI Screening',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/60',
      title: 'AI Screening & Match',
      subtitle: 'Automated Candidate Match',
      highlights: ['AI Resume & Skill Ranker', 'Auto-Coding Challenges'],
      icon: Sparkles,
      ctaText: 'Hiring Automation',
      ctaLink: '/#hiring-automation'
    },
    {
      number: '04',
      badge: '0% Fees',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      title: 'Direct Calendar Hire',
      subtitle: 'Fast 48-Hour Turnaround',
      highlights: ['1-Click Calendar Booking', 'Zero Placement Commissions'],
      icon: TrendingUp,
      ctaText: 'Employer Portal',
      ctaLink: '/employer'
    }
  ];

  const currentSteps = activeTab === 'candidate' ? candidateSteps : employerSteps;

  return (
    <section 
      id="how-it-works" 
      className="relative w-full bg-slate-50/40 py-3 sm:py-4 lg:py-5 px-2 sm:px-4 lg:px-6 overflow-hidden scroll-mt-20"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        {/* SLIM BOXED CONTAINER */}
        <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] transition-all duration-300 mx-3 sm:mx-6 lg:mx-8 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-7 lg:py-5 relative overflow-hidden">
          
          {/* SLIM SECTION HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1">
              <Zap className="w-3 h-3 text-blue-600" />
              HOW IT WORKS
            </span>

            <h2 className="text-base sm:text-lg lg:text-[20px] font-bold text-slate-900 tracking-tight font-display leading-tight">
              Simple 4-Step Process <span className="text-blue-600">for Candidates & Employers</span>
            </h2>

            {/* COMPACT ROLE SWITCHER TOGGLE */}
            <div className="pt-1 flex justify-center">
              <div className="inline-flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 shadow-2xs gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('candidate')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'candidate'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <GraduationCap className={`w-3.5 h-3.5 ${activeTab === 'candidate' ? 'text-white' : 'text-slate-500'}`} />
                  <span>For Candidates & Freshers</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('employer')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'employer'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Building2 className={`w-3.5 h-3.5 ${activeTab === 'employer' ? 'text-white' : 'text-slate-500'}`} />
                  <span>For Employers & Recruiters</span>
                </button>
              </div>
            </div>
          </div>

          {/* SLIM 4 CONNECTED STEPS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-3.5 items-stretch relative">
            {currentSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-slate-50/50 hover:bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/70 hover:border-blue-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Connective Chevron on desktop */}
                  {idx < currentSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4.5 h-4.5 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-2xs pointer-events-none">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  )}

                  <div>
                    {/* Top Row: Step Number, Badge & Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-5.5 h-5.5 rounded-md bg-white border border-slate-200/80 text-slate-800 font-extrabold text-[10px] flex items-center justify-center shadow-2xs">
                          {step.number}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${step.badgeColor}`}>
                          {step.badge}
                        </span>
                      </div>

                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100/80 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-2xs">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-[13px] sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight font-display mb-0.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-semibold text-blue-600/90 uppercase tracking-wider mb-2">
                      {step.subtitle}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-1 mb-2.5 pt-2 border-t border-slate-200/50">
                      {step.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  {step.ctaText && step.ctaLink && (
                    <div className="pt-1.5 border-t border-slate-100">
                      {step.ctaLink.startsWith('/#') || step.ctaLink.startsWith('#') ? (
                        <a
                          href={step.ctaLink}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                        >
                          <span>{step.ctaText}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <Link
                          to={step.ctaLink}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                        >
                          <span>{step.ctaText}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
