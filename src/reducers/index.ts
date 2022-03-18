import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const rootReducers = combineReducers({
  products: productsReducer,
});
export default rootReducers;
