import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-linear-to-r from-green-100 to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-extrabold text-green-900 leading-tight">
            Fresh Tea
            <br />
            Better Mood
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Discover premium tea made from carefully selected leaves with the
            best quality.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-green-900 text-white px-8 py-4 rounded-xl hover:bg-green-800"
          >
            Explore Menu
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;
