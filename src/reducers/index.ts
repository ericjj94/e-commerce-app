import { combineReducers } from "redux";
import cartReducer from "./cartReducer/cartReducer";
import productsReducer from "./productsReducer";

const rootReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
export default rootReducers;
