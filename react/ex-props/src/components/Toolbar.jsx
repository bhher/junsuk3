import React from 'react'

function Toolbar({theme, onToggleTheme, count , onIncrement}) {
  return (
    <section className='panel'>
         <p className="note">
            <strong>Tolbar</strong> 는 props만 받아 버튼을 렌더링합니다.
        </p>
        <button type='button' className='btn-toggle' onClick={onToggleTheme}>
            테마 : {theme === 'light' ? '라이트' : '다크'} (전환)
        </button>
        {/* button 클릭하면 부모에서 전달받은 onToggleTheme 함수가 실행 */}
        <button type='button' className='btn-toggle' onClick={onIncrement} 
        style={{marginLeft:'0.5rem'}}>
                카운트 + 1 (현재 {count})  
        </button>
    </section>
  )
}

export default Toolbar
//전체 흐름
//버튼클릭(Toobar) -> App 함수 실행 -> state 변경 -> props -> Toolbar/CantentPanel 자동업데이트