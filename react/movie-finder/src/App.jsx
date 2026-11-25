// ============================================================
// 역할: 앱의 중심 컴포넌트.
//  - 화면에 필요한 데이터(state)를 모두 관리합니다.
//  - API 함수를 호출하고, 결과를 자식 컴포넌트에 props 로 전달합니다.
//
// 화면(view) 종류
//   'home'    : 소개 + 검색창 + 인기 영화 10개
//   'popular' : 인기 영화 10개만
//   'search'  : 검색창 + 검색 결과
// ============================================================
import { useCallback, useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from './api/movieApi';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  // ----- 화면 전환 -----
  const [view, setView] = useState('home');

  // ----- 인기 영화 데이터 -----
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularLoading, setPopularLoading] = useState(true);
  const [popularError, setPopularError] = useState('');

  // ----- 검색 데이터 -----
  const [query, setQuery] = useState('');               // 입력창 글자
  const [searchResults, setSearchResults] = useState([]); // 검색 결과
  const [searched, setSearched] = useState(false);      // 한 번이라도 검색했는지
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState('');

  // ----- 상세 정보 모달 -----
  const [selectedMovieId, setSelectedMovieId] = useState(null); // null 이면 모달 닫힘

  // 페이지에 처음 접속했을 때 인기 영화를 자동으로 불러옵니다.
  // 두 번째 인자 [] : 처음 한 번만 실행
  useEffect(() => {
    async function loadPopular() {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
      } catch (err) {
        setPopularError(err.message);
      } finally {
        setPopularLoading(false); // 성공/실패와 관계없이 로딩 종료
      }
    }
    loadPopular();
  }, []);

  // 검색 실행
  async function handleSearch() {
    setView('search'); // 검색 결과는 '영화 검색' 화면에서 보여 줌

    const keyword = query.trim();
    if (!keyword) {
      setSearched(false);
      setSearchResults([]);
      setSearchError('영화 제목을 입력해 주세요.');
      return;
    }

    setSearchLoading(true);
    setSearchError('');
    try {
      const results = await searchMovies(keyword);
      setSearchResults(results);
      setSearched(true);
    } catch (err) {
      setSearchResults([]);
      setSearchError(err.message);
    } finally {
      setSearchLoading(false);
    }
  }

  // 모달 닫기 (useCallback: MovieDetail 의 useEffect 가 불필요하게 다시 실행되지 않게 함)
  const closeDetail = useCallback(() => setSelectedMovieId(null), []);

  // 화면에 따라 검색창을 보여줄지 결정
  const showSearchBar = view === 'home' || view === 'search';

  return (
    <div className="app">
      <Header currentView={view} onChangeView={setView} />

      <main className="main">
        {/* 홈 화면의 소개 문구 */}
        {view === 'home' && (
          <section className="hero">
            <h1>
              보고 싶은 영화를 <span>찾아보세요</span>
            </h1>
            <p>영화를 검색하고, 지금 인기 있는 영화를 확인할 수 있어요.</p>
          </section>
        )}

        {/* 검색창 (홈, 검색 화면) */}
        {showSearchBar && (
          <SearchBar query={query} onChange={setQuery} onSearch={handleSearch} />
        )}

        {/* 검색 화면: 검색 결과 */}
        {view === 'search' && (
          <section>
            <h2 className="section-title">검색 결과</h2>
            {/* 아직 검색 전이고 로딩/오류도 없을 때는 안내 문구 */}
            {!searched && !searchLoading && !searchError ? (
              <p className="status">영화 제목을 입력하고 검색해 보세요.</p>
            ) : (
              <MovieList
                movies={searchResults}
                loading={searchLoading}
                error={searchError}
                emptyMessage="검색 결과가 없습니다."
                onSelect={setSelectedMovieId}
              />
            )}
          </section>
        )}

        {/* 홈, 인기 영화 화면: 인기 영화 목록 */}
        {(view === 'home' || view === 'popular') && (
          <section>
            <h2 className="section-title">🔥 인기 영화 TOP 10</h2>
            <MovieList
              movies={popularMovies}
              loading={popularLoading}
              error={popularError}
              emptyMessage="표시할 영화가 없습니다."
              onSelect={setSelectedMovieId}
            />
          </section>
        )}
      </main>

      <footer className="footer">
        이 제품은 TMDB API를 사용하지만 TMDB의 보증이나 인증을 받은 것은 아닙니다.
      </footer>

      {/* 영화를 선택했을 때만 상세 모달 표시 */}
      {selectedMovieId && (
        <MovieDetail movieId={selectedMovieId} onClose={closeDetail} />
      )}
    </div>
  );
}

export default App;
