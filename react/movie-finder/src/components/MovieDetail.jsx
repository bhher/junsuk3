// ============================================================
// 역할: 영화 상세 정보를 모달 창으로 보여 줍니다.
//       (포스터, 제목, 개봉일, 평점, 줄거리, 장르)
// props
//   - movieId: 보여줄 영화의 id
//   - onClose: 닫기 버튼/바깥 영역/ESC 키를 눌렀을 때 호출할 함수
//
// 카드 목록의 데이터에는 장르 이름이 없어서,
// 모달이 열릴 때 /movie/{id} API 를 한 번 더 호출해 자세한 정보를 가져옵니다.
// ============================================================
import { useEffect, useState } from 'react';
import { getMovieDetail, getPosterUrl } from '../api/movieApi';

function MovieDetail({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);     // 상세 정보 데이터
  const [loading, setLoading] = useState(true); // 불러오는 중인지
  const [error, setError] = useState('');       // 오류 메시지

  // movieId 가 바뀔 때마다 상세 정보를 새로 가져옵니다.
  useEffect(() => {
    let ignore = false; // 모달이 닫힌 뒤 도착한 응답은 무시하기 위한 표시

    async function loadDetail() {
      setLoading(true);
      setError('');
      try {
        const data = await getMovieDetail(movieId);
        if (!ignore) setMovie(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    loadDetail();

    // 정리(cleanup) 함수: 컴포넌트가 사라질 때 실행됨
    return () => {
      ignore = true;
    };
  }, [movieId]);

  // ESC 키로 닫기 + 모달이 열려 있는 동안 뒤 화면 스크롤 막기
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    // 어두운 바깥 영역을 누르면 닫힘
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation: 모달 안쪽을 눌렀을 때는 닫히지 않게 함 */}
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="닫기">
          ✕
        </button>

        {loading && <p className="status">상세 정보를 불러오는 중입니다...</p>}
        {error && <p className="status error">{error}</p>}

        {movie && !loading && (
          <div className="detail">
            {getPosterUrl(movie.poster_path) ? (
              <img
                className="detail-poster"
                src={getPosterUrl(movie.poster_path)}
                alt={`${movie.title} 포스터`}
              />
            ) : (
              <div className="detail-poster no-poster">이미지 없음</div>
            )}

            <div className="detail-body">
              <h2>{movie.title}</h2>
              <p className="detail-meta">
                <span>개봉일 {movie.release_date || '미정'}</span>
                <span className="movie-rating">
                  ★ {movie.vote_average ? movie.vote_average.toFixed(1) : '-'}
                </span>
              </p>

              {/* 장르: 배열 [{id, name}, ...] 을 map 으로 출력 */}
              <div className="genres">
                {movie.genres.length > 0 ? (
                  movie.genres.map((genre) => (
                    <span key={genre.id} className="genre">
                      {genre.name}
                    </span>
                  ))
                ) : (
                  <span className="genre">장르 정보 없음</span>
                )}
              </div>

              <h3>줄거리</h3>
              <p className="overview">
                {movie.overview || '등록된 줄거리가 없습니다.'}
              </p>

              <button className="back-btn" onClick={onClose}>
                ← 뒤로 가기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
