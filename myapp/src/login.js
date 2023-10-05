import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate()
    const [nameInput, setNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (nameInput !== "" && passwordInput !== "") {
            const userLogin = {
               email: nameInput,
                password: passwordInput
            }
            axios.post("http://localhost:8000/user/login", userLogin).then((data) => {
                console.log("data", data);
                localStorage.setItem("token", data.data.accessToken)
                localStorage.setItem("username", JSON.stringify(data.data.data))
                navigate("/home")
            }).catch((error) => console.log(error));
        }
    }
    return <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setNameInput(e.target.value)} value={nameInput} type="text" placeholder="username" name="username" />
            <input onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} type="password" placeholder="password" name="password" />
            <input type="submit" value="Login" />
        </form>
        <Link to="/forgotpassword"><p>Forgot password</p></Link>
    </div>
}
export default Login