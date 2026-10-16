
import { createContext, useState ,useContext } from 'react'

//Context 생성 - 전역데이터 통로(빈통로)
const AppContext = createContext();

//Provider = 데이터 공급자
//children = 감싸진 컴포넌트

export default function AppProvider({children}) {
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
  
    const value = {
        user,
        updateUserName,
        updateUserAge,
        count,
        decrementCount,
        incrementCount,
        resetCount,

    } ;

    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    //provider 감싸진 모든 컴포넌트 내에서  -> value접근 가능
  );
}


export function useAppContext() {
   const context = useContext(AppContext); //-> 쉽게 꺼내서 사용하기 좋게
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
