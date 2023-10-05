import { useState, useEffect } from "react"
import axios from "axios"

const ResetPassword = () => {
    const [codeReset, setCodeReset] = useState("")
    const [users, setUsers] = useState("")
    const [password, setPassword]= useState("")
    useEffect(() => {
        
    }, [])
    console.log(55555555, users);
    const handleSubmit = () => {
        if (password !== "" && codeReset !== "") {
           
        }
    }

    return <>
        <input value={password} placeholder="Code ResetPassword" onChange={(e) => setCodeReset(e.target.value)} type="text"></input>
        <input value={codeReset}  placeholder="Newpassword"  onChange={(e) => setPassword(e.target.value)} type="text" >
        </input>
        <button onClick={handleSubmit}> submit</button>
    </>
}
export default ResetPassword