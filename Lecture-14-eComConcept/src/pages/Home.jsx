import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data.slice(0, 4));
            } catch (err) {
                console.log("Error fetching products:", err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className="w-full">

                <section className="bg-yellow-200 rounded-3xl max-w-7xl mx-auto mt-10 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-lg">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Discover Your Next
                            <span className="text-green-700"> Favorite Product</span>
                        </h1>

                        <p className="text-gray-700 mt-4 text-lg">
                            Shop the latest collections in fashion, electronics, home essentials, and more.
                            Trusted quality, fast delivery, and secure payments.
                        </p>

                        <div className="mt-6">
                            <button className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-green-700 transition hover:cursor-pointer">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=60"
                            className="rounded-3xl shadow-xl object-cover w-full h-72 md:h-96"
                            alt="Ecommerce Hero"
                        />
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {["Men's Clothing", "Women's Clothing", "Electronics", "Jewelry"].map((cat, idx) => (
                            <div
                                key={idx}
                                className="bg-green-200 p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-gray-700 text-center">{cat}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 mt-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Featured Products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white border border-gray-200 rounded-3xl p-5 shadow hover:shadow-xl hover:-translate-y-1 transition"  >
                                <div className="h-48 flex justify-center items-center overflow-hidden rounded-xl bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-full object-contain" />
                                </div>

                                <h3 className="text-lg font-semibold mt-4 line-clamp-2 text-gray-800">
                                    {product.title}
                                </h3>

                                <p className="mt-2 text-green-700 font-bold text-xl">${product.price}</p>

                                <div className="flex items-center gap-4 mt-4">
                                    <button
                                        className="px-3 py-1 rounded-xl font-semibold flex items-center gap-2
                                                   bg-blue-100 text-blue-700 border border-blue-300 shadow-sm
                                                   hover:bg-blue-200 hover:border-blue-400 hover:text-blue-800 
                                                   transition-all duration-200 hover:cursor-pointer"   >
                                        <i className="fa-solid fa-cart-plus text-base"></i>
                                        Add to Cart
                                    </button>

                                    <button
                                        className="px-2 py-1 rounded-xl font-semibold flex items-center gap-2
                                                   bg-blue-100 text-blue-700 border border-blue-300 shadow-sm
                                                   hover:bg-blue-200 hover:border-blue-400 hover:text-blue-800 
                                                   transition-all duration-200 hover:cursor-pointer" >
                                        <i className="fa-solid fa-circle-info text-base"></i>
                                        Know More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 mt-24 mb-16">
                    <div className="bg-green-200 p-10 rounded-3xl shadow-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Join Our Newsletter</h2>

                        <p className="text-gray-700 mt-2">
                            Get updates on the newest products and upcoming offers.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-xl w-full sm:w-96 outline-none border border-gray-300" />
                            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition hover:cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
