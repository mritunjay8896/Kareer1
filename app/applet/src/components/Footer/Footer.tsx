import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-slate-600 pt-14 pb-10 border-t border-slate-100 text-left">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="col-span-2 space-y-2">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/glitread-logo.svg"
                alt="glitread logo"
                className="w-7 h-7 object-contain shrink-0"
              />
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none font-display">
                glitread
              </span>
            </Link>
            <p className="text-xs font-bold text-slate-900 pt-0.5">
              Zero Unemployed India
            </p>
          </div>

          {/* Column 1: For Employers */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">For Employers</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="/#talent-pool" className="hover:text-blue-600 transition-colors">
                  Hire Talent
                </a>
              </li>
              <li>
                <Link to="/employer/jobs/new" className="hover:text-blue-600 transition-colors">
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: For Candidates */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">For Candidates</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link to="/candidate/profile" className="hover:text-blue-600 transition-colors">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link to="/resume-builder" className="hover:text-blue-600 transition-colors">
                  Build Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Talent Pool */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">Talent Pool</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="/#candidate-directory" className="hover:text-blue-600 transition-colors">
                  Browse Talent
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">Resources</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link to="/jobs" className="hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="/#faqs" className="hover:text-blue-600 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: About & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">About</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="mailto:support@glitread.in" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Icons Row */}
        <div className="pt-6 pb-6 flex items-center justify-end gap-3 text-slate-500">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-lg hover:text-blue-600 flex items-center justify-center transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-lg hover:text-blue-600 flex items-center justify-center transition-colors"
            title="Twitter / X"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-lg hover:text-blue-600 flex items-center justify-center transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-lg hover:text-blue-600 flex items-center justify-center transition-colors"
            title="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Sub-footer Copyright Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-100">
          <div>
            © 2025 Glitread. All rights reserved.
          </div>
          <div className="font-medium text-slate-500">
            Zero Unemployed India
          </div>
        </div>

      </div>
    </footer>
  );
};
