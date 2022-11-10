import countReducer from "./counterReducer";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

//reducers state oluşturduğu için combine edilmesi lazım
const reducers = combineReducers({
    countReducer, themeReducer
})

export default reducers