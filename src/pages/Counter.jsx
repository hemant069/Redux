import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { counterDec, counterInc } from '../store/action'
const Counter = () => {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.count)
  
  return (
    
    <div><h1>Counter App:{count}</h1>
    <div>
      <button onClick={()=>dispatch(counterInc())}>+</button>
      <button onClick={()=>dispatch(counterDec())}>-</button>
    </div>
    </div>
  )
}

export default Counter