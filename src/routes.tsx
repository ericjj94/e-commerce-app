import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ProductsPage from "./pages/ProductsPage";

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
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
