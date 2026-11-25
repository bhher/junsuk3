import React from 'react'
import MovieCard from './MovieCard';

function MovieList({movies, loading,error,emptyMessage,onSelect}) {
 if (loading) return <p className="status">영화 정보를 불러오는 중입니다...</p>;
  if (error) return <p className="status error">{error}</p>;
  if (movies.length === 0) return <p className="status">{emptyMessage}</p>;
  return (
    <div className='movie-grid'>
     
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} onClick={onSelect} />
        ))}
      
    </div>
  )
}

export default MovieList