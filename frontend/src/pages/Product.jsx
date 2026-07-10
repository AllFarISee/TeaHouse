import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import { getCategories } from "../services/categoryService";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });

    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        product.category.name === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [products, search, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-green-900">Our Tea Collection</h1>
    
      <input
        className="border mt-8 w-full p-4 rounded-xl"
        placeholder="Search Tea..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-wrap gap-4 mt-8">
        <button
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "All"
              ? "bg-green-900 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-5 py-2 rounded-full ${
              selectedCategory === category.name
                ? "bg-green-900 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Product;