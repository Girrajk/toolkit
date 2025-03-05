import React from 'react'
import "./Counter.css"
import { useSelector , useDispatch  } from "react-redux";
import { increment,decrement,reset } from '../react-redux/counterSlice';


function Counter2() {

  let count = useSelector((state )=> state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className='main'>
    <h1>Counter Application</h1>
        <p>Count:{count}</p>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter2