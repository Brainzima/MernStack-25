import React, { useEffect, useState } from "react"

export default function App() {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [loading, setLoading] = useState(false)

    // get all users 
    const [users, setUsers] = useState([])
    // Global Api
    const Global_Api = `http://localhost:4000/api/users`

    const Loginpage = async (e) => {
        e.preventDefault()

        if (!loginEmail || !loginPassword) {
            toast.error("Please fill all fields")
            return
        }

        setLoading(true)

        try {
            const response = await fetch(`${Global_Api}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            })

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.message || "Invalid email or password")
                setLoading(false)
                setLoginEmail("")
                setLoginPassword("")
                return
            }

            localStorage.setItem("token", data.token)
            localStorage.setItem("name", data.name)
            localStorage.setItem("email", data.email)

            setToken(data.token)
            setLoginEmail("")
            setLoginPassword("")
            toast.success("Login successful")

        } catch {
            toast.error("Server error. Try again later.")
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        setToken(null)
        toast.info("Logged out successfully")
    }
    // get all users
    const DataFetch = async () => {
        try {
            const response = await fetch(`${Global_Api}`, {
                headers: { "Authorization": token }
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            toast.error("Failed to load users");
        }
    };
    useEffect(() => {
        if (token) {
            DataFetch();
        }
    }, [token]);

    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
                {token ? (
                    <div className="min-h-screen bg-gray-100 p-6">

                        {/* ===== Header ===== */}
                        <div className="max-w-7xl mx-auto mb-6">
                            <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">Welcome back</p>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {localStorage.getItem("name")}
                                    </h2>
                                </div>

                                <button
                                    onClick={logout}
                                    className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>

                        {/* ===== Users Grid ===== */}
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                                {users.map((user) => (
                                    <div
                                        key={user._id}
                                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                                    >

                                        {/* Card Header */}
                                        <div className="p-5 border-b flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold text-gray-800 text-lg">
                                                        {user.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 truncate max-w-[200px]">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <button
                                                    className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition flex items-center justify-center"
                                                    title="Edit"
                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>

                                                <button
                                                    className="w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center justify-center"
                                                    title="Delete"
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-5 space-y-4">

                                            {/* Role */}
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                                                    <i className="fa-solid fa-briefcase text-indigo-600"></i>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Role</p>
                                                    <p className="font-medium text-gray-800">{user.role}</p>
                                                </div>
                                            </div>

                                            {/* Salary */}
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                                                    <i className="fa-solid fa-indian-rupee-sign text-green-600"></i>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Salary</p>
                                                    <p className="font-medium text-gray-800">
                                                        ₹{Number(user.salary).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Behavior */}
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                                                    <i className="fa-solid fa-face-smile text-purple-600"></i>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Behavior</p>
                                                    <span
                                                        className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium
                    ${user.bihver === "Excellent" && "bg-green-100 text-green-800"}
                    ${user.bihver === "Very Good" && "bg-blue-100 text-blue-800"}
                    ${user.bihver === "Good" && "bg-teal-100 text-teal-800"}
                    ${user.bihver === "Average" && "bg-yellow-100 text-yellow-800"}
                    ${user.bihver === "Bad" && "bg-orange-100 text-orange-800"}
                  `}
                                                    >
                                                        {user.bihver}
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                            Login to your account
                        </h2>

                        <form onSubmit={Loginpage} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition disabled:opacity-60"
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            Don’t have an account?
                            <span className="text-indigo-600 font-medium cursor-pointer hover:underline ml-1">
                                Sign up
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}