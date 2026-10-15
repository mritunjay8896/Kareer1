import React from 'react';
import { GlitreadLanding } from '../components/Home/GlitreadLanding';

interface LandingPageProps {
  onOpenAuth?: (mode: 'login' | 'register', role?: 'candidate' | 'employer') => void;
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
      <GlitreadLanding onOpenAuth={onOpenAuth} />
    </div>
  );
};
