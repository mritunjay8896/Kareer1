import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Building2, 
  Bookmark, 
  Sparkles, 
  Star, 
  ChevronDown, 
  ChevronRight,
  Plus, 
  Minus, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  BarChart3, 
  Layers, 
  Send, 
  FileText, 
  Layout, 
  ExternalLink, 
  Compass, 
  MapPin, 
  TrendingUp, 
  Palette,
  Check,
  Globe,
  Share2
} from 'lucide-react';

import boyBannerImg from '../../image1/boybanner.png';
import internBoyImg from '../../image1/intern_boy.png';
import collegeProffesionalImg from '../../image1/college_proffesional.png';
import boyWorkingHeroImg from '../../image1/boy_working_hero.png';

interface GlitreadLandingProps {
  onOpenAuth?: (mode: 'login' | 'register', role?: 'candidate' | 'employer') => void;
}

export const GlitreadLanding: React.FC<GlitreadLandingProps> = ({ onOpenAuth }) => {
  const navigate = useNavigate();

  // Search & Filter State in Section 7
  const [candidateSearchQuery, setCandidateSearchQuery] = useState('');
  const [candidateExperienceFilter, setCandidateExperienceFilter] = useState('All');
  const [candidateLocationFilter, setCandidateLocationFilter] = useState('All');
  const [savedCandidateIds, setSavedCandidateIds] = useState<string[]>(['c-1', 'c-3']);

  // FAQ Accordion State (Section 9) - default index 0 open or null
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Quick Action Modal for "Hire Talent"
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [hireFormSubmitted, setHireFormSubmitted] = useState(false);
  const [hireForm, setHireForm] = useState({ company: '', role: '', email: '', phone: '' });

  // 10 Hiring Categories (Section 2)
  const hiringCategories = [
    {
      title: 'Software Developers',
      desc: 'Build great products',
      icon: Code2,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100',
      filterRole: 'Software Developer'
    },
    {
      title: 'QA & Software Testers',
      desc: 'Ensure quality',
      icon: CheckCircle2,
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-600',
      borderColor: 'border-sky-100',
      filterRole: 'QA Engineer'
    },
    {
      title: 'DevOps Engineers',
      desc: 'Keep systems running',
      icon: Terminal,
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-100',
      filterRole: 'DevOps Engineer'
    },
    {
      title: 'IT Support & Operations',
      desc: 'Support & maintain',
      icon: Cpu,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-100',
      filterRole: 'IT Support'
    },
    {
      title: 'Business Operations',
      desc: 'Drive efficiency',
      icon: Building2,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100',
      filterRole: 'Business Operations'
    },
    {
      title: 'Consultants',
      desc: 'Provide strategic advice',
      icon: Compass,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100',
      filterRole: 'Consultant'
    },
    {
      title: 'Business Development',
      desc: 'Grow your business',
      icon: TrendingUp,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-100',
      filterRole: 'Business Development'
    },
    {
      title: 'UI/UX Designers',
      desc: 'Create better experiences',
      icon: Palette,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-100',
      filterRole: 'UI/UX Designer'
    },
    {
      title: 'Data Analysts',
      desc: 'Turn data into insights',
      icon: BarChart3,
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      borderColor: 'border-teal-100',
      filterRole: 'Data Analyst'
    },
    {
      title: 'Interns & Fresh Graduates',
      desc: 'Build your future team',
      icon: GraduationCap,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100',
      filterRole: 'Intern'
    }
  ];

  // Verified Candidate Profiles (Section 7)
  const candidateProfiles = [
    {
      id: 'c-1',
      name: 'Aman Verma',
      role: 'Software Developer',
      experience: '1-2 Years',
      location: 'Bangalore',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
      skills: ['React', 'Node.js', 'Java'],
      bio: 'Full stack builder with experience in high-scale microservices.'
    },
    {
      id: 'c-2',
      name: 'Sneha Reddy',
      role: 'QA Engineer',
      experience: '2-3 Years',
      location: 'Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      skills: ['Selenium', 'Testing', 'SQL'],
      bio: 'Automation specialist with expertise in Selenium WebDriver and API testing.'
    },
    {
      id: 'c-3',
      name: 'Rohit Kumar',
      role: 'DevOps Engineer',
      experience: '3-4 Years',
      location: 'Pune',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      skills: ['AWS', 'Docker', 'Linux'],
      bio: 'Cloud architecture & CI/CD deployment automation.'
    },
    {
      id: 'c-4',
      name: 'Priya Singh',
      role: 'UI/UX Designer',
      experience: 'Fresher',
      location: 'Delhi NCR',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      skills: ['Figma', 'UI/UX', 'HTML'],
      bio: 'Passionate about clean user journeys and responsive design systems.'
    }
  ];

  // Filtered Candidates
  const filteredCandidates = candidateProfiles.filter((candidate) => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(candidateSearchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(candidateSearchQuery.toLowerCase()) ||
      candidate.skills.some(s => s.toLowerCase().includes(candidateSearchQuery.toLowerCase())) ||
      candidate.location.toLowerCase().includes(candidateSearchQuery.toLowerCase());
    
    const matchesExp = 
      candidateExperienceFilter === 'All' || 
      candidate.experience.toLowerCase().includes(candidateExperienceFilter.toLowerCase());

    const matchesLoc = 
      candidateLocationFilter === 'All' || 
      candidate.location.toLowerCase() === candidateLocationFilter.toLowerCase();

    return matchesSearch && matchesExp && matchesLoc;
  });

  const toggleBookmark = (id: string) => {
    setSavedCandidateIds(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  // FAQs (Section 9)
  const faqs = [
    {
      q: 'How do I create a profile on Glitread?',
      a: 'Click "Create Your Profile" or "Sign Up" to register in seconds. Add your education, technical skills, projects, and career preferences to instantly create a public showcase portfolio and ATS-ready profile.'
    },
    {
      q: 'Can I build a resume without a profile?',
      a: 'Yes! You can use our ATS Resume Builder directly to draft, customize, and export single-page Harvard-format resumes without needing an account.'
    },
    {
      q: 'How can employers find candidates?',
      a: 'Employers can browse our pre-screened talent pool by technical skill, years of experience, and location, or post specific openings to receive vetted applications directly.'
    },
    {
      q: 'Is Glitread free to use?',
      a: 'Yes, Glitread is 100% free for job candidates and students. Build resumes, host portfolio websites, and apply to job opportunities without any subscription or hidden fees.'
    },
    {
      q: 'How do I get started?',
      a: 'Select whether you are looking to hire talent or land your dream job. Click "Explore Opportunities" to browse live openings or "Hire Talent" to access our verified candidate pool.'
    }
  ];

  const handleHireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHireFormSubmitted(true);
    setTimeout(() => {
      setHireModalOpen(false);
      setHireFormSubmitted(false);
      setHireForm({ company: '', role: '', email: '', phone: '' });
    }, 2500);
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          1. HERO SECTION (Photocopy replication of screenshot top section)
          ========================================================================= */}
      <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 bg-white overflow-hidden relative border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Green Pill Badge: Zero Unemployed India */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F0] text-[#10B981] text-xs font-bold tracking-tight shadow-2xs">
                <span>Zero Unemployed India</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.08] font-display">
                  Hire From Us. <br />
                  <span className="text-[#2563EB]">Get Hired Fast.</span>
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
                Connect with 2 lakh+ freshers and experienced professionals across technology, operations, and business roles.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => setHireModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>Hire Talent</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-2 bg-white hover:bg-blue-50/50 border border-[#2563EB] text-[#2563EB] font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full transition-all cursor-pointer group"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 3 Stat Badges underneath buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-slate-700">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">2 Lakh+</span>
                    <span className="text-slate-500 ml-1">Talent Pool</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-slate-900">Freshers &amp; Experienced</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-slate-900">Multiple Skills &amp; Domains</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols): 4 Indian Tech Professionals 3D Render (boybanner.png) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[540px]">
                {/* Soft ambient radial lighting */}
                <div className="absolute inset-0 m-auto w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/60 via-sky-50/40 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />
                
                <img
                  src={boyBannerImg}
                  alt="4 young Indian professionals squad illustration"
                  className="relative z-10 w-full h-auto object-contain max-h-[440px] sm:max-h-[500px] select-none drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. HIRE FROM US: 2 LAKH+ TALENT POOL & 10 CATEGORIES
          ========================================================================= */}
      <section id="career-tools" className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Top Banner Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            {/* Left title & copy */}
            <div className="space-y-2 text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight font-display">
                Hire From Us: <span className="text-[#2563EB]">2 Lakh+ Talent Pool</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Find the right people for your business, from interns and freshers to experienced professionals.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setHireModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Explore Talent Pool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 3 Stat Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-blue-50/60 border border-blue-100 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-extrabold text-sm text-slate-900 leading-tight">2,00,000+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Talent Pool</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-blue-50/60 border border-blue-100 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-extrabold text-sm text-slate-900 leading-tight">Multiple</div>
                  <div className="text-[11px] text-slate-500 font-medium">Skills &amp; Domains</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-blue-50/60 border border-blue-100 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-extrabold text-sm text-slate-900 leading-tight">Freshers &amp;</div>
                  <div className="text-[11px] text-slate-500 font-medium">Experienced</div>
                </div>
              </div>
            </div>
          </div>

          {/* Subheading: Top Hiring Categories */}
          <div className="pt-8 text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6">
              Top Hiring Categories
            </h3>

            {/* 10 Category Cards Grid (5 cols desktop, 2 cols mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {hiringCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setCandidateSearchQuery(cat.filterRole);
                      const el = document.getElementById('candidate-directory');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-left cursor-pointer group"
                  >
                    <div className={`w-9 h-9 rounded-xl ${cat.bgColor} ${cat.iconColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs sm:text-[13px] text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                      {cat.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. "LOOKING FOR INTERNS OR EXPERIENCED PROFESSIONALS? WE'VE GOT YOU COVERED"
          ========================================================================= */}
      <section id="talent-pool" className="py-14 sm:py-16 bg-white border-b border-slate-100 text-center">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-10 text-center space-y-1">
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Looking for Interns or Experienced Professionals?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight font-display">
              We've Got You Covered.
            </h2>
          </div>

          {/* Two Large Dual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: Interns & Fresh Graduates (Teal / Mint Tint) */}
            <div className="rounded-3xl bg-[#E6F8F6] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border border-teal-100 text-left relative overflow-hidden group">
              <div className="w-36 sm:w-44 shrink-0 flex items-center justify-center">
                <img
                  src={internBoyImg}
                  alt="Intern with laptop"
                  className="w-full h-auto object-contain max-h-[170px] select-none drop-shadow-md group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Interns &amp; Fresh Graduates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Find early-career talent for internships and entry-level roles.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCandidateExperienceFilter('Fresher');
                      const el = document.getElementById('candidate-directory');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xs cursor-pointer group-hover:shadow transition-all"
                  >
                    <span>Find Interns &amp; Freshers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Experienced Professionals (Lavender / Soft Blue Tint) */}
            <div className="rounded-3xl bg-[#EEF4FF] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border border-blue-100 text-left relative overflow-hidden group">
              <div className="w-36 sm:w-44 shrink-0 flex items-center justify-center">
                <img
                  src={collegeProffesionalImg}
                  alt="Experienced professional in suit"
                  className="w-full h-auto object-contain max-h-[170px] select-none drop-shadow-md group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Experienced Professionals
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discover professionals with relevant experience and role-specific skills.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCandidateExperienceFilter('1-2 Years');
                      const el = document.getElementById('candidate-directory');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xs cursor-pointer group-hover:shadow transition-all"
                  >
                    <span>Find Experienced Talent</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. "FROM UNEMPLOYED INDIA TO INDIA'S STRONGEST TALENT POOL"
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="rounded-3xl bg-gradient-to-r from-[#EFF6FF] via-[#F4F8FF] to-[#EAF2FF] p-6 sm:p-10 lg:p-12 border border-blue-100/80 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Left Content */}
            <div className="space-y-4 max-w-xl text-left z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight font-display leading-[1.15]">
                From Unemployed India to <br />
                <span className="text-[#2563EB]">India's Strongest Talent Pool</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Glitread connects talented individuals with the right opportunities and helps employers build their dream teams.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onOpenAuth ? onOpenAuth('register') : navigate('/register')}
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Join Glitread</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Desk Worker 3D Graphic */}
            <div className="w-full lg:w-auto flex items-center justify-center relative z-10">
              <div className="relative max-w-[420px] w-full">
                <img
                  src={boyWorkingHeroImg}
                  alt="Indian developer working at office desk with laptop and plant"
                  className="w-full h-auto object-contain max-h-[260px] drop-shadow-md select-none"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. 4-STEP PROCESS: "BUILT FOR CANDIDATES. DISCOVERED BY EMPLOYERS."
          ========================================================================= */}
      <section id="for-candidates" className="py-14 sm:py-16 bg-white border-b border-slate-100 text-center">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-12 space-y-1">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 tracking-tight font-display">
              Built for <span className="text-[#2563EB]">Candidates.</span> Discovered by <span className="text-[#2563EB]">Employers.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Create your profile, build your resume and get discovered by top employers.
            </p>
          </div>

          {/* 4 Process Cards Connected by Chevrons matching Screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            
            {/* Step 1 */}
            <div className="relative p-5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-slate-900">
                  1. Create Your Profile
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Showcase your skills, education and experience.
                </p>
              </div>
              <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400 z-10" />
            </div>

            {/* Step 2 */}
            <div className="relative p-5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-slate-900">
                  2. Highlight Your Skills
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Add projects, achievements and work experience.
                </p>
              </div>
              <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400 z-10" />
            </div>

            {/* Step 3 */}
            <div className="relative p-5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-slate-900">
                  3. Build Your Resume
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Create a professional resume in minutes.
                </p>
              </div>
              <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400 z-10" />
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-slate-900">
                  4. Get Discovered
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Let employers find you through our platform.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. "BUILD YOUR PROFILE. GET HIRED." & DASHBOARD MOCKUP
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display leading-[1.12]">
                Build Your Profile. <br />
                <span className="text-[#2563EB]">Get Hired.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                Showcase your skills, build a professional resume, and help employers discover your potential.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/candidate/profile"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-xs hover:shadow transition-all"
                >
                  <span>Create Your Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/resume-builder"
                  className="inline-flex items-center gap-2 bg-white hover:bg-blue-50/50 border border-[#2563EB] text-[#2563EB] text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
                >
                  <span>Build Resume</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Web Mockup (7 cols) - Replicating Dashboard in Screenshot */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 shadow-lg p-3 sm:p-5 overflow-hidden">
                {/* Mockup Header bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-bold text-slate-800 ml-2">glitread</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">dashboard.glitread.in</div>
                </div>

                {/* Split Mockup Body */}
                <div className="grid grid-cols-12 gap-3 items-start">
                  
                  {/* Left Mini Sidebar */}
                  <div className="col-span-3 bg-white rounded-xl border border-slate-100 p-2.5 space-y-2 text-left">
                    <div className="text-[9px] font-bold text-slate-400 uppercase">Navigation</div>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold">
                      <Users className="w-3 h-3" />
                      <span>Profile</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 text-slate-600 rounded-lg text-[10px]">
                      <FileText className="w-3 h-3" />
                      <span>Resume</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 text-slate-600 rounded-lg text-[10px]">
                      <Compass className="w-3 h-3" />
                      <span>Settings</span>
                    </div>
                  </div>

                  {/* Center Mini Profile Card */}
                  <div className="col-span-4 bg-white rounded-xl border border-slate-100 p-3 space-y-2 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">
                        YG
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-900 leading-tight">Yash Gupta</div>
                        <div className="text-[8px] text-slate-400">Full Stack Engineer</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-1">
                      <span className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">React</span>
                      <span className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Node</span>
                      <span className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">SQL</span>
                    </div>
                    <button className="w-full text-center bg-[#2563EB] text-white py-1 rounded-md text-[9px] font-bold">
                      Update Profile
                    </button>
                  </div>

                  {/* Right Mini Resume Panel */}
                  <div className="col-span-5 bg-white rounded-xl border border-slate-100 p-3 space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] font-bold text-slate-900">Resume Builder</div>
                      <span className="text-[8px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">
                        Download PDF
                      </span>
                    </div>
                    <div className="text-[9px] font-bold text-slate-800">Rohit Sharma</div>
                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-slate-100 rounded" />
                      <div className="w-4/5 h-1.5 bg-slate-100 rounded" />
                      <div className="w-3/5 h-1.5 bg-slate-100 rounded" />
                    </div>
                    <div className="pt-1 text-[8px] text-slate-400">
                      ✓ Harvard ATS format verified
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. "LET EMPLOYERS DISCOVER YOU." & LIVE CANDIDATE DIRECTORY
          ========================================================================= */}
      <section id="candidate-directory" className="py-14 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Header */}
          <div className="text-left mb-6 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              Let Employers Discover You.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Search and filter through verified profiles to find the right talent.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-2 sm:p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-2 sm:gap-3 mb-8">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={candidateSearchQuery}
                onChange={(e) => setCandidateSearchQuery(e.target.value)}
                placeholder="Search by skills, role, or location..."
                className="w-full pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <select
                value={candidateExperienceFilter}
                onChange={(e) => setCandidateExperienceFilter(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-700 outline-none cursor-pointer"
              >
                <option value="All">Experience: All</option>
                <option value="Fresher">Fresher</option>
                <option value="1-2 Years">1-2 Years</option>
                <option value="2-3 Years">2-3 Years</option>
                <option value="3-4 Years">3-4 Years</option>
              </select>

              <select
                value={candidateLocationFilter}
                onChange={(e) => setCandidateLocationFilter(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-700 outline-none cursor-pointer"
              >
                <option value="All">Location: All</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Delhi NCR">Delhi NCR</option>
              </select>

              <button
                type="button"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-5 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>

          {/* 4 Candidate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <img
                      src={candidate.avatar}
                      alt={candidate.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-2xs"
                    />
                    <button
                      type="button"
                      onClick={() => toggleBookmark(candidate.id)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        savedCandidateIds.includes(candidate.id)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                      title="Save candidate"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900">{candidate.name}</h3>
                  <div className="text-xs text-slate-500 font-medium">{candidate.role}</div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {candidate.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">{candidate.location}</span>
                  <button
                    type="button"
                    onClick={() => setHireModalOpen(true)}
                    className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. TESTIMONIALS: "WHAT OUR USERS SAY"
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-100 text-center">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="max-w-2xl mx-auto mb-10 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              What Our Users Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Real stories from candidates and employers who found success on Glitread.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Review 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Ananya Sharma"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-xs text-slate-900">Ananya Sharma</div>
                    <div className="text-[11px] text-slate-400">Software Developer · B.Tech CSE</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "Glitread helped me showcase my skills and connect with great opportunities."
                </p>
              </div>
              <div className="flex items-center gap-1 pt-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Vikram Patel"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-xs text-slate-900">Vikram Patel</div>
                    <div className="text-[11px] text-slate-400">Hiring Manager</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "We found talented and motivated candidates quickly. Great platform!"
                </p>
              </div>
              <div className="flex items-center gap-1 pt-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Neha Gupta"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-xs text-slate-900">Neha Gupta</div>
                    <div className="text-[11px] text-slate-400">UI/UX Designer · B.Sc IT</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "The profile and resume builder is simple and really helpful."
                </p>
              </div>
              <div className="flex items-center gap-1 pt-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. FREQUENTLY ASKED QUESTIONS (FAQ)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5 text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                Find answers to common questions about hiring, profiles and resumes.
              </p>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 overflow-hidden text-left transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 text-left transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400 shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          10. PRE-FOOTER CALLOUT: "READY TO HIRE OR LAUNCH YOUR CAREER?"
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="rounded-3xl bg-gradient-to-r from-[#EFF6FF] via-[#F4F8FF] to-[#EAF2FF] p-6 sm:p-10 lg:p-12 border border-blue-100 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Left Content */}
            <div className="space-y-4 max-w-xl text-left z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight font-display leading-[1.15]">
                Ready to Hire or Launch Your Career?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Find talent, showcase your skills, and connect with new opportunities through Glitread.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setHireModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Hire Talent</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/candidate/profile"
                  className="inline-flex items-center gap-2 bg-white hover:bg-blue-50/50 border border-[#2563EB] text-[#2563EB] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all cursor-pointer"
                >
                  <span>Create Your Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Graphic: Desk Worker Launching Paper Airplane */}
            <div className="w-full lg:w-auto flex items-center justify-center relative z-10">
              <div className="relative max-w-[380px] w-full">
                <img
                  src={boyWorkingHeroImg}
                  alt="Career launch illustration"
                  className="w-full h-auto object-contain max-h-[220px] drop-shadow-md select-none"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          MODAL: HIRE TALENT FAST INQUIRY
          ========================================================================= */}
      {hireModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-left space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 font-display">Hire Verified Talent</h3>
                <p className="text-xs text-slate-500">Connect with pre-screened Indian candidates in 48 hours.</p>
              </div>
              <button
                type="button"
                onClick={() => setHireModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {hireFormSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Request Received!</div>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Our talent matching team will share verified candidate portfolios with you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleHireSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    value={hireForm.company}
                    onChange={(e) => setHireForm({ ...hireForm, company: e.target.value })}
                    placeholder="e.g. Acme Tech Solutions"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Role Looking to Hire</label>
                  <input
                    type="text"
                    required
                    value={hireForm.role}
                    onChange={(e) => setHireForm({ ...hireForm, role: e.target.value })}
                    placeholder="e.g. Full Stack Developer, QA Tester, Intern"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={hireForm.email}
                      onChange={(e) => setHireForm({ ...hireForm, email: e.target.value })}
                      placeholder="hr@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={hireForm.phone}
                      onChange={(e) => setHireForm({ ...hireForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs py-3 rounded-full transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    Request Pre-Screened Candidates
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
