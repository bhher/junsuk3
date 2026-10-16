import React from 'react'
import UserInfo from './UserInfo'

function UserSection({
    user, updateUserName, updateUserAge
}) {
  return (
    <setction className="section">
        <h2>사용자 정보</h2>
        <UserInfo 
            user = {user}
            updateUserName = {updateUserName} 
            updateUserAge = {updateUserAge}
        />    
    </setction>
  )
}

export default UserSection