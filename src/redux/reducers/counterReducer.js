import actionTypes from "../actionTypes"

const initialState=0;

//5.adım ilk state değerimize 0 verdik. Reducer state ve action parametreleri alır.
const countReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.count.NUMBER_INCREASE:
            return state+action.payload;
            case actionTypes.count.NUMBER_DECREASE:
             return state-action.payload;
             default:
                return state;
    }
}

export default countReducer