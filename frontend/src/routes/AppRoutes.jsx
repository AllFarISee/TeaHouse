import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Category";
import ProductAdmin from "../pages/admin/ProductAdmin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<Category />} />
          <Route path="products" element={<ProductAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
