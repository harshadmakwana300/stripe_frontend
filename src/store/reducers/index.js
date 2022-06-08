import { combineReducers } from "redux";
import stripeReducer from "./stripeReducer";

const reducers = combineReducers({
  stripe: stripeReducer,
});

export default reducers;
