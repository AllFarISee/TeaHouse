import { useEffect, useState } from "react";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/categoryService";

function Category() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch(console.error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateCategory(editingId, {
          name,
        });
      } else {
        await createCategory({
          name,
        });
      }

      setName("");
      setEditingId(null);

      loadCategories();
    } catch (error) {
      console.log(error);
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setName(category.name);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus kategori?");

    if (!confirmDelete) return;

    await deleteCategory(id);

    loadCategories();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Category Management</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-8 flex gap-4"
      >
        <input
          type="text"
          placeholder="Category Name"
          className="border p-3 rounded flex-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button className="bg-green-900 text-white px-6 rounded hover:bg-green-700">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-green-900 text-white">
            <tr>
              <th className="p-4">ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-8">
                  No Category
                </td>
              </tr>
            ) : (
              categories.map((category) => (
                <tr key={category.id} className="border-b">
                  <td className="p-4">{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleEdit(category)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
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

export default Category;
