import { createToast } from "@/Components/Common/Toast"
import { loginController } from "@/api/controllers/auth.api"

export default function Login() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let t = e.target as any
        let email = t.email.value
        let password = t.password.value

        loginController({ email, password }).then(({data}) => {
            localStorage.setItem("token", data.token)
            createToast({ message: "Logged in successfully", type: "success", title: "Success" })
            window.location.href = "/"
        }).catch((err) => {
            createToast({ message: err.message, type: "error", title: "Error" })
        })
    }

    return <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
}