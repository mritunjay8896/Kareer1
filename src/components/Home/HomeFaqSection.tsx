import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  CheckCircle2 
} from 'lucide-react';

export interface LandingFaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlights?: string[];
}

export const LANDING_FAQS: LandingFaqItem[] = [
  {
    id: 'faq-recruiter-automation',
    category: 'Hiring & Automation',
    question: 'How does Glitread screen and interview candidates on complete autopilot?',
    answer: 'Glitread automates the top-of-funnel recruitment pipeline by conducting preliminary technical interviews, administering proctored coding assessments, and evaluating candidates against industry benchmarks. Once a candidate passes the automated bar, their comprehensive score card, code replay, and interview summary are delivered directly to your recruiter inbox.',
    highlights: ['Cut time-to-hire from 3 weeks to 48 hours', 'Zero resume spam or manual qualification', 'Integrated calendar scheduling']
  },
  {
    id: 'faq-talent-verification',
    category: 'Talent Pool',
    question: 'How are developers and technical candidates pre-screened on Glitread?',
    answer: 'Every candidate in our 2 Lakh+ talent pool is evaluated on practical coding ability, real-world project portfolios, and verified work experience. We test problem solving, framework proficiencies (React, Node.js, Python, Java, DevOps, AI/ML), and system design so employers only interview top-tier performers.',
    highlights: ['Verified GitHub repositories & live projects', 'Hands-on coding scores instead of keyword matching', 'Active notice periods & immediate joiners']
  },
  {
    id: 'faq-employer-pricing',
    category: 'Pricing & Security',
    question: 'Is hiring tech talent through Glitread completely free for employers?',
    answer: 'Yes! Employers and startup founders can search verified candidate profiles, review ATS resumes, watch portfolio demos, and send interview invitations with zero platform commission or agency markup. We believe hiring should be direct, transparent, and frictionless.',
    highlights: ['No agency commission or candidate placement fees', 'Direct contact with shortlisted engineers', 'Free candidate search and filter tools']
  },
  {
    id: 'faq-ats-resume-builder',
    category: 'Resume & Portfolio',
    question: 'What makes Glitread’s ATS Resume Builder pass company screening algorithms?',
    answer: 'Our ATS Resume Builder formats profiles using clean single-column semantic structures, standard machine-readable fonts, and industry-standard section headings that Applicant Tracking Systems (Workday, Greenhouse, Lever, Taleo) parse with 95%+ accuracy. Job seekers get instant keyword matching feedback and a 1-click PDF download.',
    highlights: ['95%+ ATS parse compatibility score', 'Single-click PDF download formatted for recruiters', 'Live keyword match against target job descriptions']
  },
  {
    id: 'faq-portfolio-website',
    category: 'Resume & Portfolio',
    question: 'Can job seekers build a live portfolio website with their custom domain or handle?',
    answer: 'Yes. Candidates can create a modern, responsive personal portfolio in under 5 minutes without writing any code. The portfolio showcases live project previews, GitHub statistics, tech stack badges, and direct contact options at a personalized link (e.g. glitread.app/p/yourname).',
    highlights: ['Zero-code personal portfolio generator', 'Interactive project showcases & live demo embeds', 'Shareable link for LinkedIn and resume headers']
  },
  {
    id: 'faq-autofill-extension',
    category: 'Resume & Portfolio',
    question: 'How does the 1-Click Form Autofill Chrome Extension work?',
    answer: 'The Glitread Chrome Extension is a lightweight Manifest V3 browser tool that instantly recognizes application form fields on LinkedIn Easy Apply, Greenhouse, Lever, Workday, and Ashby. With a single click, it securely populates your contact information, work history, links, and custom screening questions in under 1 second.',
    highlights: ['Fills 40+ form fields in under 1 second', '100% private: runs locally on your browser with zero data telemetry', 'Supports all major global job applicant portals']
  },
  {
    id: 'faq-coding-assessments',
    category: 'Hiring & Automation',
    question: 'Can recruiters dispatch custom coding tests and system design assignments?',
    answer: 'Yes. Recruiters can choose from our library of 500+ curated programming challenges or upload custom assessment suites tailored to their exact tech stack. Tests include automated test-case evaluation, time-complexity analysis, and anti-plagiarism heuristics.',
    highlights: ['500+ pre-built coding challenges in 25+ languages', 'Real-time test suite execution & sandbox', 'Detailed technical performance scorecard']
  },
  {
    id: 'faq-hiring-speed',
    category: 'Hiring & Automation',
    question: 'How fast can our company hire an engineer or specialist through Glitread?',
    answer: 'Because candidates are already pre-vetted with active notice periods (including 15-day and immediate joiners), our partner companies routinely hire qualified software engineers, UI/UX designers, and data scientists within 48 to 72 hours of posting or searching.',
    highlights: ['Immediate joiners filter available', 'Direct chat and automated calendar sync', 'Fast-track offer letter templates and e-sign loops']
  }
];

export const HomeFaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(LANDING_FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  // Embed Schema.org JSON-LD FAQPage for SEO Crawlers
  useEffect(() => {
    const faqSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': LANDING_FAQS.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `${faq.answer} ${faq.highlights ? faq.highlights.join('. ') : ''}`
        }
      }))
    };

    const existingScript = document.getElementById('glitread-faq-schema');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(faqSchemaData);
    } else {
      const script = document.createElement('script');
      script.id = 'glitread-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(faqSchemaData);
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById('glitread-faq-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <section 
      id="faq" 
      className="relative w-full bg-[#F8FAFC] py-8 sm:py-12 lg:py-16 px-2 sm:px-4 lg:px-6 border-none overflow-hidden"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1340px] mx-auto relative z-10">
        <div className="mx-3 sm:mx-6 lg:mx-8">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-950 tracking-tight font-display leading-tight">
              Got Questions? <br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
                We've Got Answers.
              </span>
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Everything you need to know about candidate screening, ATS resumes, and hiring automation.
            </p>
          </div>

          {/* ACCORDION LIST */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {LANDING_FAQS.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-200 overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 text-xs sm:text-[14px] hover:text-blue-600 transition-colors cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-1">
                      <span className="shrink-0 text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100/80 px-2 py-0.5 rounded-md font-mono">
                        0{index + 1}
                      </span>
                      <span 
                        className="font-bold text-slate-950 group-hover:text-blue-600 transition-colors truncate sm:whitespace-normal font-display"
                        itemProp="name"
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100/80 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-slate-100 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                          <p itemProp="text">
                            {faq.answer}
                          </p>

                          {faq.highlights && faq.highlights.length > 0 && (
                            <div className="mt-3.5 pt-3 border-t border-slate-100/80 flex flex-wrap gap-2">
                              {faq.highlights.map((highlight, hIdx) => (
                                <span
                                  key={hIdx}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-[11px] font-medium border border-slate-200/60"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span>{highlight}</span>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* HELPFUL CONTACT STRIP */}
          <div className="mt-8 sm:mt-10 max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-xs sm:text-sm font-bold text-slate-950 font-display">
                Still have questions or need custom talent matching?
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Our technical hiring team is ready to assist your engineering department.
              </p>
            </div>
            <a
              href="mailto:support@glitread.com"
              className="px-5 py-2.5 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer"
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
