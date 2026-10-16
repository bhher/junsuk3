import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  lang: 'ko' | 'en';
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreClick, onContactClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>{lang === 'ko' ? '시니어 프론트엔드 엔지니어' : 'Senior Frontend Engineer'}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>{PORTFOLIO_DATA.profile.location[lang]}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1] max-w-2xl text-balance">
                {lang === 'ko' ? (
                  <>
                    브라우저의 한계를 넘는{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                      고성능 웹 인터페이스
                    </span>
                    와 시스템을 만듭니다.
                  </>
                ) : (
                  <>
                    Engineering{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                      high-performance
                    </span>{' '}
                    web systems & fluid design experiences.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
                {PORTFOLIO_DATA.profile.tagline[lang]}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all duration-150 shadow-md shadow-blue-600/20 whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
              >
                <span>{lang === 'ko' ? '주요 프로젝트 보기' : 'Explore Selected Works'}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
              >
                <span>{lang === 'ko' ? '협업 문의하기' : 'Get in Touch'}</span>
              </button>

              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="px-4 py-3 text-sm font-mono text-zinc-400 hover:text-zinc-200 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copiedEmail ? (lang === 'ko' ? '복사됨!' : 'Copied!') : PORTFOLIO_DATA.profile.email}</span>
              </button>
            </div>

            {/* Proof Metrics (Claim-to-Proof Adjacency) */}
            <div className="pt-6 border-t border-zinc-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {PORTFOLIO_DATA.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-500 font-medium">
                      {stat.label[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame with Real Studio Imagery & Architecture Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60 group">
              {/* Studio Workspace Image */}
              <div className="aspect-[16/10] overflow-hidden bg-zinc-900 relative">
                <img
                  src="/src/assets/images/hero_workspace_studio_1791446138321.jpg"
                  alt="Modern frontend development workstation setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              </div>

              {/* Engineering Terminal Specimen Overlay */}
              <div className="p-5 space-y-3 bg-zinc-950/95 border-t border-zinc-800/80">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pb-2 border-b border-zinc-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-zinc-500 ml-1">system-benchmarks.ts</span>
                  </div>
                  <span className="text-emerald-400">PASSED</span>
                </div>

                <div className="space-y-1.5 font-mono text-xs text-zinc-300">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Main Thread Jitter:</span>
                    <span className="text-emerald-400 font-medium tabular-nums">0.2ms (Zero Dropped Frames)</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>DOM Virtualization:</span>
                    <span className="text-white font-medium tabular-nums">25,000 Nodes (Windowed)</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Memory Garbage Peak:</span>
                    <span className="text-blue-400 font-medium tabular-nums">14.2 MB Flat Allocation</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
                  <span>Runtime: Chromium V8 / React 19</span>
                  <span className="text-zinc-400">Seoul, KR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
