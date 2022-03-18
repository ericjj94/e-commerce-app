import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../reducers/productsReducer";

const ProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return <div>ProductsPage</div>;
};
export default ProductsPage;
