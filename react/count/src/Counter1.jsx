import { useReducer } from 'react';
function reducer(state, action){
  switch (action.type) {
    case 'INCREMENT':
        return state + 1
    case 'DeCREMENT':
        return state - 1
    case 'RESET':
        return 0;
    default:
     return state;
  }


}


function Counter() {
  const [count, dispatch] = useReducer(reducer,0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch({type : 'INCREMENT'})}>
        +1
      </button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
       최기화
      </button>
    </>
  );
}

export default Counter;