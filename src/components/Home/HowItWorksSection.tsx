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
  Zap
} from 'lucide-react';

interface StepItem {
  number: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
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
      subtitle: 'ATS Checker & Portfolio',
      description: 'Build an ATS-optimized resume or launch a 1-click web portfolio with GitHub projects & certifications.',
      highlights: ['ATS Resume Checker', 'Shareable Portfolio URL'],
      icon: FileText,
      ctaText: 'Build ATS Resume',
      ctaLink: '/resume-builder'
    },
    {
      number: '02',
      badge: 'Verified',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
      title: 'Discover Roles',
      subtitle: 'Freshers & Internships',
      description: 'Filter verified openings with transparent salaries and apply directly with 0 placement fees.',
      highlights: ['Transparent Salaries', 'Direct Recruiter Reach'],
      icon: Search,
      ctaText: 'Browse Jobs',
      ctaLink: '/jobs'
    },
    {
      number: '03',
      badge: 'AI Badges',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      title: 'AI Practice & Prep',
      subtitle: 'Automated Interview Prep',
      description: 'Take AI mock interviews and coding challenges to earn verified badges and stand out to top teams.',
      highlights: ['AI Mock Interviews', 'Verified Skill Badges'],
      icon: Bot,
      ctaText: 'View Challenges',
      ctaLink: '/challenges'
    },
    {
      number: '04',
      badge: 'Get Hired',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/60',
      title: 'Interview & Offers',
      subtitle: 'Direct Offers & 0% Fees',
      description: 'Book recruiter calendar slots directly, interview with hiring teams, and secure 100% take-home offers.',
      highlights: ['Calendar Sync', '0% Salary Deduction'],
      icon: Rocket,
      ctaText: 'Explore Talent',
      ctaLink: '/#talent-pool'
    }
  ];

  const employerSteps: StepItem[] = [
    {
      number: '01',
      badge: '2.5L+ Pool',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
      title: 'Post Job or Search',
      subtitle: 'Targeted Skill Matching',
      description: 'Publish jobs in 2 minutes or filter 2.5L+ pre-screened freshers and developers by verified tech stack.',
      highlights: ['Free Job Posting', '2.5L+ Verified Talent'],
      icon: Building2,
      ctaText: 'Post a Job',
      ctaLink: '/employers/post-job'
    },
    {
      number: '02',
      badge: 'Autopilot',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      title: 'AI Screening & Tests',
      subtitle: 'Automated Shortlisting',
      description: 'AI agent screens applicants, auto-dispatches coding tests, and surfaces top-tier candidate matches.',
      highlights: ['AI Resume Ranker', 'Auto-Coding Challenges'],
      icon: Sparkles,
      ctaText: 'Hiring Automation',
      ctaLink: '/#hiring-automation'
    },
    {
      number: '03',
      badge: '1-Click Sync',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/60',
      title: 'Calendar Interviews',
      subtitle: 'Direct Slot Booking',
      description: 'Candidates book open slots directly on your Google or Outlook calendar with automated notifications.',
      highlights: ['Google & Outlook Sync', 'Smart Auto-Reminders'],
      icon: CalendarCheck,
      ctaText: 'Employer Portal',
      ctaLink: '/employer'
    },
    {
      number: '04',
      badge: '0% Fees',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      title: 'Hire in 48 Hours',
      subtitle: 'Zero Commission Hiring',
      description: 'Extend direct offers and build high-performance teams in days without expensive agency cuts.',
      highlights: ['Fast 48-Hour Cycle', '0% Commission Fees'],
      icon: TrendingUp,
      ctaText: 'Search Talent',
      ctaLink: '/candidates/search'
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
          <div className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-4 space-y-1">
            <span className="text-[11px] font-semibold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1">
              <Zap className="w-3 h-3 text-blue-600" />
              HOW IT WORKS
            </span>

            <h2 className="text-base sm:text-lg lg:text-[20px] font-bold text-slate-900 tracking-tight font-display leading-tight">
              Simple 4-Step Process <span className="text-blue-600">for Candidates & Employers</span>
            </h2>

            <p className="text-xs text-slate-500 max-w-lg mx-auto font-normal leading-normal">
              Whether you are applying for your next role or building an engineering team, here is how Glitread works with zero fees.
            </p>

            {/* COMPACT ROLE SWITCHER TOGGLE */}
            <div className="pt-1.5 flex justify-center">
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
                    <p className="text-[10px] font-semibold text-blue-600/90 uppercase tracking-wider mb-1.5">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-[11px] text-slate-500 leading-snug mb-2">
                      {step.description}
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
