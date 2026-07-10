function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
      <img src={product.image} className="w-full h-64 object-cover" />

      <div className="p-5">
        <p className="text-green-700 text-sm">{product.category.name}</p>

        <h2 className="text-2xl font-bold mt-2">{product.name}</h2>

        <p className="text-gray-500 mt-2 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-xl font-bold text-green-900">
            Rp {product.price.toLocaleString("id-ID")}
          </span>

          <span>Stock {product.stock}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;