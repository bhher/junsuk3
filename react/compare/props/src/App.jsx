import React from 'react'
import { useState } from 'react'
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [user, setUser] = useState({
     name: "홍길동",
     age:25,
  });

  const updateUserName = (name) => setUser({...user, name});
  // ...user  기존의 user 를 펼쳐 놓고 name을 변경 
  const updateUserAge = (age) => setUser({...user, age});
  //기존의 user 를 펼쳐 놓고 age 변경

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);


  return (
    <div className='app'>
      <Header user={user}/>
      <MainContent 
        user={user}
        updateUserName ={updateUserName}
        // Props 이름 - 실제 전달할값 (홍길동 , 30) 
        updateUserAge = {updateUserAge}

        count={count} 
        incrementCount = {incrementCount}
        decrementCount = {decrementCount}
        resetCount={resetCount}
      />
    </div>
  )
}

export default App

// count: 현재 숫자 상태
// setCount: 숫자 상태를 변경하는 함수
// user: 사용자 정보 객체
// setUser: 사용자 정보 객체를 변경하는 함수

