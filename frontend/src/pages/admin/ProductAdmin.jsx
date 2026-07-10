import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/productService";
import { getCategories } from "../../services/categoryService";

function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    image: null,
  });

  useEffect(() => {
    loadProducts();

    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const loadProducts = () => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch(console.error);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const resetForm = () => {
    setEditingId(null);

    setForm({
      name: "",
      description: "",
      price: "",
      stock: "",
      categoryId: "",
      image: null,
    });

    document.getElementById("image").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("stock", form.stock);
      formData.append("categoryId", form.categoryId);

      if (form.image) {
        formData.append("image", form.image);
      }

      if (editingId) {
        await updateProduct(editingId, formData);
      } else {
        await createProduct(formData);
      }

      resetForm();

      loadProducts();
    } catch (error) {
      console.log(error);
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);

    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      categoryId: product.categoryId,
      image: null,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus produk?");

    if (!confirmDelete) return;

    await deleteProduct(id);

    loadProducts();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Product Management</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4 mb-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows={4}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">-- Choose Category --</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          id="image"
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full"
        />

        <button className="bg-green-900 text-white px-6 py-3 rounded hover:bg-green-700">
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-green-900 text-white">
            <tr>
              <th className="p-4">Image</th>

              <th>Name</th>

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8">
                  No Product Found
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>

                  <td>{product.name}</td>

                  <td>{product.category.name}</td>

                  <td>Rp {product.price.toLocaleString("id-ID")}</td>

                  <td>{product.stock}</td>

                  <td>
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductAdmin;
