import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo, todoAdd } from '../store/action'




const TodoApp = () => {
  const ref=useRef();
  const dispatch=useDispatch()
  const {loading,error,todos}=useSelector((state)=>state.todo)


  const addNew=()=>{
    let value=ref.current.value;
    
      todoAdd(dispatch,{
      value:value,
      isCompleted:false,
    })
    
 
  }
 

  useEffect(()=>{
   getTodo(dispatch)
  },[]);

if(loading) return<h1>Loding....</h1>
 else if(error) return<h1>Something went wrong</h1>

  return (
    <div>TodoApp
      <div>
        <input ref={ref} type="text" />
        <button onClick={addNew}>Add</button>
      </div>
      <br />
      <br />
      {todos.map((todo)=>(
       <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
   

  )
}

export default TodoApp