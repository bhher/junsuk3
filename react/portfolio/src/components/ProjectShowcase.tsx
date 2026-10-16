import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectShowcaseProps {
  lang: 'ko' | 'en';
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'application' | 'canvas' | 'design-system' | 'performance'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: { en: 'All Projects', ko: '전체 프로젝트' } },
    { id: 'canvas', label: { en: 'Canvas & Graphics', ko: '캔버스 & 그래픽스' } },
    { id: 'performance', label: { en: 'High Performance', ko: '고성능 시스템' } },
    { id: 'design-system', label: { en: 'Design Systems', ko: '디자인 시스템' } },
    { id: 'application', label: { en: 'Web Applications', ko: '웹 애플리케이션' } },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="works" className="py-24 border-t border-zinc-900 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div className="space-y-3">
            <div className="text-xs font-mono text-blue-400 tracking-wider uppercase">
              {lang === 'ko' ? '주요 프로젝트 & 아키텍처' : 'Engineering Case Studies'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
              {lang === 'ko' ? '깊이 있는 기술적 문제 해결과 결과물' : 'Selected Works & System Architectures'}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              {lang === 'ko'
                ? '단순한 UI 구현을 넘어 브라우저 렌더링 병목, 메모리 누수, 웹 접근성, 상태 동기화를 직접 해결한 프로젝트들입니다.'
                : 'Architected with an obsession for 60fps responsiveness, sub-second LCP, zero runtime styles, and reliable state.'}
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Zero-Pill: functional buttons with clean background) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/90 border border-zinc-800 rounded-lg overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                }`}
              >
                {tab.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-12">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && filter === 'all';
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative bg-[#0d0f17] border border-zinc-800/90 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20 flex flex-col cursor-pointer ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-8'
                    : 'md:col-span-1 lg:col-span-4'
                }`}
              >
                {/* Visual Thumbnail */}
                <div
                  className={`relative overflow-hidden bg-zinc-900 ${
                    isFeatured ? 'aspect-[16/9] lg:aspect-[21/10]' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent opacity-90" />

                  {/* Corner Action Cue */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                      <span>{project.categoryLabel[lang]}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span className="text-blue-400">{project.role[lang]}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                      {lang === 'ko' ? project.titleKo : project.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed line-clamp-2">
                      {lang === 'ko' ? project.taglineKo : project.tagline}
                    </p>
                  </div>

                  {/* Key Metrics or Tech Stack Snippet */}
                  <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {project.metrics[lang].slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="font-mono font-semibold text-white tabular-nums">{m.value}</div>
                          <div className="text-zinc-500 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-zinc-400 group-hover:text-blue-400 font-medium inline-flex items-center gap-1 transition-colors">
                        <span>{lang === 'ko' ? '아키텍처 상세 분석 보기' : 'Read Case Study'}</span>
                        <span aria-hidden="true">→</span>
                      </span>

                      <div className="text-[11px] font-mono text-zinc-500 truncate max-w-[150px]">
                        {project.techStack.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
