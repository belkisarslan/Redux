import countReducer from "./counterReducer";
import { combineReducers } from "redux";

//reducers state oluşturduğu için combine edilmesi lazım
const reducers = combineReducers({
    countReducer
})

export default reducers