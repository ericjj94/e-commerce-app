import { createSlice, Dispatch } from "@reduxjs/toolkit";
import FetchService from "../services/FetchService";
import { ActionType, ProductObject } from "../state";

const initialState = {
  productsList: [],
  productDetails: {},
};

export const productsReducer = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {
    setProducts: (state, action: ActionType) => {
      return {
        ...state,
        productsList: action.payload,
      };
    },
    setProductDetails: (state, action: ActionType) => {
      return {
        ...state,
        productDetails: action.payload,
      };
    },
  },
});
export const { setProducts, setProductDetails } = productsReducer.actions;

export const getProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await FetchService("/products", "GET");
      dispatch(setProducts(result));
    } catch (e) {
      console.log("Error fetching products", e);
    }
  };
};

export const getProductDetails = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await FetchService(`/product_details?id=${id}`, "GET");
      console.log("result", result);
      dispatch(setProductDetails(result));
    } catch (e) {
      console.log("Error getting product details", e);
    }
  };
};

export default productsReducer.reducer;
