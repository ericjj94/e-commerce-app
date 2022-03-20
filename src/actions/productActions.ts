import { Dispatch } from "@reduxjs/toolkit";
import { setProductDetails, setProducts } from "../reducers/productsReducer/productsReducer";
import FetchService from "../services/FetchService";

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
      dispatch(setProductDetails(result));
    } catch (e) {
      console.log("Error getting product details", e);
    }
  };
};

export const searchProducts = (searchText: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await FetchService(`/search_products?searchText=${searchText}`, "GET");
      dispatch(setProducts(result));
    } catch (e) {
      console.log("Error searching for products", e);
    }
  };
};
