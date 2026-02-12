import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Products() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/product');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            toast.error("Failed to fetch the products.");
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          All Products
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
