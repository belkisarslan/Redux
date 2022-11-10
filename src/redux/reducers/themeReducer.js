import actionTypes from "../actionTypes"


const lightModeStyle={backgroundColor:"white",height:"300px"}
const darkModeStyle={backgroundColor:"red",height:"300px"}
const initialState={lightModeStyle};

const themeReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.theme.LİGHT_MODE:
            return lightModeStyle
            case actionTypes.theme.DARK_MODE:
             return darkModeStyle;
             default:
                return state;
    }
}

export default themeReducer