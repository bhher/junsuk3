import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'ko' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0f17] border border-zinc-800 rounded-2xl overflow-y-auto shadow-2xl shadow-black/80 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0f17]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span>{project.categoryLabel[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="text-blue-400">{project.role[lang]}</span>
          </div>

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

        {/* Media Banner */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div className="space-y-3">
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white font-display">
              {lang === 'ko' ? project.titleKo : project.title}
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              {lang === 'ko' ? project.taglineKo : project.tagline}
            </p>
          </div>

          {/* Quantitative Performance Metrics Grid */}
          <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
              {lang === 'ko' ? '검증된 성능 성과' : 'Verified Performance Outcomes'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics[lang].map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl font-bold font-mono text-blue-400 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Challenge */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white font-display flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
              <span>{lang === 'ko' ? '엔지니어링 난제 (The Challenge)' : 'Engineering Challenge'}</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pl-3.5 border-l border-zinc-800">
              {project.challenge[lang]}
            </p>
          </div>

          {/* Architecture & Solution */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white font-display flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-500 rounded-full" />
              <span>{lang === 'ko' ? '아키텍처 및 해결 전략 (Solution & Architecture)' : 'Architecture & Solution'}</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.solution[lang]}
            </p>

            <ul className="space-y-2.5 pt-2">
              {project.architectureDetails[lang].map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-blue-400 mt-1 font-mono text-xs">▸</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Implementation Preview (if available) */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>{lang === 'ko' ? '핵심 구현 코드' : 'Key Architecture Snippet'}: {project.codeSnippet.filename}</span>
                <span className="text-zinc-500">TypeScript</span>
              </div>
              <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tech Stack (Unboxed Text with Separators) */}
          <div className="pt-4 border-t border-zinc-800/80">
            <div className="text-xs font-mono text-zinc-500 mb-2">
              {lang === 'ko' ? '사용 기술 스택' : 'Technologies & Libraries'}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-300">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-zinc-200 font-medium">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
