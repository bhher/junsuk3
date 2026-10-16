import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ko' | 'en';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  const [copiedMd, setCopiedMd] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyMarkdown = () => {
    const md = `# ${PORTFOLIO_DATA.profile.name[lang]} - ${PORTFOLIO_DATA.profile.title[lang]}
Email: ${PORTFOLIO_DATA.profile.email} | Location: ${PORTFOLIO_DATA.profile.location[lang]}

## Summary
${PORTFOLIO_DATA.profile.tagline[lang]}

## Work Experience
${PORTFOLIO_DATA.experiences
  .map(
    (e) => `### ${e.company[lang]} - ${e.role[lang]} (${e.period})
${e.description[lang]}
${e.achievements[lang].map((a) => `- ${a}`).join('\n')}
Stack: ${e.skills.join(', ')}`
  )
  .join('\n\n')}

## Core Projects
${PORTFOLIO_DATA.projects
  .map(
    (p) => `### ${lang === 'ko' ? p.titleKo : p.title} (${p.year})
${lang === 'ko' ? p.taglineKo : p.tagline}
- Overview: ${p.overview[lang]}
- Solution: ${p.solution[lang]}
- Stack: ${p.techStack.join(', ')}`
  )
  .join('\n\n')}
`;
    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0d0f17] border border-zinc-800 rounded-2xl overflow-y-auto shadow-2xl shadow-black/90 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Actions Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0f17]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <h2 id="modal-resume-title" className="text-sm font-bold text-white font-display">
              {lang === 'ko' ? '이력서 및 경력 기술서' : 'Curriculum Vitae / Resume'}
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors cursor-pointer"
            >
              {copiedMd ? (lang === 'ko' ? '마크다운 복사됨!' : 'Copied Markdown!') : (lang === 'ko' ? 'MD 복사' : 'Copy MD')}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>{lang === 'ko' ? '인쇄 / PDF 저장' : 'Print / PDF'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-8 sm:p-10 space-y-10 text-zinc-300 print:text-black print:bg-white">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-8 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-white print:text-black font-display">
              {PORTFOLIO_DATA.profile.name[lang]}
            </h1>
            <div className="text-base text-blue-400 font-medium">
              {PORTFOLIO_DATA.profile.title[lang]}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
              <span>Email: {PORTFOLIO_DATA.profile.email}</span>
              <span aria-hidden="true">·</span>
              <span>Location: {PORTFOLIO_DATA.profile.location[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>Experience: {PORTFOLIO_DATA.profile.yearsOfExperience} Years</span>
            </div>
          </div>

          {/* Core Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              {lang === 'ko' ? '요약 (Summary)' : 'Executive Summary'}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-300 print:text-black">
              {PORTFOLIO_DATA.profile.tagline[lang]}{' '}
              {lang === 'ko'
                ? '브라우저 메인 스레드 연산 최소화, Canvas 2D/WebGL 기반 대용량 노드 렌더링, 제로 런타임 토큰 기반 디자인 시스템 및 철저한 WCAG 2.2 웹 접근성 표준 준수를 실천합니다.'
                : 'Obsessed with keeping the browser main thread idle, optimizing Canvas 2D/WebGL pipelines, and engineering robust token-driven design systems.'}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              {lang === 'ko' ? '업무 경력 (Work Experience)' : 'Work Experience'}
            </h3>
            <div className="space-y-6">
              {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white print:text-black text-base">
                      {exp.company[lang]} <span className="font-normal text-zinc-400">/ {exp.role[lang]}</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-500 tabular-nums">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400">
                    {exp.description[lang]}
                  </p>

                  <ul className="space-y-1.5 pt-1 pl-4 list-disc text-xs sm:text-sm text-zinc-300 print:text-black">
                    {exp.achievements[lang].map((ach, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="text-xs font-mono text-zinc-500 pt-1">
                    Tech: {exp.skills.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              {lang === 'ko' ? '학력 및 자격' : 'Education'}
            </h3>
            <div className="flex justify-between items-baseline text-sm">
              <div>
                <span className="font-semibold text-white print:text-black">
                  {lang === 'ko' ? '컴퓨터공학 학사 (B.S. in Computer Science)' : 'B.S. in Computer Science & Engineering'}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500 tabular-nums">Graduated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
