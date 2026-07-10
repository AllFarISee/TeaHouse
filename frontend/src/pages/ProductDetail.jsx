import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <img src={product.image} className="rounded-2xl" />

        <div>
          <p className="text-green-700">{product.category.name}</p>

          <h1 className="text-5xl font-bold mt-3">{product.name}</h1>

          <h2 className="text-3xl mt-5 font-semibold">
            Rp {product.price.toLocaleString()}
          </h2>

          <p className="mt-6 text-gray-600">{product.description}</p>

          <p className="mt-5">
            Stock :<b> {product.stock}</b>
          </p>

          <button className="mt-8 bg-green-900 text-white px-8 py-4 rounded-xl">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
