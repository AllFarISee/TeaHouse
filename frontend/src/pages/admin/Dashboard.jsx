import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { getCategories } from "../../services/categoryService";

function Dashboard() {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });

    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-xl font-semibold">Total Product</h2>

          <p className="text-5xl mt-4 text-green-900">{products.length}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-xl font-semibold">Total Category</h2>

          <p className="text-5xl mt-4 text-green-900">{categories.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
