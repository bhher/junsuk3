// ============================================================
// 역할: TMDB API 호출 코드를 한 곳에 모아 둔 파일
// - 컴포넌트에서는 fetch 를 직접 쓰지 않고 이 파일의 함수만 호출합니다.
// - 반환값은 JSON 데이터(자바스크립트 객체/배열)입니다.
// ============================================================

// .env 파일의 VITE_TMDB_API_KEY 값을 읽어 옵니다. (VITE_ 로 시작해야 브라우저에서 읽힘)
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// TMDB API 기본 주소
const BASE_URL = 'https://api.themoviedb.org/3';

// 포스터 이미지 기본 주소 (뒤에 poster_path 를 붙이면 이미지 주소가 됨)
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

/**
 * 공통 요청 함수
 * @param {string} path   예: '/movie/popular'
 * @param {object} params 쿼리스트링으로 붙일 값. 예: { query: '어벤져스' }
 */
async function request(path, params = {}) {
  // 1) API 키가 없으면 요청하기 전에 안내 메시지를 던집니다.
  if (!API_KEY || !API_KEY.trim()) {
    throw new Error('API 키가 없습니다. .env 파일에 VITE_TMDB_API_KEY 를 입력하고 서버를 다시 실행하세요.');
  }

  // 2) 주소 만들기: 기본 주소 + 경로 + ?api_key=...&language=ko-KR&...
  const searchParams = new URLSearchParams({
    api_key: API_KEY.trim(),
    language: 'ko-KR', // 한국어로 받기
    ...params,
  });
  const url = `${BASE_URL}${path}?${searchParams.toString()}`;

  // 3) 네트워크 요청 (인터넷이 끊기면 여기서 오류가 발생)
  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.');
  }

  // 4) 응답 상태 확인 (200번대가 아니면 실패)
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('API 키가 올바르지 않습니다. 키를 다시 확인해 주세요.');
    }
    if (response.status === 404) {
      throw new Error('요청한 정보를 찾을 수 없습니다.');
    }
    throw new Error(`데이터를 불러오지 못했습니다. (오류 코드: ${response.status})`);
  }

  // 5) 응답 본문(JSON 문자열)을 자바스크립트 객체로 변환해서 돌려줍니다.
  return response.json();
}

/** 인기 영화 10개 가져오기: GET /movie/popular */
export async function getPopularMovies() {
  const data = await request('/movie/popular', { page: 1 });
  // data.results 는 보통 20개 → 앞에서 10개만 사용
  return data.results.slice(0, 10);
}

/** 영화 제목으로 검색하기: GET /search/movie */
export async function searchMovies(query) {
  const data = await request('/search/movie', {
    query, // URLSearchParams 가 한글 등을 자동으로 인코딩해 줍니다.
    page: 1,
    include_adult: 'false',
  });
  return data.results;
}

/** 영화 한 편의 상세 정보 가져오기: GET /movie/{movie_id} */
export async function getMovieDetail(movieId) {
  return request(`/movie/${movieId}`);
}

/** 포스터 경로를 완성된 이미지 주소로 바꿔 주는 도우미 함수 (없으면 null) */
export function getPosterUrl(posterPath) {
  return posterPath ? `${IMAGE_BASE_URL}${posterPath}` : null;
}
