import React from 'react'
import { getPosterUrl } from '../api/movieApi'

function MovieCard({movie, onClick}) {
   const posterUrl = getPosterUrl(movie.poster_path);
 // 평점은 소수점 첫째 자리까지 (예: 7.834 → 7.8). 평가가 없으면 '-'
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : '-';
  return (
    // 접근성과 키보드 사용을 위해 button 태그로 만듦
    <button className="movie-card" onClick={() => onClick(movie.id)}>
      {posterUrl ? (
        <img src={posterUrl} alt={`${movie.title} 포스터`} loading="lazy" />
      ) : (
        // 포스터가 없는 영화는 대체 화면 표시
        <div className="no-poster">이미지 없음</div>
      )}

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-date">{movie.release_date || '개봉일 미정'}</p>
        <p className="movie-rating">★ {rating}</p>
      </div>
    </button>
  );

}

export default MovieCard