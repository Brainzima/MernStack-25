import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-4">
      
      <Link to={`/product/${product._id}`}>
        
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover hover:scale-110 transition duration-300"
          />

          {product.countInStock === 0 && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Content */}
        <div className="mt-4">
          <p className="text-xs text-gray-500">{product.brand}</p>

          <h3 className="font-semibold text-gray-800 mt-1 truncate">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">
              {product.rating} ({product.numReviews})
            </span>
          </div>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-indigo-600">
              ₹{product.price}
            </span>

            <button
              disabled={product.countInStock === 0}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                product.countInStock === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Add
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
