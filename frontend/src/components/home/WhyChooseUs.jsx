import { FaLeaf, FaTruck, FaMedal, FaHeart } from "react-icons/fa";

function WhyChooseUs() {
  const items = [
    {
      icon: <FaLeaf />,
      title: "Organic",
    },

    {
      icon: <FaMedal />,
      title: "Premium",
    },

    {
      icon: <FaTruck />,
      title: "Fast Delivery",
    },

    {
      icon: <FaHeart />,
      title: "Fresh Everyday",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-900">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow text-center"
            >
              <div className="text-5xl text-green-700 flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-5 font-bold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
