import { FOR_DATA } from "../Actions/ActionTypes";

const initialState=[];

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FOR_DATA: return{
            ...state,
            products: action.payload
        }
            //console.log(action.payload+"--------")
            //return[...action.payload];
            //return state.data=action.payload
        default: 
            return state;
    }
}

export default reducer;