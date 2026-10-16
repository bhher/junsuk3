import React from 'react'
import AppProvider from './context/AppContext'
import Header from './components/Header'
import MainContent from './components/MainContent'
import "./App.css"

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Header/>
        <MainContent/>
      </div>
    </AppProvider>
  )
}
export default App
//Context -> 전역데이터 통로
//Provider -> 데이터 공급
//useContext -> 데이터꺼내기