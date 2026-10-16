import React from 'react'
import { useState } from 'react'

function UserInfo({
      user, updateUserName, updateUserAge
}) {
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState("");

    const handleNameSubmit = (e) =>{
        e.preventDefault();
        if(nameInput.trim()){
            updateUserName(nameInput); //nameinput 키보드로 이름입력 내용
            setNameInput('');
        }
    }
  
    const handleAgeSubmit = (e) => {
    e.preventDefault();
    if (ageInput && !isNaN(ageInput)) {
      //not a number
      updateUserAge(parseInt(ageInput));
      //parseInt(10.5px) -> 10
      setAgeInput("");
    }
  };

  return (
    <div className="user-info">
        <div className="user-display">
            <p>
                <strong>이름: </strong> {user.name}
            </p>
            <p>
                <strong>나이: </strong> {user.age}
            </p>
        </div>
        <form onSubmit = {handleNameSubmit} className='form'>
            <input type="text" 
                value={nameInput} 
                onChange={(e) => setNameInput(e.target.value)} 
                placeholder='새이름 입력'
            />
            <button type='submit'>이름 버튼</button>
        </form>
       <form onSubmit={handleAgeSubmit} className="form">
            <input
            type="number"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
            placeholder="새 나이 입력"
            />
            <button type="submit">나이 변경</button>
      </form>
    </div>
  )
}

export default UserInfo