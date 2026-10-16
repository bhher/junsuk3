export interface Project {
  id: string;
  title: string;
  titleKo: string;
  tagline: string;
  taglineKo: string;
  category: 'application' | 'canvas' | 'design-system' | 'performance';
  categoryLabel: { en: string; ko: string };
  image: string;
  year: string;
  role: { en: string; ko: string };
  overview: { en: string; ko: string };
  challenge: { en: string; ko: string };
  solution: { en: string; ko: string };
  architectureDetails: {
    en: string[];
    ko: string[];
  };
  metrics: {
    en: { label: string; value: string }[];
    ko: { label: string; value: string }[];
  };
  techStack: string[];
  codeSnippet?: {
    filename: string;
    code: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: { en: string; ko: string };
  role: { en: string; ko: string };
  period: string;
  description: { en: string; ko: string };
  achievements: { en: string[]; ko: string[] };
  skills: string[];
}

export interface EngineeringPrinciple {
  title: { en: string; ko: string };
  subtitle: { en: string; ko: string };
  description: { en: string; ko: string };
  metric: string;
  metricLabel: { en: string; ko: string };
}

export const PORTFOLIO_DATA = {
  profile: {
    name: {
      en: 'Minjun Kim',
      ko: '김민준',
    },
    title: {
      en: 'Senior Frontend Engineer & Design Technologist',
      ko: '시니어 프론트엔드 엔지니어 & 디자인 테크놀로지스트',
    },
    tagline: {
      en: 'Specializing in high-performance web systems, 60fps canvas graphics, and zero-compromise design systems.',
      ko: '60fps 그래픽스 렌더링, 대규모 웹 애플리케이션 아키텍처, 엄격한 디자인 시스템 설계를 지향합니다.',
    },
    location: {
      en: 'Seoul, Korea (Available for Worldwide Remote)',
      ko: '대한민국 서울 (글로벌 원격 근무 가능)',
    },
    email: 'bhher30@gmail.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    yearsOfExperience: '5+',
  },
  stats: [
    { value: '< 0.8s', label: { en: 'Avg Core LCP', ko: '평균 LCP 렌더링 시간' } },
    { value: '60 FPS', label: { en: 'Canvas & Physics Target', ko: '렌더링 루프 보장' } },
    { value: '45+', label: { en: 'Design Tokens & Components', ko: '제작 디자인 시스템 컴포넌트' } },
    { value: '99.9%', label: { en: 'Crash-free Session Rate', ko: '무결점 세션 안정성' } },
  ],
  projects: [
    {
      id: 'hyperflow',
      title: 'HyperFlow Studio',
      titleKo: '하이퍼플로우 스튜디오',
      tagline: 'Infinite node canvas engine with real-time state synchronization and spatial quadtree rendering',
      taglineKo: '공간 분할 쿼드트리와 실시간 상태 동기화 기반의 무한 노드 캔버스 엔진',
      category: 'canvas',
      categoryLabel: { en: 'Canvas & Graphics', ko: '캔버스 & 그래픽스' },
      image: '/src/assets/images/project_canvas_app_1791446157057.jpg',
      year: '2025',
      role: { en: 'Lead Frontend Architect', ko: '리드 프론트엔드 아키텍트' },
      overview: {
        en: 'A high-performance visual workflow designer handling over 15,000 interactive nodes on a 2D infinite zoom canvas without frame dropping.',
        ko: '15,000개 이상의 노드가 존재하는 무한 2D 캔버스에서 프레임 저하 없이 동작하는 고성능 시각적 워크플로우 디자이너입니다.',
      },
      challenge: {
        en: 'Standard DOM elements choked the browser at >1,500 elements during multi-user pan and zoom operations, degrading rendering to <14 FPS.',
        ko: '기존 DOM 트리 렌더링 방식은 1,500개 초과 시 브라우저 메인 스레드 병목으로 인해 줌/팬 동작 중 14 FPS 이하로 성능이 급락했습니다.',
      },
      solution: {
        en: 'Built a hybrid rendering pipeline using HTML5 Canvas + OffscreenCanvas worker with a custom Quadtree spatial partition index. Only visible viewport entities are calculated and painted.',
        ko: 'Quadtree(사분의 공간 분할) 알고리즘과 OffscreenCanvas 웹 워커를 결합한 하이브리드 파이프라인을 구축하여 뷰포트 내 가시 영역만 선별 계산 및 렌더링했습니다.',
      },
      architectureDetails: {
        en: [
          'OffscreenCanvas in Dedicated Web Worker decouples rendering cycles from main JS thread interactions.',
          'Custom Quadtree spatial indexing brings entity bounding-box lookup from O(N) to O(log N).',
          'Delta-compressed CRDT sync over WebSockets with optimistic pointer interpolation for multi-cursor presence.',
          'Custom matrix transformation engine supporting sub-pixel snapping and gesture momentum physics.',
        ],
        ko: [
          'Dedicated Web Worker 내 OffscreenCanvas를 활용하여 메인 스레드 렌더링 차단 원천 분리',
          '커스텀 Quadtree 공간 인덱싱을 통해 가시 영역 노드 탐색 시간복잡도를 O(N)에서 O(log N)으로 최적화',
          'WebSockets 기반 델타 압축 CRDT 동기화 및 다중 사용자 커서 관성 보간 처리',
          '서브픽셀 스냅 및 관성 제스처 물리 연산이 포함된 커스텀 행렬 변환 엔진 구현',
        ],
      },
      metrics: {
        en: [
          { label: 'Viewport FPS', value: '60 FPS stable' },
          { label: 'Max Node Capacity', value: '25,000+ nodes' },
          { label: 'Memory Footprint', value: '-64% vs SVG/DOM' },
        ],
        ko: [
          { label: '뷰포트 프레임레이트', value: '60 FPS 유지' },
          { label: '최대 수용 노드 수', value: '25,000+ 노드' },
          { label: '메모리 점유율 절감', value: 'SVG/DOM 대비 -64%' },
        ],
      },
      techStack: ['TypeScript', 'Canvas API', 'Web Workers', 'Zustand', 'CRDT', 'Vite'],
      codeSnippet: {
        filename: 'spatialIndex.ts',
        code: `export class QuadtreeNode<T extends BoundingBox> {
  private bounds: Rect;
  private objects: T[] = [];
  private children: QuadtreeNode<T>[] | null = null;

  query(range: Rect, found: T[] = []): T[] {
    if (!this.bounds.intersects(range)) return found;
    for (const obj of this.objects) {
      if (range.contains(obj)) found.push(obj);
    }
    if (this.children) {
      for (const child of this.children) child.query(range, found);
    }
    return found;
  }
}`,
      },
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'pulsemetrics',
      title: 'PulseMetrics Real-Time Dashboard',
      titleKo: '펄스메트릭스 실시간 데이터 분석기',
      tagline: 'High-frequency telemetry interface processing 50ms tick streams with zero layout thrashing',
      taglineKo: '50ms 주기 대용량 틱 스트림을 레이아웃 쓰레싱 없이 렌더링하는 고빈도 대시보드',
      category: 'performance',
      categoryLabel: { en: 'High Performance', ko: '고성능 시스템' },
      image: '/src/assets/images/project_pulse_metrics_1791446176738.jpg',
      year: '2024',
      role: { en: 'Senior Frontend Engineer', ko: '시니어 프론트엔드 엔지니어' },
      overview: {
        en: 'A low-latency analytics dashboard tracking real-time server health and financial metrics with sub-100ms streaming updates and interactive chart scrubbers.',
        ko: '50ms 주기로 스트리밍되는 실시간 금융 및 서버 메트릭 데이터를 100ms 미만 지연으로 표시하는 초저지연 모니터링 콘솔입니다.',
      },
      challenge: {
        en: 'High-frequency WebSocket payloads triggered relentless React re-render cycles, exhausting GC memory and freezing user interactions on low-spec client machines.',
        ko: '초당 수백 건의 실시간 패킷으로 인해 잦은 리액트 리렌더링과 가비지 컬렉션(GC) 스파이크가 발생하여 화면 스크롤과 상호작용이 멈추는 현상이 발생했습니다.',
      },
      solution: {
        en: 'Designed an unmanaged ring buffer in Web Workers with SharedArrayBuffer. Charts subscribe directly to binary buffers via Canvas 2D and requestAnimationFrame without mutating React component states.',
        ko: 'SharedArrayBuffer 기반의 링 버퍼(Ring Buffer)를 백그라운드 워커에 배치하고, 캔버스 2D 렌더러가 RAF 단위로 직접 바이너리를 읽어 React 리렌더링을 0회로 격리했습니다.',
      },
      architectureDetails: {
        en: [
          'SharedArrayBuffer & TypedArray ring buffer prevents allocations and cuts Garbage Collection pauses to 0ms.',
          'Decoupled UI state from data stream: React manages controls and layouts, Canvas renders high-speed telemetry.',
          'Virtual windowing for large historical audit tables with sub-millisecond scrolling latency.',
          'Adaptive throttling: gracefully scales back tick sampling on battery-saver or background tabs.',
        ],
        ko: [
          'SharedArrayBuffer 및 TypedArray 링 버퍼를 통해 불필요한 메모리 할당 차단 및 GC 일시중지 0ms 달성',
          'UI 상태와 데이터 파이프라인의 엄격한 분리: React는 메타 UI 담당, Canvas는 초고속 렌더링 전담',
          '대용량 로그 테이블에 가상화(Virtual Windowing)를 적용하여 10만 행 탐색 시 0.5ms 이하 스크롤 레이턴시 실현',
          '배터리 절전 모드 및 비활성 탭 감지 시 지능형 샘플링 다운스케일링 적용',
        ],
      },
      metrics: {
        en: [
          { label: 'Tick Latency', value: '< 16ms' },
          { label: 'React Re-renders', value: 'Zero during stream' },
          { label: 'Lighthouse Score', value: '100 / 100' },
        ],
        ko: [
          { label: '스트림 처리 지연', value: '< 16ms' },
          { label: '스트림 중 React 렌더링', value: '0회 (격리 완벽)' },
          { label: 'Lighthouse 성능 지수', value: '100 / 100 만점' },
        ],
      },
      techStack: ['React 19', 'TypeScript', 'Web Workers', 'SharedArrayBuffer', 'Canvas 2D', 'Tailwind CSS'],
      codeSnippet: {
        filename: 'ringBufferStream.ts',
        code: `export class MetricsRingBuffer {
  private buffer: Float64Array;
  private head = 0;
  constructor(public readonly capacity = 2048) {
    this.buffer = new Float64Array(capacity);
  }
  push(val: number): void {
    this.buffer[this.head] = val;
    this.head = (this.head + 1) % this.capacity;
  }
}`,
      },
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'auradesign',
      title: 'Aura Design System & Token Studio',
      titleKo: '아우라 디자인 시스템 & 토큰 스튜디오',
      tagline: 'Multi-brand design system with accessible primitives, automated contract tests, and zero runtime overhead',
      taglineKo: '접근성 보장 프리미티브와 제로 런타임 토큰 엔진을 갖춘 멀티 브랜드 디자인 시스템',
      category: 'design-system',
      categoryLabel: { en: 'Design Systems', ko: '디자인 시스템' },
      image: '/src/assets/images/project_aura_design_1791446193161.jpg',
      year: '2024',
      role: { en: 'Design Systems Architect', ko: '디자인 시스템 아키텍트' },
      overview: {
        en: 'A unified enterprise component library and design token compiler powering 6 consumer products with WCAG 2.2 AA accessibility and deterministic theming.',
        ko: '6개 자사 웹 서비스를 일관되게 지탱하는 엔터프라이즈 컴포넌트 라이브러리 및 WCAG 2.2 AA 표준 준수 디자인 토큰 컴파일러입니다.',
      },
      challenge: {
        en: 'Fragmented UI styles across engineering teams caused design debt, recurring a11y bugs, and 450KB of duplicate runtime CSS in production bundles.',
        ko: '여러 팀의 파편화된 UI 구현으로 인해 접근성 결함이 빈번했고, 런타임 CSS 중복으로 번들 크기가 450KB 이상 비대해졌습니다.',
      },
      solution: {
        en: 'Architected headless primitives backed by Radix UI, compiled into zero-runtime CSS variables via style-dictionary and Tailwind. Enforced automated CI contrast and keyboard navigation tests.',
        ko: 'Radix UI 헤드리스 프리미티브를 기반으로 제로 런타임 CSS 변수를 빌드 타임에 컴파일하도록 설계하고, CI 단계에서 색상 대비 및 키보드 탐색을 자동 검증했습니다.',
      },
      architectureDetails: {
        en: [
          'Token compiler transforms Figma Tokens JSON into typed CSS variables and TypeScript constants.',
          '100% WCAG 2.2 AA compliance verified via automated axe-core regression tests in Playwright.',
          'Composable polymorphic components with full TypeScript variant inference and compound props.',
          'Zero runtime CSS-in-JS overhead: reduced total CSS payload from 450KB to 28KB gzip.',
        ],
        ko: [
          'Figma Tokens JSON을 빌드 타임에 타입화된 CSS 변수 및 TS 상수로 자동 컴파일',
          'Playwright + axe-core 기반 CI 자동 회귀 테스트로 WCAG 2.2 AA 접근성 100% 보장',
          'TypeScript 타입 추론이 완벽한 다형성(polymorphic) 컴포넌트 아키텍처 구축',
          'CSS-in-JS 런타임 오버헤드 제거를 통해 프로덕션 CSS 번들 크기 450KB -> 28KB(gzip)로 감축',
        ],
      },
      metrics: {
        en: [
          { label: 'Bundle Reduction', value: '-93% CSS footprint' },
          { label: 'WCAG Compliance', value: '100% AA Grade' },
          { label: 'Dev Onboarding', value: '4x faster UI shipping' },
        ],
        ko: [
          { label: '번들 사이즈 감축', value: 'CSS 크기 -93% 절감' },
          { label: '웹 접근성 지표', value: 'WCAG AA 100% 통과' },
          { label: '기능 개발 생산성', value: '신규 화면 개발 4배 단축' },
        ],
      },
      techStack: ['TypeScript', 'Tailwind CSS', 'Radix UI', 'Style Dictionary', 'Storybook', 'Playwright'],
      codeSnippet: {
        filename: 'buttonPrimitive.tsx',
        code: `import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva('inline-flex items-center justify-center font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none', {
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700',
      outline: 'border border-zinc-700 text-zinc-200 hover:bg-zinc-800',
    },
    size: {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' }
});`,
      },
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'devsync',
      title: 'DevSync Edge Knowledge Workspace',
      titleKo: '데브싱크 엣지 지식 워크스페이스',
      tagline: 'Local-first markdown & code playground with instant full-text search and isolated sandboxing',
      taglineKo: '로컬 퍼스트 마크다운 및 격리 샌드박스를 제공하는 초경량 엔지니어링 지식 베이스',
      category: 'application',
      categoryLabel: { en: 'Web Applications', ko: '웹 애플리케이션' },
      image: '/src/assets/images/hero_workspace_studio_1791446138321.jpg',
      year: '2023',
      role: { en: 'Frontend Engineer', ko: '프론트엔드 엔지니어' },
      overview: {
        en: 'A blazing-fast developer notes and interactive code sandbox running entirely on client-side WebAssembly with offline-first persistence.',
        ko: 'WebAssembly 기반으로 브라우저 로컬에서 안전하게 코드를 실행하고 풀텍스트 검색을 지원하는 오프라인 퍼스트 개발자 도구입니다.',
      },
      challenge: {
        en: 'Users needed to run untrusted JavaScript and TypeScript snippets in real time without security risks or costly server execution environments.',
        ko: '보안 취약점이나 고비용 서버 컨테이너 없이 브라우저 상에서 신뢰할 수 없는 JS/TS 코드를 안전하게 격리 실행해야 했습니다.',
      },
      solution: {
        en: 'Integrated Web Workers with iframe sandbox proxies and IndexedDB OPFS (Origin Private File System) for instant 0ms persistence and offline execution.',
        ko: 'Iframe Sandbox 프록시와 Web Workers를 결합한 이중 격리 계층을 구축하고, IndexedDB OPFS로 제로 레이턴시 오프라인 저장을 구현했습니다.',
      },
      architectureDetails: {
        en: [
          'Dual-layer sandbox prevents prototype pollution and unauthenticated network access.',
          'IndexedDB OPFS storage guarantees sub-2ms query responses for up to 50,000 markdown documents.',
          'Virtual DOM AST parser for incremental Markdown preview without re-rendering unaffected blocks.',
        ],
        ko: [
          '이중 샌드박스 구조로 브라우저 프로토타입 오염 및 미인가 네트워크 접근 완전 차단',
          'OPFS(Origin Private File System) 활용으로 5만 개 문서 기준 2ms 미만 초고속 로컬 검색',
          '점진적 마크다운 AST 파서를 구현하여 수정된 블록만 증분 렌더링',
        ],
      },
      metrics: {
        en: [
          { label: 'Cold Boot Time', value: '< 240ms' },
          { label: 'Offline Ready', value: '100% PWA cache' },
          { label: 'Search Speed', value: '1.2ms / 50k docs' },
        ],
        ko: [
          { label: '초기 구동 속도', value: '< 240ms' },
          { label: '오프라인 지원', value: '100% 완벽 동작' },
          { label: '문서 검색 속도', value: '5만건 기준 1.2ms' },
        ],
      },
      techStack: ['React', 'TypeScript', 'Web Workers', 'OPFS', 'Tailwind CSS', 'Vite'],
      codeSnippet: {
        filename: 'sandboxRunner.ts',
        code: `export async function runIsolatedCode(code: string): Promise<ExecutionResult> {
  const worker = new Worker(new URL('./evalWorker.ts', import.meta.url), { type: 'module' });
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      worker.terminate();
      resolve({ status: 'timeout', logs: ['Execution exceeded 2000ms limit'] });
    }, 2000);
    worker.onmessage = (e) => {
      clearTimeout(timeout);
      worker.terminate();
      resolve(e.data);
    };
    worker.postMessage({ code });
  });
}`,
      },
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
  ] as Project[],

  principles: [
    {
      title: {
        en: 'Performance as an Invariant',
        ko: '타협 없는 성능 불변성',
      },
      subtitle: {
        en: 'Compositor-only transforms & worker pipelines',
        ko: '컴포지터 기반 변형과 워커 파이프라인',
      },
      description: {
        en: 'Animations stay on transform/opacity. Compute-heavy operations live in Web Workers. The main thread is reserved for 60fps input responsiveness.',
        ko: '애니메이션은 오직 transform과 opacity만 변형합니다. 연산 집약적 로직은 Web Worker로 격리하여 60fps 인터랙션 반응성을 보장합니다.',
      },
      metric: '60 FPS',
      metricLabel: { en: 'Guaranteed Frame Target', ko: '렌더링 목표' },
    },
    {
      title: {
        en: 'Design Engineering Synergy',
        ko: '디자인 엔지니어링 시너지',
      },
      subtitle: {
        en: 'Deterministic tokens & accessibility by default',
        ko: '결정론적 토큰과 기본 탑재된 웹 접근성',
      },
      description: {
        en: 'Components are built with strict WCAG 2.2 AA standards, full keyboard navigation, ARIA semantics, and fluid physics-based gestures.',
        ko: '모든 컴포넌트는 WCAG 2.2 AA 접근성 기준, 풀 키보드 내비게이션, ARIA 시맨틱 및 유기적인 물리 기반 제스처를 내장합니다.',
      },
      metric: 'WCAG AA',
      metricLabel: { en: 'Strict Compliance Level', ko: '접근성 보장' },
    },
    {
      title: {
        en: 'Zero-Runtime Token Architecture',
        ko: '제로 런타임 토큰 아키텍처',
      },
      subtitle: {
        en: 'Static type inference over heavy CSS-in-JS',
        ko: '무거운 런타임 대신 정적 타입 추론',
      },
      description: {
        en: 'We eliminate runtime style re-evaluations. Styles compile at build time into pure CSS variables and utility classes, slashing bundle sizes by up to 90%.',
        ko: '런타임 스타일 재계산을 배제하고 빌드 타임에 순수 CSS 변수와 유틸리티 클래스로 컴파일하여 번들 사이즈를 최대 90% 감축합니다.',
      },
      metric: '< 30KB',
      metricLabel: { en: 'Core CSS Payload', ko: 'CSS 번들 크기' },
    },
    {
      title: {
        en: 'Resilient Finite State Machines',
        ko: '결함 없는 유한 상태 머신',
      },
      subtitle: {
        en: 'Predictable state transitions without boolean spaghetti',
        ko: '불리언 난립을 제거한 예측 가능한 상태 전이',
      },
      description: {
        en: 'Critical asynchronous flows (payments, canvas editing, streaming) are modeled as deterministic state machines that make illegal states unrepresentable.',
        ko: '결제, 캔버스 에디팅, 실시간 스트림 등 핵심 비동기 흐름을 상태 머신으로 모델링하여 잘못된 상태 전이를 원천 차단합니다.',
      },
      metric: '0 Unhandled',
      metricLabel: { en: 'Illegal State Transitions', ko: '비정상 상태 제로' },
    },
  ] as EngineeringPrinciple[],

  experiences: [
    {
      company: { en: 'Turing Dynamics Inc.', ko: '튜링 다이내믹스 (Turing Dynamics)' },
      role: { en: 'Senior Frontend Engineer', ko: '시니어 프론트엔드 엔지니어' },
      period: '2023.03 - Present',
      description: {
        en: 'Leading frontend architecture for real-time collaboration canvas and enterprise data platform.',
        ko: '실시간 협업 캔버스 및 엔터프라이즈 데이터 플랫폼의 프론트엔드 아키텍처를 총괄하고 있습니다.',
      },
      achievements: {
        en: [
          'Engineered custom Quadtree-based spatial canvas engine rendering 15k+ nodes with rock-solid 60 FPS.',
          'Reduced Core Web Vitals LCP from 2.4s to 0.76s across key product landing pages.',
          'Mentored 6 frontend engineers on modern TypeScript patterns, profiling tools, and state machine design.',
        ],
        ko: [
          '15,000개 이상 노드를 60 FPS로 그려내는 쿼드트리 기반 하이브리드 캔버스 엔진 개발',
          '핵심 프로덕트 랜딩 및 대시보드의 Core Web Vitals LCP를 2.4초에서 0.76초로 68% 단축',
          '팀 내 6명의 엔지니어를 대상으로 성능 프로파일링, TS 고급 패턴, 상태 머신 설계 멘토링 주도',
        ],
      },
      skills: ['React 19', 'TypeScript', 'Web Workers', 'Canvas API', 'Zustand', 'Performance Profiling'],
    },
    {
      company: { en: 'Veloce Labs', ko: '벨로체 랩스 (Veloce Labs)' },
      role: { en: 'Frontend Engineer', ko: '프론트엔드 엔지니어' },
      period: '2021.06 - 2023.02',
      description: {
        en: 'Built and scaled multi-tenant design system and high-throughput financial analytics UI.',
        ko: '멀티 테넌트 디자인 시스템 및 대용량 금융 데이터 모니터링 UI를 개발 및 확장했습니다.',
      },
      achievements: {
        en: [
          'Created company-wide Aura Design System with 40+ accessible headless components used across 5 web apps.',
          'Implemented SharedArrayBuffer streaming telemetry dashboard processing 50ms tick updates with zero UI lag.',
          'Set up automated visual regression testing with Playwright, catching 100% of unintended CSS regressions.',
        ],
        ko: [
          '5개 서비스에 도입된 40개 이상의 고성능 헤드리스 컴포넌트 Aura 디자인 시스템 구축',
          'SharedArrayBuffer 기반 50ms 틱 데이터 실시간 처리 파이프라인 개발로 UI 버벅임 완전 해소',
          'Playwright 기반 시각적 회귀 테스트 자동화를 도입하여 배포 전 CSS 회귀 결함 조기 차단',
        ],
      },
      skills: ['TypeScript', 'React', 'Tailwind CSS', 'Radix UI', 'Playwright', 'Vite'],
    },
    {
      company: { en: 'HyperScale Studio', ko: '하이퍼스케일 스튜디오' },
      role: { en: 'Junior Frontend Developer', ko: '주니어 프론트엔드 개발자' },
      period: '2020.01 - 2021.05',
      description: {
        en: 'Developed interactive marketing sites, CMS-driven client portals, and responsive web applications.',
        ko: '인터랙티브 웹사이트 및 반응형 클라이언트 포털 프론트엔드를 개발했습니다.',
      },
      achievements: {
        en: [
          'Built micro-interactions with Framer Motion that boosted site session duration by +45%.',
          'Achieved 100/100 Lighthouse performance audits on 12 production client launches.',
        ],
        ko: [
          '부드러운 마이크로 인터랙션을 구현하여 방문자 평균 체류 시간을 45% 향상',
          '12개 프로덕션 웹사이트에서 Lighthouse 성능·접근성 점수 100점 만점 달성',
        ],
      },
      skills: ['JavaScript (ES6+)', 'React', 'CSS Architecture', 'Webpack', 'Framer Motion'],
    },
  ] as Experience[],

  skillsCategorized: [
    {
      category: { en: 'Core Languages & Frameworks', ko: '핵심 언어 및 프레임워크' },
      items: ['TypeScript', 'JavaScript (ESNext)', 'React 19', 'Next.js (App Router)', 'HTML5 / Semantic Web'],
    },
    {
      category: { en: 'Graphics & Performance', ko: '그래픽스 및 성능 최적화' },
      items: ['HTML5 Canvas 2D', 'OffscreenCanvas', 'Web Workers', 'Virtualization (Windowing)', 'Core Web Vitals', 'Chrome DevTools Profiling'],
    },
    {
      category: { en: 'Design Systems & Styling', ko: '디자인 시스템 및 스타일링' },
      items: ['Tailwind CSS v4', 'Design Tokens', 'Radix UI Primitives', 'WCAG 2.2 AA a11y', 'Figma-to-Code Tokens', 'CSS Architecture'],
    },
    {
      category: { en: 'State & Data Architecture', ko: '상태 관리 및 데이터 아키텍처' },
      items: ['Zustand', 'Finite State Machines (XState)', 'TanStack Query', 'WebSocket Streams', 'CRDTs', 'Zod Runtime Validation'],
    },
    {
      category: { en: 'Testing & Build Tooling', ko: '테스트 및 빌드 도구' },
      items: ['Vite', 'Vitest', 'Playwright (E2E & a11y)', 'Turborepo', 'CI/CD GitHub Actions', 'npm / pnpm workspaces'],
    },
  ],
};
