import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`http://localhost:3000/api/product/${id}`);
      if (!response.ok) throw new Error("Product not found");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
      toast.error("Failed to fetch the product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]); // Refetch on id change

  useEffect(() => {
    if (product) console.log(product); // Logs updated value
  }, [product]);

  if (loading) return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );

  if (error || !product) return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center text-red-600">
      Error: {error || "Product not found"}
    </div>
  );
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <p className="text-sm text-gray-500">{product.brand}</p>

          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-600">
              {product.rating} ({product.numReviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-indigo-600 mt-6">
            ₹{product.price}
          </p>

          {/* Stock */}
          <p className="mt-2 text-sm">
            {product.countInStock > 0 ? (
              <span className="text-green-600 font-medium">
                In Stock ({product.countInStock} available)
              </span>
            ) : (
              <span className="text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          {/* Extra Info */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p>Category: {product.category}</p>
            <p>SKU: {product.sku}</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              disabled={product.countInStock === 0}
              className={`px-8 py-3 rounded-2xl transition ${
                product.countInStock === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Add to Cart
            </button>

            <button className="px-8 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
