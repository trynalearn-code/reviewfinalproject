import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuthStore from "../store/authStore"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const setToken = useAuthStore((state) => state.setToken)
    const navigate = useNavigate()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const result = await response.json()

        if (result.success && result.data) {
            setToken(result.data)
            navigate("/")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    )
}

export default Login