import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  User, 
  Bookmark, 
  FileText, 
  LayoutDashboard, 
  LogOut, 
  Sparkles, 
  Building2,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const CandidateNavbar: React.FC = () => {
  const { currentUser, userRole, candidateProfile, authInitialized, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/' || currentPath === '/landing';
    return currentPath.startsWith(path);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Fresher Job', path: '/jobs?filter=Fresher' },
    { label: 'Internships', path: '/jobs?search=Internship' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'Portfolio', path: '/portfolio' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 h-[64px] transition-all duration-200 ${
        scrolled
          ? 'bg-white border-b border-slate-200 shadow-sm shadow-slate-900/5'
          : 'bg-white border-b border-slate-200/90 shadow-2xs'
      }`}
    >
      <div className="w-full max-w-[1340px] mx-auto h-full px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo & Desktop Navigation */}
        <div className="flex items-center gap-6 xl:gap-8 shrink-0 min-w-0">
          <Link to="/" className="flex items-center gap-2 group shrink-0" title="glitread">
            <img
              src="/glitread-logo.svg"
              alt="glitread logo"
              className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform object-contain shrink-0"
            />
            <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none font-display">
              glitread
            </span>
          </Link>

          {/* Desktop Candidate Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {/* Home */}
            <Link
              to="/"
              className={`text-xs font-semibold transition-all px-3 py-1.5 rounded-full ${
                isActive('/') && (!location.search || location.pathname === '/')
                  ? 'bg-[#EFF6FF] text-[#2563EB]'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Fresher Job */}
            <Link
              to="/jobs?filter=Fresher"
              className={`text-xs font-semibold transition-all px-3 py-1.5 rounded-full ${
                location.pathname === '/jobs' && location.search.includes('Fresher')
                  ? 'bg-[#EFF6FF] text-[#2563EB]'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Fresher Job
            </Link>

            {/* Internships */}
            <Link
              to="/jobs?search=Internship"
              className={`text-xs font-semibold transition-all px-3 py-1.5 rounded-full ${
                location.pathname === '/jobs' && location.search.includes('Internship')
                  ? 'bg-[#EFF6FF] text-[#2563EB]'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Internships
            </Link>

            {/* How It Works */}
            <a
              href="/#how-it-works"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all px-3 py-1.5 rounded-full"
            >
              How It Works
            </a>

            {/* Portfolio */}
            <Link
              to="/portfolio"
              className={`text-xs font-semibold transition-all px-3 py-1.5 rounded-full ${
                location.pathname.startsWith('/portfolio') || location.pathname.startsWith('/p/')
                  ? 'bg-[#EFF6FF] text-[#2563EB]'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Portfolio
            </Link>
          </nav>
        </div>

        {/* Right Header Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Authenticated / Unauthenticated Controls */}
          {!authInitialized ? (
            <div className="flex items-center gap-2">
              <div className="w-16 h-8 bg-slate-200/70 animate-pulse rounded-full" />
              <div className="w-20 h-8 bg-slate-200/70 animate-pulse rounded-full" />
            </div>
          ) : currentUser && userRole === 'candidate' ? (
            <div className="flex items-center gap-1.5">
              <Link
                to="/candidate/saved-jobs"
                className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  isActive('/candidate/saved-jobs')
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                title="Saved Opportunities"
              >
                <Bookmark className="w-4 h-4" />
              </Link>

              <Link
                to="/candidate/applications"
                className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  isActive('/candidate/applications')
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                title="My Job Applications"
              >
                <FileText className="w-4 h-4" />
              </Link>

              <Link
                to="/candidate/dashboard"
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isActive('/candidate/dashboard')
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200/80'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Dashboard</span>
              </Link>

              <Link
                to="/candidate/profile"
                className="w-8 h-8 rounded-xl bg-slate-900 text-white font-extrabold flex items-center justify-center text-xs hover:bg-slate-800 transition-colors shadow-2xs"
                title="Profile Settings"
              >
                {candidateProfile?.fullName 
                  ? candidateProfile.fullName.substring(0, 2).toUpperCase() 
                  : ((currentUser?.displayName || currentUser?.email || 'U').substring(0, 2).toUpperCase())}
              </Link>

              <button
                onClick={handleLogout}
                className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                title="Sign Out Candidate"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              {/* Candidate Portal Switcher CTA */}
              <Link
                to="/login"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all shadow-2xs"
                title="Switch to Candidate Portal"
              >
                Candidate Portal
              </Link>

              <div className="w-px h-5 bg-slate-200 shrink-0" />

              <div className="flex items-center gap-2">
                {/* Employer Login */}
                <Link
                  to="/employers/login"
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Employer Login
                </Link>

                {/* Post Job Free - Enterprise Dark Blue CTA */}
                <Link
                  to="/employers/register"
                  className="px-4 py-1.5 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-bold text-xs rounded-xl shadow-xs hover:shadow-md hover:shadow-blue-900/20 transition-all flex items-center gap-1.5 active:scale-95 whitespace-nowrap group"
                >
                  <span>Post Job Free</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/search-profiles"
            className="px-2.5 py-1 text-[11px] font-extrabold text-blue-700 bg-blue-50 rounded-lg border border-blue-200"
          >
            Search Candidates
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden px-4 pt-3 pb-6 space-y-3"
          >
            {/* Search Input for Mobile */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs, skills, companies..."
                className="w-full bg-slate-50 text-sm pl-9 pr-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </form>

            <nav className="flex flex-col gap-1 pt-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-bold flex items-center justify-between ${
                    isActive(item.path) ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              {currentUser && userRole === 'candidate' ? (
                <>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{currentUser.displayName || currentUser.email || 'Candidate'}</p>
                      <p className="text-[10px] text-slate-500">Candidate Account</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-xs font-bold text-rose-600 hover:underline"
                    >
                      Log Out
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/candidate/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl text-center"
                    >
                      My Dashboard
                    </Link>
                    <Link
                      to="/candidate/applications"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2.5 bg-slate-100 text-slate-800 font-bold text-xs rounded-xl text-center"
                    >
                      My Applications
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2.5 text-center bg-slate-100 font-bold text-xs text-slate-800 rounded-xl"
                    >
                      Candidate Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2.5 text-center bg-blue-600 text-white font-bold text-xs rounded-xl"
                    >
                      Register Free
                    </Link>
                  </div>
                  <Link
                    to="/employers/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-center text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/90 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Building2 className="w-3.5 h-3.5 text-amber-700" />
                    <span>Employer Login</span>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
