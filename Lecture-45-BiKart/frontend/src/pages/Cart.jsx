import { Trash2, Plus, Minus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

export default function Cart() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // ===== CHECK LOGIN BEFORE CHECKOUT =====
  const PaymentHandle = () => {

    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!user || !token) {
      alert("Please Login or Register First");
      navigate("/register");
      return;
    }

    const parsedUser = JSON.parse(user);

    alert(`Order placed successfully by ${parsedUser.name}`);
  };

  // ===== INCREASE QUANTITY =====
  const increaseQty = (item) => {
    if (item.quantity < item.countInStock) {
      dispatch(updateQuantity({
        id: item._id,
        quantity: item.quantity + 1
      }));
    }
  };

  // ===== DECREASE QUANTITY =====
  const decreaseQty = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        id: item._id,
        quantity: item.quantity - 1
      }));
    }
  };

  // ===== CALCULATE SUBTOTAL =====
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qnty,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Your cart is empty.</p>
            <Link
              to="/products"
              className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-2xl"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ===== CART ITEMS ===== */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-xl object-cover"
                  />

                  <div className="flex-1">

                    <h2 className="font-semibold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="text-indigo-600 font-bold mt-2">
                      ₹{item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-4">

                      <button
                        onClick={() => decreaseQty(item)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus size={16} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQty(item)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus size={16} />
                      </button>

                    </div>

                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 />
                  </button>

                </div>

              ))}

            </div>

            {/* ===== ORDER SUMMARY ===== */}
            <div className="bg-white rounded-2xl shadow-sm p-8 h-fit">

              <h2 className="text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <button
                onClick={PaymentHandle}
                className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-2xl hover:bg-indigo-700 transition"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center mt-4 text-indigo-600"
              >
                Continue Shopping
              </Link>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}