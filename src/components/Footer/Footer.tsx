import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Mail 
} from 'lucide-react';

interface FooterProps {
  onSubscribeNewsletter?: (email: string) => void;
  onLinkClick?: (label: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200/90 text-left">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Enterprise Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-slate-200/80">
          
          {/* Brand & Trust Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src="/glitread-logo.svg"
                alt="glitread logo"
                className="w-8 h-8 object-contain shrink-0"
              />
              <span className="font-extrabold text-2xl tracking-tight text-slate-950 leading-none font-display">
                glitread
              </span>
            </Link>

            <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-sm">
              India's modern hiring & career platform. Connecting ambitious candidates with high-growth companies through verified profiles, ATS tooling, and direct recruiter discovery.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Talent Network • 2,50,000+ Active Profiles</span>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm">
                <span className="text-xs font-bold text-slate-900 font-display">Get Weekly Hiring & Job Updates</span>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter work email"
                        required
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Navigation Links Columns (8 cols: 3 + 3 + 2) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Candidates & Platform */}
            <div className="space-y-3.5">
              <h4 className="font-bold text-slate-950 text-sm tracking-tight font-display">
                For Candidates
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-medium">
                <li>
                  <Link to="/jobs" className="hover:text-blue-600 transition-colors">
                    Explore Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/jobs?filter=Fresher" className="hover:text-blue-600 transition-colors">
                    Fresher Openings
                  </Link>
                </li>
                <li>
                  <Link to="/jobs?search=Internship" className="hover:text-blue-600 transition-colors">
                    Student Internships
                  </Link>
                </li>
                <li>
                  <Link to="/resume-builder" className="hover:text-blue-600 transition-colors">
                    ATS Resume Builder
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-blue-600 transition-colors">
                    1-Click Web Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/government-jobs" className="hover:text-blue-600 transition-colors">
                    Government Job Alerts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Employers & Enterprise */}
            <div className="space-y-3.5">
              <h4 className="font-bold text-slate-950 text-sm tracking-tight font-display">
                For Employers
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-medium">
                <li>
                  <Link to="/employer" className="hover:text-blue-600 transition-colors">
                    Recruiter Overview
                  </Link>
                </li>
                <li>
                  <Link to="/search-profiles" className="hover:text-blue-600 transition-colors">
                    Candidate Talent Pool
                  </Link>
                </li>
                <li>
                  <Link to="/employers/register" className="hover:text-blue-600 transition-colors">
                    Post Vacancies Free
                  </Link>
                </li>
                <li>
                  <Link to="/employers/login" className="hover:text-blue-600 transition-colors">
                    Recruiter Portal
                  </Link>
                </li>
                <li>
                  <a href="/#talent-pool" className="hover:text-blue-600 transition-colors">
                    48-Hour Shortlists
                  </a>
                </li>
                <li>
                  <Link to="/autofill-extension" className="hover:text-blue-600 transition-colors">
                    Autofill Extension
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company & Governance */}
            <div className="space-y-3.5 col-span-2 sm:col-span-1">
              <h4 className="font-bold text-slate-950 text-sm tracking-tight font-display">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-medium">
                <li>
                  <Link to="/landing" className="hover:text-blue-600 transition-colors">
                    About Glitread
                  </Link>
                </li>
                <li>
                  <a href="/#how-it-works" className="hover:text-blue-600 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-blue-600 transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <Link to="/challenges" className="hover:text-blue-600 transition-colors">
                    Hackathons & Challenges
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@glitread.com" className="hover:text-blue-600 transition-colors">
                    Support & Inquiries
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Sub-footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span>© 2026 Glitread Platform. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">Security Standards</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">System Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
