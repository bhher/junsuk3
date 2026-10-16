import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  lang: 'ko' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-900 bg-[#060709] text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-2 font-mono">
            <span className="text-zinc-300 font-semibold font-display">
              {lang === 'ko' ? PORTFOLIO_DATA.profile.name.ko : PORTFOLIO_DATA.profile.name.en}
            </span>
            <span>·</span>
            <span>© {new Date().getFullYear()}</span>
            <span>·</span>
            <span>{lang === 'ko' ? '모든 권리 보유' : 'All rights reserved.'}</span>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="hover:text-zinc-300 transition-colors"
            >
              {PORTFOLIO_DATA.profile.email}
            </a>

            <button
              onClick={scrollToTop}
              className="text-zinc-400 hover:text-white flex items-center gap-1 font-mono transition-colors cursor-pointer"
            >
              <span>{lang === 'ko' ? '맨 위로' : 'Top'}</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
