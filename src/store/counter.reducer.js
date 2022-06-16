import { COUNTER_DECREMENT,COUNTER_INCREMENT } from "./action.type";


export const counterReducer =(state={count:0},{type,payload})=>{
    console.log(state);
    switch(type){
        case COUNTER_INCREMENT:{
            state.count++;
            return{...state}
        }
        case COUNTER_DECREMENT:{
            if(state.count>0)
            state.count--;
            return{...state}
        }
        default:{
            return state;
        }

    }
}
