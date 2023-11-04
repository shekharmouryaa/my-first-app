

const initialState ={
    count : 0
}


export const counterReducer = (state = initialState, action) =>{
   debugger
    switch(action.type){
        case "INCREMENT" :
        return {
            ...state,
            count : action.payload
        }
        case "DECREMENT" :
        return {
            ...state,
            count : action.payload
        }
        default:
        return state

    }



}