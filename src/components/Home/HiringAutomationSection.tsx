import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';

interface AutomationCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const AUTOMATION_CARDS: AutomationCard[] = [
  {
    id: 'ai-interviewer',
    title: 'AI Technical Video Screening',
    description: 'Automated conversational AI conducts round-the-clock preliminary interviews, evaluating technical depth, fundamentals, and communication skills before human rounds.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coding-tests',
    title: 'Automated Coding Assessments',
    description: 'Send sandboxed programming challenges with real-time test execution, benchmark scoring, automated grading, and comprehensive code quality diagnostics.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'scheduler',
    title: 'Smart Calendar Coordination',
    description: 'Self-service interview scheduling synced directly with Google Meet, Zoom, and Outlook calendars to eliminate back-and-forth email delays.',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'resume-screening',
    title: 'Resume & Portfolio Verification',
    description: 'Instant AI resume parsing and portfolio evaluation that automatically validates candidate credentials, code repos, and past project experience.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'benchmarking',
    title: 'Real-Time Candidate Benchmarking',
    description: 'Compare candidate scores across coding accuracy, system design, and communication to shortlist the top percentiles effortlessly.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pipeline',
    title: 'Automated Pipeline & Offer Loops',
    description: 'Trigger candidate stage updates, send personalized feedback loops, and deliver offer letters seamlessly with trackable acceptance links.',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80'
  }
];

export const HiringAutomationSection: React.FC = () => {
  return (
    <section id="hiring-automation" className="relative w-full bg-slate-50/40 py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 border-none overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
      
      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] transition-all duration-300 mx-3 sm:mx-6 lg:mx-8 px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-9 relative overflow-hidden">
        
          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-display leading-snug">
              Screen, Test & Interview Candidates <br className="hidden sm:inline" />
              <span className="text-blue-600">On Complete Autopilot</span>
            </h2>

            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Cut recruitment turnaround from 3 weeks to 48 hours. Deploy AI-driven preliminary interviews, assign hands-on coding tests, and sync interviews directly into your calendar.
            </p>
          </div>

          {/* 6 CARDS GRID: NO TAGS, FAKE IMAGE AND TEXT ONLY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
            {AUTOMATION_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-blue-300 rounded-2xl p-5 sm:p-5.5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group overflow-hidden"
              >
                <div className="overflow-hidden rounded-xl bg-slate-100 aspect-[16/10] mb-4">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight font-display mb-1.5 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM QUICK-METRICS STRIP */}
          <div className="mt-8 sm:mt-10 bg-slate-50/60 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="px-2 sm:px-4">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600 font-display">
                  72%
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1">Faster Time-to-Hire</p>
                <p className="text-xs text-slate-500 mt-0.5">From candidate apply to first technical round</p>
              </div>

              <div className="px-2 sm:px-4 pt-4 sm:pt-0">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-600 font-display">
                  Zero
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1">Resume Spam</p>
                <p className="text-xs text-slate-500 mt-0.5">Pre-screened against real coding benchmarks</p>
              </div>

              <div className="px-2 sm:px-4 pt-4 sm:pt-0">
                <span className="text-2xl sm:text-3xl font-bold text-indigo-600 font-display">
                  24/7
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1">Automated AI Interviews</p>
                <p className="text-xs text-slate-500 mt-0.5">Screen candidates across any Indian time zone</p>
              </div>

              <div className="px-2 sm:px-4 pt-4 sm:pt-0">
                <span className="text-2xl sm:text-3xl font-bold text-amber-500 font-display">
                  100%
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1">Free for Employers</p>
                <p className="text-xs text-slate-500 mt-0.5">No agency commissions or middleman lock-ins</p>
              </div>
            </div>

            {/* FREQUENTLY ASKED QUESTIONS JUMP LINK */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600 font-medium text-center sm:text-left">
                <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-3.5 h-3.5" />
                </span>
                <span>Have questions about candidate screening, ATS resumes, or hiring automation?</span>
              </div>
              <a 
                href="#faq" 
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold transition-colors group cursor-pointer"
              >
                <span>Read Frequently Asked Questions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
