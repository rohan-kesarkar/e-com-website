import reducer from "./reducer";
import { combineReducers } from "redux";

const rooReducer = combineReducers({
 shop:reducer
})

export default rooReducer