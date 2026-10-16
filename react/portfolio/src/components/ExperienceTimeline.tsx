import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ExperienceTimelineProps {
  lang: 'ko' | 'en';
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 bg-[#06070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 pb-12 border-b border-zinc-800/80">
          <div className="text-xs font-mono text-blue-400 tracking-wider uppercase">
            {lang === 'ko' ? '경력 및 업무 이력' : 'Professional Trajectory'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
            {lang === 'ko' ? '프로덕션 환경에서의 실질적인 임팩트와 기여' : 'Work Experience & Impact'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '빠르게 성장하는 테크 조직에서 성능 개선, 디자인 시스템 표준화, 협업 도구 구축을 주도해 왔습니다.'
              : 'Proven track record of scaling high-traffic interfaces and building foundation platforms.'}
          </p>
        </div>

        {/* Experience Timeline List */}
        <div className="space-y-12 pt-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-l-2 md:border-l-0 border-zinc-800"
            >
              {/* Left Column: Period & Company */}
              <div className="md:col-span-4 space-y-1">
                <div className="text-xs font-mono text-zinc-400 tabular-nums">
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {exp.company[lang]}
                </h3>
                <div className="text-sm font-medium text-blue-400">
                  {exp.role[lang]}
                </div>
              </div>

              {/* Right Column: Achievements & Skills */}
              <div className="md:col-span-8 bg-[#0d0f17] border border-zinc-800/80 rounded-2xl p-6 sm:p-7 space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                  {exp.description[lang]}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2.5 pt-1">
                  {exp.achievements[lang].map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="text-emerald-400 mt-0.5 font-mono text-xs">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Unboxed Skill Tags */}
                <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400">
                  <span className="font-mono text-zinc-500 mr-1">Stack:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="text-zinc-300 font-mono">{skill}</span>
                      {sIdx < exp.skills.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
