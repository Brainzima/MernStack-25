import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    title: "Premium Headphones",
    description: "High quality wireless headphones",
    price: 199,
    image: "https://source.unsplash.com/400x400/?headphones"
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Modern smartwatch for daily fitness tracking",
    price: 149,
    image: "https://source.unsplash.com/400x400/?watch"
  }
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Discover Premium Products
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Explore our curated collection of high-quality items designed for modern living.
        </p>
        <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-2xl hover:bg-indigo-700 transition">
          Shop Now
        </button>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
