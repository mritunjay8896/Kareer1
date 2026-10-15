import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onSubscribeNewsletter?: (email: string) => void;
  onLinkClick?: (label: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-white text-slate-600 pt-12 pb-8 border-t border-slate-200/90 text-left">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="space-y-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/glitread-logo.svg"
                alt="glitread logo"
                className="w-7 h-7 object-contain shrink-0"
              />
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none font-display">
                glitread
              </span>
            </Link>
            <p className="text-xs text-slate-500 font-medium">
              Build. Showcase. Get Discovered.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs">Platform</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link to="/jobs" className="hover:text-blue-600 transition-colors">
                  Explore Jobs
                </Link>
              </li>
              <li>
                <Link to="/internships" className="hover:text-blue-600 transition-colors">
                  Internships & Fresher Roles
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-600 transition-colors">
                  Portfolio Website Builder
                </Link>
              </li>
              <li>
                <Link to="/resume-builder" className="hover:text-blue-600 transition-colors">
                  ATS Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/government-jobs" className="hover:text-blue-600 transition-colors">
                  Government Job Alerts
                </Link>
              </li>
              <li>
                <a href="/#faq" className="hover:text-blue-600 transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Employers Column */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs">For Employers</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link to="/employers/login" className="hover:text-blue-600 transition-colors">
                  Recruiter Portal
                </Link>
              </li>
              <li>
                <Link to="/search-profiles" className="hover:text-blue-600 transition-colors">
                  Search Candidate Talent Pool
                </Link>
              </li>
              <li>
                <a href="/#talent-pool" className="hover:text-blue-600 transition-colors">
                  Hire In 48 Hours
                </a>
              </li>
              <li>
                <Link to="/autofill-extension" className="hover:text-blue-600 transition-colors">
                  1-Click Autofill Extension
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs">Company & Legal</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link to="/landing" className="hover:text-blue-600 transition-colors">
                  About glitread
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-blue-600 transition-colors">
                  Zero Unemployed Mission
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="hover:text-blue-600 transition-colors">
                  Coding Challenges & Hackathons
                </Link>
              </li>
              <li>
                <a href="mailto:support@glitread.com" className="hover:text-blue-600 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 Glitread. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
