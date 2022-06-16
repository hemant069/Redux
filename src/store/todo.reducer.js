import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODO, GET_TODO_error, GET_TODO_loading, GET_TODO_success, UPDATE_TODO } from "./action.type";

const initailState={
    loding:false,
    error:false,
    todos:[],
}


export const todoReducer=(state=initailState,{type,payload})=>{
   
    switch(type){

        case GET_TODO_loading:{
          return {
            ...state,
            loding:true,
          }  
        }
        case GET_TODO_success:{
            return{
                ...state,
                loding:false,
                todos:payload,
            }
        }

        case GET_TODO_error:{
            return {
                ...state,
                loding:false,
                error:true,
            }
        }
       
        case ADD_TODO:{
          
           
             return{...state,todos:[...state.todos,{...payload,id:state.todos.length,},],}
        }
        case DELETE_TODO:{
            
            return{...state}
        
        }
        case COMPLETE_TODO:{
            
            return{...state}
        }
        case UPDATE_TODO:{
            
            return{...state}
        }
        default:{
            return state;
        }

    }
}