import React, { useState } from 'react'
import Column from './Column'

function KanbanBoard({columns, cards, onAddCard, onMoveCard, onDeleteCard, onUpdateCard}) {
 const [draggedCard, setDraggedCard] = useState(null); //draggedCard 현재 끌고있는 카드
  const [dragOverColumn, setDragOverColumn] = useState(null); //dragOverColumn 현재 마우스가 올라간 컬럼
  const handleDragStart = (e, card) => {  //카드를 잡고 드래그 시작
    setDraggedCard(card); //드래그중인 카드 저장 
    e.dataTransfer.effectAllowed = 'move'; //드래작업목적이 이동
    e.dataTransfer.setData('text/plain', card.id); //dataTransfer - html5 제공 드래그앤드롭 api
    e.target.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => { //드래그 상태및 화면 효과 초기화
    e.target.style.opacity = '1';
    setDraggedCard(null);
    setDragOverColumn(null);
  };

  const handleDragOver = (e, columnId) => { //목적지 컬럼위 로 이동
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move'; //마우스를 놓았을때 이동작업
    setDragOverColumn(columnId); //state 현재 마우스가 올간 컬럼 id 저장
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };
// handleDrop - 드래그앤 드롭 기능에서 카드를 다른 컴럼으로 이동시키는 함수
  const handleDrop = (e, targetColumnId) => { //마우스를 놓고 카드 Id확인
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain'); //cardId 꺼내온다.
    if (cardId && draggedCard && draggedCard.columnId !== targetColumnId) {
      //draggedCard.columnId !== targetColumnId 현재 컬럼과 목적지 컬럼이 다른가?
      onMoveCard(cardId, targetColumnId); //onMoveCard 호출하여 상태를 업데이트
    }
    setDraggedCard(null);
    setDragOverColumn(null);
  };


  return (
  
    <main className='board'>
    {columns.map((column)=>(
        <div key={column.id} 
        className={`column-wrapper ${dragOverColumn === column.id ? 'drag-over' : '' }`}
        onDragOver={(e)=> handleDragOver(e, column.id)} 
        onDragLeave={handleDragLeave} 
        onDrop={(e)=>handleDrop(e,column.id)}
        >
            <Column 
                column={column}
                cards={cards.filter((c) =>c.columnId === column.id)}
                onAddCard={onAddCard} 
                onDeleteCard={onDeleteCard}
                onUpdateCard={onUpdateCard}
                  //왼쪽onDeleteCard 전달할 이름 {onDeleteCard} 실제함수
                onDragStart={handleDragStart} 
                onDragEnd={handleDragEnd}
                isDragging={draggedCard?.columId === column.id}
            />

        </div>
     ))}   
    </main>
  )
}

export default KanbanBoard