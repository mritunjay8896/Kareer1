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
      className="relative w-full bg-[#F8FAFC] py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 overflow-hidden scroll-mt-20"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        {/* ENTERPRISE BOXED CONTAINER */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 mx-3 sm:mx-6 lg:mx-8 px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8 relative overflow-hidden">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 space-y-1.5">
            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              PROCESS WORKFLOW
            </span>

            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-950 tracking-tight font-display leading-tight">
              Simple 4-Step Process <span className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">for Candidates & Employers</span>
            </h2>

            {/* ENTERPRISE ROLE SWITCHER TOGGLE */}
            <div className="pt-2 flex justify-center">
              <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/90 shadow-2xs gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('candidate')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'candidate'
                      ? 'bg-[#1E40AF] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <GraduationCap className={`w-3.5 h-3.5 ${activeTab === 'candidate' ? 'text-white' : 'text-slate-500'}`} />
                  <span>For Candidates & Freshers</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('employer')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'employer'
                      ? 'bg-[#1E40AF] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Building2 className={`w-3.5 h-3.5 ${activeTab === 'employer' ? 'text-white' : 'text-slate-500'}`} />
                  <span>For Employers & Recruiters</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 ENTERPRISE CONNECTED STEPS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4.5 items-stretch relative">
            {currentSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white hover:bg-[#F8FAFC]/80 rounded-2xl p-4 sm:p-4.5 border border-slate-200/90 hover:border-blue-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Connective Chevron on desktop */}
                  {idx < currentSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-2xs pointer-events-none">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  )}

                  <div>
                    {/* Top Row: Step Number, Badge & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100/80 px-2 py-0.5 rounded-md shadow-2xs">
                          {step.number}
                        </span>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${step.badgeColor}`}>
                          {step.badge}
                        </span>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/80 text-blue-600 flex items-center justify-center group-hover:bg-[#1E40AF] group-hover:text-white transition-all duration-200 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight font-display mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider mb-2.5">
                      {step.subtitle}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-1.5 mb-3 pt-2.5 border-t border-slate-100">
                      {step.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  {step.ctaText && step.ctaLink && (
                    <div className="pt-2 border-t border-slate-100">
                      {step.ctaLink.startsWith('/#') || step.ctaLink.startsWith('#') ? (
                        <a
                          href={step.ctaLink}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors"
                        >
                          <span>{step.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <Link
                          to={step.ctaLink}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors"
                        >
                          <span>{step.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
