import{ADD,DELETE,DISPLAY} from './actiontypes'


export const addmovie=(newmovie)=>
{
    return{
        type: ADD,
        payload:newmovie,
    }
}
export const deletmovie=(id)=>
{
    return{
        type: DELETE,
        payload:id,
    }
}
export const display=()=>
{
    return{
        type: DISPLAY,
       
    }
}