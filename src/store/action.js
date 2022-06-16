import axios from "axios";
import { ADD_TODO, COMPLETE_TODO, COUNTER_DECREMENT, COUNTER_INCREMENT, DELETE_TODO, GET_TODO_error, GET_TODO_loading, GET_TODO_success, UPDATE_TODO } from "./action.type";

//COUNTER APP
export const counterInc=()=>({type:COUNTER_INCREMENT})
export const counterDec=()=>({type:COUNTER_DECREMENT})



//Get Todo data

export const getTodo=(dispatch)=>{
    dispatch({type:GET_TODO_loading})

    return axios
    .get('http://localhost:8080/todos')
    .then((r)=>{
        dispatch({type:GET_TODO_success,payload:r.data})
    

    })

    .catch(()=>{

        dispatch({type:GET_TODO_error})
    })
}

export const addTodo=(dispatch,payload)=>{
    axios.post('http://localhost:8080/todos',payload).then(r=>{
        console.log(r.data);
        dispatch({type:ADD_TODO,payload})
    })
}

//TODO APP

export const todoAdd=(dispatch,payload)=>({type:ADD_TODO,payload})
export const todoComplete=(id)=>({type:COMPLETE_TODO,payload:id})
export const todoUpated=(payload)=>({type:UPDATE_TODO,payload})
export const todoRemove=(id)=>({type:DELETE_TODO,payload:id})

