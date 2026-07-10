import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-green-900 text-white">
        <div className="p-6 border-b border-green-700">
          <h1 className="text-2xl font-bold">🍵 TeaHouse</h1>
          <p className="text-sm mt-1 text-green-200">Admin Panel</p>
        </div>

        <nav className="flex flex-col p-4 gap-2">
          <Link to="/admin" className="hover:bg-green-800 p-3 rounded">
            Dashboard
          </Link>

          <Link
            to="/admin/categories"
            className="hover:bg-green-800 p-3 rounded"
          >
            Category
          </Link>

          <Link to="/admin/products" className="hover:bg-green-800 p-3 rounded">
            Product
          </Link>

          <Link to="/" className="hover:bg-green-800 p-3 rounded">
            Back To Website
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
