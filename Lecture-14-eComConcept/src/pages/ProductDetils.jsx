import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch product");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <>
                <div className="liquid-loader">
                    <div className="loading-text">
                        Loading
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                    </div>

                    <div className="loader-track">
                        <div className="liquid-fill"></div>
                    </div>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center py-20 text-red-600 text-xl font-semibold">
                {error}
            </div>
        );
    }

    return (
        <>
            <div>
                <h1 className="text-center font-bold text-blue-500 text-4xl">
                    Product Details
                </h1>
            </div>

            <div className="w-full flex justify-center py-10 bg-gray-100">
                <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-64 h-64 object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                                {product.title}
                            </h1>

                            <p className="text-sm text-gray-500 mb-3 capitalize">
                                Category: {product.category}
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-yellow-500 text-xl">
                                    {"★".repeat(Math.round(product.rating.rate))}
                                </span>
                                <span className="text-gray-600 text-sm">
                                    {product.rating.rate} / 5 ({product.rating.count} reviews)
                                </span>
                            </div>

                            <div className="text-3xl font-semibold text-blue-600 mb-6">
                                ${product.price}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <button className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                                Add to Cart
                            </button>

                            <button className="w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
