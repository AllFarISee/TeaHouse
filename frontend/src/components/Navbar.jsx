import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-900">
          🍵 TeaHouse
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>

          <Link to="/products" className="hover:text-green-700">
            Products
          </Link>

          <Link
            to="/admin"
            className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
