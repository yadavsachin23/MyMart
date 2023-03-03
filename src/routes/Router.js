import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import AllProducts from "../admin/AllProducts";
import AddProduct from "../admin/AddProduct";
import Dashboard from "../admin/Dashboard";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />

        <Route path="/*" element={<ProtectedRoutes />}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/all-products" element={<AllProducts />} />
          <Route path="dashboard/add-product" element={<AddProduct />} />
        </Route>
        {/* <Route
          path="checkout"
          element={
            <ProtectedRoutes>
              <Checkout />
            </ProtectedRoutes>
          }
        /> */}
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
};
export default Router;
