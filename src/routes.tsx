import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ProductDetails from "./pages/ProductsDetails";
import ProductsPage from "./pages/ProductsPage";
import ViewCart from "./pages/ViewCart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <ProductsPage />
            </AppLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <AppLayout>
              <ViewCart />
            </AppLayout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <AppLayout>
              <ProductDetails />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
