import { useState } from "react"
import axios from "axios"
const ForgotPassword = () => {
    const [nameInput, setNameInput] = useState("")
    const [notication, setNotication]= useState()
    const handleSubmit=()=>{
        axios.post("http://localhost:8000/user/forgot", {
            email: nameInput
        }).then((data) => {
            console.log("data", data);
            setNotication(data.data.msg)
            
        }).catch((error) => console.log(error));
    }
    return <>
        <input value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="email" type="email" ></input>
        <p>{ notication}</p>
        <button onClick={handleSubmit}> Send</button>
    </>
}
export default ForgotPassword