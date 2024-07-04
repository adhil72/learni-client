import Button from "@/Components/Common/Button"
import Input from "@/Components/Common/Input"
import { createToast } from "@/Components/Common/Toast"
import { loginController } from "@/api/controllers/auth.api"

export default function Login() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let t = e.target as any
        let email = t.email.value
        let password = t.password.value

        loginController({ email, password }).then(({ data }) => {
            localStorage.setItem("token", data.token)
            createToast({ message: "Logged in successfully", type: "success", title: "Success" })
            window.location.href = "/"
        }).catch((err) => {
            createToast({ message: err.message, type: "error", title: "Error" })
        })
    }

    return <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="w-1/2 bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to learni ai</h1>
                <p className="text-lg">Learn with ai</p>
            </div>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center">
            <div className="w-2/3 max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login in to learni</h2>
                <p className="mb-6">Try learni ai teacher for free</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Input variant="solid" label="Email" type="email" name="email" />
                    </div>
                    <div className="mb-4">
                        <Input variant="solid" label="Password" type="password" name="password" />
                    </div>
                    <p className="text-xs text-gray-500 mb-4 text-justify">
                        By registering for an account, you are consenting to our Terms of Service and confirming that you have reviewed and accepted the Global Privacy Statement.
                    </p>
                    <Button type="submit" className="w-full bg-primary text-white py-2 rounded">Login</Button>
                </form>
                <div className="mt-6 text-center">
                    <p className="mb-2">Or login with</p>
                    <button
                        className="w-full bg-gray-100 text-gray-700 py-2 rounded flex items-center justify-center hover:bg-gray-200"
                        type="button"
                    >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                            {/* Add Google icon here */}
                        </svg>
                        LOGIN WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    </div>
}