import React from 'react'

function SearchBar({query,onChange, onSearch}) {

    function handleSubmit(e) {
        e.preventDefault(); //폼 제출시 페이지 새로고침 방지
        onSearch();
    }

  return (
     <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="영화 제목을 입력하세요 (예: 어벤져스)"
        aria-label="영화 제목 검색"
      />
      <button type="submit">검색</button>
    </form>
  )
}

export default SearchBar