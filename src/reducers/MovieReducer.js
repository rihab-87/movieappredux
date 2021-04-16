import {moviesData} from "../components/data";
import{ADD,DELETE} from '../actions/actiontypes'
const  movies=moviesData
const MovieReducer=(state=movies,action)=>{
    switch(action.type){
        case ADD: return   state.concat(action.payload);
        case DELETE: return state.filter((el)=> el.id!==action.payload)
    
    default : return state
    }
}
export default MovieReducer