// ============================================================
// 역할: 화면 맨 위의 로고와 메뉴(홈 / 인기 영화 / 영화 검색)
// props
//   - currentView : 지금 보고 있는 화면 이름 ('home' | 'popular' | 'search')
//   - onChangeView: 메뉴를 눌렀을 때 호출할 함수 (App 이 화면을 바꿔 줌)
// ============================================================

// 메뉴 목록을 배열로 두면 map 으로 반복 출력할 수 있어 코드가 짧아집니다.
const MENUS = [
  { view: 'home', label: '홈' },
  { view: 'popular', label: '인기 영화' },
  { view: 'search', label: '영화 검색' },
];

function Header({ currentView, onChangeView }) {
  return (
    <header className="header">
      <div className="header-inner">
        {/* 로고를 누르면 홈으로 이동 */}
        <button className="logo" onClick={() => onChangeView('home')}>
          MOVIE <span>FINDER</span>
        </button>

        <nav className="nav">
          {MENUS.map((menu) => (
            <button
              key={menu.view}
              // 현재 화면과 같으면 active 클래스를 추가해 강조
              className={currentView === menu.view ? 'nav-btn active' : 'nav-btn'}
              onClick={() => onChangeView(menu.view)}
            >
              {menu.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
