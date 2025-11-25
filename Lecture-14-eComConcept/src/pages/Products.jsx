import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const {addToCart} = useContext(CartContext)

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false)
      } catch (error) {
        alert("Fetching Error Buddy Sorry");
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 
                       bg-gradient-to-r from-blue-600 to-purple-600
                       text-transparent bg-clip-text">
          Latest Products
        </h1>

        {loading ?
          <>
            <div className="liquid-loader">
              <div className="loading-text">
                Loading<span className="dot">.</span><span className="dot">.</span
                ><span className="dot">.</span>
              </div>

              <div className="loader-track">
                <div className="liquid-fill"></div>
              </div>
            </div>
          </>
          : 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-3xl shadow-md 
                         hover:shadow-xl hover:-translate-y-1 transition-all p-5">
              <div className="w-full h-56 flex justify-center items-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain hover:scale-110 transition-transform duration-300" />
              </div>

              <h2 className="text-lg font-semibold mt-4 line-clamp-2 text-gray-900">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1 capitalize">
                {product.category}
              </p>

              <p className="text-xl font-bold text-green-600 mt-3">
                ${product.price}
              </p>

              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500 text-lg">⭐</span>
                <p className="text-sm text-gray-600">
                  {product.rating.rate} ({product.rating.count})
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 mt-5">

                <button
                  onClick={()=>addToCart(product)}
                  className="w-1/2 py-2.5 rounded-xl font-semibold text-center
                      bg-gradient-to-r from-blue-600 to-blue-700
                     text-white shadow-lg hover:shadow-xl 
                     hover:from-blue-700 hover:to-blue-800
                     active:scale-95 transition-all duration-300">
                  Add to Cart
                </button>

                <Link
                  to={`/ProductDetails/${product.id}`}
                  className="w-1/2 py-2.5 rounded-xl font-semibold text-center
                      bg-gradient-to-r from-gray-200 to-gray-300
                     text-gray-800 shadow-md hover:shadow-xl
                     hover:from-gray-300 hover:to-gray-400
                     active:scale-95 transition-all duration-300">
                  Know More
                </Link>
              </div>

            </div>
          ))}
        </div>
        }
      </div>
    </>
  );
}
