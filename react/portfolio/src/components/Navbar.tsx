import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  lang: 'ko' | 'en';
  onToggleLang: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#works', label: lang === 'ko' ? '프로젝트' : 'Selected Works' },
    { href: '#lab', label: lang === 'ko' ? '인터랙티브 랩' : 'Interactive Lab' },
    { href: '#architecture', label: lang === 'ko' ? '아키텍처' : 'Architecture' },
    { href: '#experience', label: lang === 'ko' ? '경력 사항' : 'Experience' },
    { href: '#contact', label: lang === 'ko' ? '문의하기' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 text-base font-semibold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span className="font-display tracking-tight text-lg">
              {lang === 'ko' ? PORTFOLIO_DATA.profile.name.ko : PORTFOLIO_DATA.profile.name.en}
            </span>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              / {lang === 'ko' ? '프론트엔드' : 'FE'}
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-zinc-400 hover:text-white transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Language Toggle + Resume) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleLang}
              aria-label="Toggle language"
              className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700/80 rounded-md hover:border-zinc-500 transition-colors whitespace-nowrap cursor-pointer"
            >
              {lang === 'ko' ? 'ENG' : 'KOR'}
            </button>

            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md transition-colors whitespace-nowrap shadow-sm shadow-blue-500/20 cursor-pointer"
            >
              {lang === 'ko' ? '이력서 보기' : 'View Resume'}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-zinc-800 bg-[#0d0f15] rounded-lg p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-zinc-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
