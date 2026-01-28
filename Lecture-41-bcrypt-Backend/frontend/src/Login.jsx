import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [isLoggedin, setIsLoggedin] = useState(false)

    const Loginpage = async (e) => {
        e.preventDefault()

        if (email === "" || password === "") {
            return toast.error("Fill Both filds")
        } else {
            const loginUser = {
                email: email,
                password: password
            }
            try {

                const reponse = await fetch("http://localhost:4000/api/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginUser)
                })

                if (reponse.ok) {
                    const message = await reponse.json()
                    toast.success("Login user Sussfully")
                    setEmail("")
                    setPassword("")
                    setIsLoggedin(true)
                } else {
                    toast.error("Email Or Password invalid")
                }

            } catch (error) {
                toast.error("Error By Function")
            }
        }
    }
    return (
        <>
        <ToastContainer/>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Login to Your Account
                    </h2>

                    {
                        isLoggedin ?
                            <div>
                                You have successfully logged in.
                            </div>
                            :
                            <>
                                <form onSubmit={Loginpage} className="space-y-5">

                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="Enter your password"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-md"
                                    >
                                        Login
                                    </button>
                                </form>

                                <p className="text-center text-sm text-gray-500 mt-6">
                                    Don’t have an account?
                                    <span className="text-indigo-600 font-medium cursor-pointer hover:underline ml-1">
                                        Sign up
                                    </span>
                                </p>
                            </>
                    }

                </div>
            </div>

        </>
    )
}