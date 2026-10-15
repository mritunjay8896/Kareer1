import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  ArrowRight, 
  Sparkles,
  Code2
} from 'lucide-react';
import internBoyImg from '../../image1/intern_boy.png';

export const HomeCareerStages: React.FC = () => {
  const tracks = [
    {
      title: 'College Students & Freshers',
      subtitle: 'Zero experience required',
      desc: 'Build your first ATS resume, get matched to summer internships, and apply to entry-level software & business analyst openings.',
      ctaText: 'Explore Internships',
      ctaLink: '/internships',
      icon: GraduationCap,
      badge: 'Freshers Track',
      color: 'blue'
    },
    {
      title: 'Experienced Working Pros',
      subtitle: '1 to 8+ Years Experience',
      desc: 'Upgrade your career with direct recruiter access at funded startups, MNCs, and tech leaders offering top compensation bands.',
      ctaText: 'Browse Senior Roles',
      ctaLink: '/jobs?experience=3-5+Yrs',
      icon: Briefcase,
      badge: 'Mid & Senior Track',
      color: 'emerald'
    },
    {
      title: 'Hackathons & Coding Challenges',
      subtitle: 'Win Cash & Direct Interviews',
      desc: 'Compete in weekend algorithmic challenges, real-world frontend build-offs, and earn direct interview fast-tracks.',
      ctaText: 'Join Challenges',
      ctaLink: '/challenges',
      icon: Trophy,
      badge: 'Compete & Win',
      color: 'purple'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Built For Every Career Stage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-display leading-[1.15]">
            From First College Internship to <br />
            <span className="text-blue-600">Senior Lead Engineering Roles</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Tailored career pathways and direct hiring connections regardless of where you are in your career journey.
          </p>
        </div>

        {/* 3 Tracks + 3D Intern Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Cards: 3 Tracks (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.title}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                        {track.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {track.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {track.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                      {track.desc}
                    </p>
                  </div>

                  <Link
                    to={track.ctaLink}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-200 transition-all shrink-0 cursor-pointer"
                  >
                    <span>{track.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right 3D Visual (5 cols): intern_boy.png */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[380px] flex items-center justify-center">
              <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-blue-100/60 blur-3xl pointer-events-none -z-0" />
              <img
                src={internBoyImg}
                alt="Student intern working on laptop"
                className="relative z-10 w-full h-auto object-contain max-h-[400px] select-none drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
