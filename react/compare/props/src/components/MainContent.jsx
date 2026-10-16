import React from 'react'
import UserSection from './UserSection'
import CounterSection from './CounterSection'

function MainContent({
    user,
    updateUserName,
    updateUserAge,
    count,
    decrementCount,
    incrementCount,
    resetCount,
}) {
  return (
    <main className='main-content'>
        <CounterSection 
            count={count} 
            incrementCount = {incrementCount}
            decrementCount = {decrementCount}
            resetCount={resetCount}        
        />

        <UserSection 
            user = {user}
            updateUserName = {updateUserName} 
            updateUserAge = {updateUserAge}
        />

    </main>
  )
}

export default MainContent