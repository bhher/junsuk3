import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ArchitecturePhilosophyProps {
  lang: 'ko' | 'en';
}

export const ArchitecturePhilosophy: React.FC<ArchitecturePhilosophyProps> = ({ lang }) => {
  return (
    <section id="architecture" className="py-24 border-t border-zinc-900 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 pb-12 border-b border-zinc-800/80">
          <div className="text-xs font-mono text-blue-400 tracking-wider uppercase">
            {lang === 'ko' ? '엔지니어링 철학 & 기술 체계' : 'Architecture & Core Principles'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
            {lang === 'ko' ? '신뢰할 수 있는 웹 시스템을 구축하는 4가지 원칙' : 'Engineering Principles & Invariants'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '단순한 트렌드 추종을 넘어 브라우저 런타임의 동작 원리에 기반한 지속 가능하고 견고한 아키텍처를 추구합니다.'
              : 'Grounded in browser execution semantics, mechanical sympathy, and predictable state lifecycles.'}
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {PORTFOLIO_DATA.principles.map((principle, index) => (
            <div
              key={index}
              className="bg-[#0d0f17] border border-zinc-800/90 rounded-2xl p-7 space-y-5 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  {lang === 'ko' ? `원칙 0${index + 1}` : `Principle 0${index + 1}`}
                </span>
                <div className="text-right">
                  <div className="text-lg font-bold font-mono text-blue-400 tabular-nums">
                    {principle.metric}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {principle.metricLabel[lang]}
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white font-display">
                  {principle.title[lang]}
                </h3>
                <div className="text-xs font-mono text-zinc-400">
                  {principle.subtitle[lang]}
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {principle.description[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Competency Matrix */}
        <div className="mt-16 pt-12 border-t border-zinc-800/80">
          <div className="space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-white font-display">
              {lang === 'ko' ? '기술 스택 및 전문 역량' : 'Technical Proficiency Matrix'}
            </h3>
            <p className="text-sm text-zinc-400">
              {lang === 'ko'
                ? '프로덕션 레벨에서 아키텍처 설계와 트러블슈팅이 가능한 검증된 기술 목록입니다.'
                : 'Production-tested tools and frameworks utilized across critical customer paths.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skillsCategorized.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <h4 className="text-sm font-semibold text-white font-display">
                    {cat.category[lang]}
                  </h4>
                </div>

                {/* Unboxed items with clean typography */}
                <ul className="space-y-2 text-xs text-zinc-300">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2">
                      <span className="text-zinc-600 font-mono">―</span>
                      <span className="font-medium text-zinc-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
