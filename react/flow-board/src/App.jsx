import  { useState } from 'react'
import KanbanBoard from './components/KanbanBoard';

const INITIAL_COLUMNS = [
  { id: 'ideas', title: '아이디어', color: '#7c3aed' },
  { id: 'today', title: '오늘', color: '#0891b2' },
  { id: 'progress', title: '진행중', color: '#ea580c' },
  { id: 'done', title: '완료', color: '#16a34a' },
];

const INITIAL_CARDS = [
  { id: '1', text: '프로젝트 기획서 작성', columnId: 'ideas', createdAt: Date.now() },
  { id: '2', text: '회의 준비 자료 정리', columnId: 'today', createdAt: Date.now() },
  { id: '3', text: 'React 학습 노트 정리', columnId: 'progress', createdAt: Date.now() },
  { id: '4', text: '이메일 답장하기', columnId: 'done', createdAt: Date.now() },
];



function App() {

  const [columns] = useState(INITIAL_COLUMNS);
  const [cards, setCards] = useState(INITIAL_CARDS);

  const addCard = (columnId, text) =>{
    if(!text.trim()) return;
    const newCard ={
      id: crypto.randomUUID(),
      text: text.trim(),
      columnId,
      createAt : Date.now(),
    }
    setCards(prev =>[...prev, newCard])
  }

  const moveCard = (cardId, targetColumnId) =>{
    setCards(prev =>
      prev.map(card =>
          
          card.id === cardId ? { ...card, columnId: targetColumnId } : card
      )
    );
  };
  //moveCard(1, "done")
// cardId - 이동할 카드 Id
//targetColumnId 이동할 목적지 컬럼 id
// setCards :cards 상태를 변경하는 함수  prev: 변경하기전 기존 cards 배열
//prev.map(card => 기존배열을 처음부터 끝까지 순회하면서 새로운 배열만든다.
//columId:targetColumnId : columnId만 새로운 값으로 변경

const deleteCard = (cardId) =>{
  setCards(prev => prev.filter(card => card.id !== cardId));
}

//updatdCard(2, "수정할 할일")
const updateCard = (cardId, newText) => {
   setCards(prev =>
      prev.map(card =>
        card.id === cardId ? { ...card, text: newText } : card
        //모든카드를 불러서 기존text 를 newText 로변경
      )
    );
};




  return (
    <div className='app'>
        <header className="header">
          <h1 className="logo">Flow</h1>
          <p className="tagline">드래그로 작업 흐름을 시각화하세요</p>
        </header>
        <KanbanBoard 
          columns={columns} 
          cards={cards}
          onAddCard={addCard} 
          onMoveCard={moveCard}
          onDeleteCard={deleteCard} 
          onUpdateCard={updateCard}
        />
    </div>
  )
}

export default App