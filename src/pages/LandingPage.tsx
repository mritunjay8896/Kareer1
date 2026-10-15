import React from 'react';
import { FigmaHero } from '../components/Home/FigmaHero';
import { HowItWorksSection } from '../components/Home/HowItWorksSection';
import { HomeBentoTools } from '../components/Home/HomeBentoTools';
import { HireTalentPoolSection } from '../components/Home/HireTalentPoolSection';
import { WhyGlitreadSection } from '../components/Home/WhyGlitreadSection';
import { HomeTalentShowcase } from '../components/Home/HomeTalentShowcase';
import { HiringAutomationSection } from '../components/Home/HiringAutomationSection';
import { HomeFaqSection } from '../components/Home/HomeFaqSection';

interface LandingPageProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
  onApplyJob?: (job: any) => void;
  onBookmarkJob?: (jobId: string) => void;
  bookmarkedJobIds?: string[];
  onSelectTool?: (toolId: string) => void;
  onEmployerJobPublished?: ((job: any) => void) | ((title: any, company: any) => void);
  onExplorePath?: (path: any) => void;
  onSeoLinkClick?: (url: string, label?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ 
  onOpenAuth,
}) => {
  return (
    <div className="w-full bg-white flex flex-col min-h-screen text-slate-900">
      {/* 1. Hero Section (UNTOUCHED as requested) */}
      <FigmaHero onOpenAuth={onOpenAuth} />

      {/* 2. How It Works Section (For Candidates & Employers) */}
      <HowItWorksSection />

      {/* 3. Career Supertools Bento Grid (3D Illustrations: ATS Resume & Portfolio) */}
      <HomeBentoTools />

      {/* 3. Hire From Us: 2 Lakh+ Talent Pool & Top Categories */}
      <HireTalentPoolSection />

      {/* 4. Why Glitread Platform Strip (Strictly matched to provided design) */}
      <WhyGlitreadSection />

      {/* 5. Pre-Screened Talent Marketplace (3D Illustration: boybanner.png) */}
      <HomeTalentShowcase />

      {/* 6. Recruiter Hiring Automation: AI Interviewer, Send Assignment & Interview Scheduler */}
      <HiringAutomationSection />

      {/* 7. Frequently Asked Questions for SEO (Rich Snippets, Category Filtering & Accordion) */}
      <HomeFaqSection />
    </div>
  );
};
