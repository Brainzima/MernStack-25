import { useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Login failed");
      }

      /*
        Expected response:
        {
          message,
          token,
          user:{ id,name,email,isAdmin }
        }
      */

      // ===== STORE DATA IN LOCAL STORAGE =====

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login Successful");

      // redirect if needed
      // window.location.href = "/";

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-400"
            />

            <button
              type="button"
              onClick={()=>setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-gray-900 font-bold rounded-xl py-3"
          >
            {loading ? "Logging..." : "Login"}
          </button>

        </form>

      </div>
         <ToastContainer />
    </div>
    
  );
};

export default Login;