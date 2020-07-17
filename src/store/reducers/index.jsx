import { combineReducers } from "redux";
import courseReducer from "./course";

const rootReducer = combineReducers({
  courseList: courseReducer,
});

export default rootReducer;
