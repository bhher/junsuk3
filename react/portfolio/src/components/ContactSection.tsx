import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  lang: 'ko' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('full-time');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage(
        lang === 'ko' ? '성함, 이메일, 메시지를 모두 입력해주세요.' : 'Please fill in all required fields.'
      );
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage(
        lang === 'ko' ? '올바른 이메일 형식을 입력해주세요.' : 'Please enter a valid email address.'
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-blue-400 tracking-wider uppercase">
                {lang === 'ko' ? '협업 및 채용 문의' : 'Let\'s Connect'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
                {lang === 'ko' ? '새로운 기회와 기술적 도전을 환영합니다' : 'Open for Senior Roles & High-Impact Engineering'}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {lang === 'ko'
                  ? '복잡한 프론트엔드 아키텍처, 성능 최적화, 대규모 그래픽스 캔버스 개발 등 의미 있는 프로젝트 협업을 기다립니다.'
                  : 'Looking for a Senior Frontend Engineer who obsesses over performance, design systems, and resilient UI architecture? Reach out anytime.'}
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#0d0f17] border border-zinc-800 space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                {lang === 'ko' ? '직접 이메일 보내기' : 'Direct Electronic Mail'}
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-white font-semibold truncate">
                  {PORTFOLIO_DATA.profile.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  {copiedEmail ? (lang === 'ko' ? '복사됨!' : 'Copied!') : (lang === 'ko' ? '이메일 복사' : 'Copy')}
                </button>
              </div>

              <div className="text-xs text-zinc-500 flex items-center gap-2 pt-1 border-t border-zinc-800/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{lang === 'ko' ? '보통 24시간 이내에 회신합니다' : 'Typically responds within 24 hours'}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-zinc-500">
                {lang === 'ko' ? '기타 프로필' : 'Profiles & Repositories'}
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub ↗
                </a>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn ↗
                </a>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <span className="text-zinc-500">{PORTFOLIO_DATA.profile.location[lang]}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0d0f17] border border-zinc-800 rounded-2xl p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {lang === 'ko' ? '메시지가 성공적으로 전달되었습니다!' : 'Message Sent Successfully!'}
                </h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  {lang === 'ko'
                    ? '보내주신 문의 내용을 확인 후 등록해주신 이메일로 빠르게 답변드리겠습니다. 감사합니다.'
                    : 'Thank you for reaching out. I will review your note and get back to you shortly.'}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 rounded-lg cursor-pointer"
                >
                  {lang === 'ko' ? '다른 메시지 작성하기' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-display">
                    {lang === 'ko' ? '빠른 메시지 전송' : 'Send a Direct Message'}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {lang === 'ko'
                      ? '채용 포지션 제안, 프로젝트 컨설팅, 아키텍처 문의를 남겨주세요.'
                      : 'Drop a message regarding full-time engineering roles, consulting, or technical advisory.'}
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 text-xs text-red-400 bg-red-950/40 border border-red-800/80 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">
                      {lang === 'ko' ? '성함 / 담당자명 *' : 'Your Name / Org *'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'ko' ? '홍길동' : 'Alex Mercer'}
                      required
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">
                      {lang === 'ko' ? '회신 이메일 주소 *' : 'Work Email *'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      required
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">
                    {lang === 'ko' ? '문의 유형' : 'Inquiry Category'}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="full-time">{lang === 'ko' ? '정규직 채용 포지션 제안 (Full-Time Opportunity)' : 'Full-time Senior Engineering Role'}</option>
                    <option value="contract">{lang === 'ko' ? '프리랜서 / 계약직 프로젝트 (Contract / Advisory)' : 'Contract / Technical Advisory'}</option>
                    <option value="consulting">{lang === 'ko' ? '웹 성능 / 아키텍처 컨설팅 (Performance Consulting)' : 'Web Performance / Architecture Audit'}</option>
                    <option value="other">{lang === 'ko' ? '기타 네트워킹 및 질문 (General Networking)' : 'General Networking / Other'}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">
                    {lang === 'ko' ? '메시지 내용 *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'ko'
                        ? '프로젝트 개요, 기대 역할 및 일정 등에 대해 자유롭게 남겨주세요.'
                        : 'Describe your team, technical scope, timeline, and expectations.'
                    }
                    required
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-800 disabled:opacity-60 rounded-lg transition-colors shadow-md shadow-blue-600/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{lang === 'ko' ? '전송 중...' : 'Transmitting message...'}</span>
                    </>
                  ) : (
                    <span>{lang === 'ko' ? '메시지 보내기' : 'Transmit Message'}</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
