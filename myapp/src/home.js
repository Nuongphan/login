import { Link } from "react-router-dom"
import BaseAxios from "./api/axiosClient"
import { useState, useEffect } from "react"
const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        BaseAxios({ url: "/user", method: "GET" }).then((data) => {
            setData(data.data)
        }
        ).then(err => console.log(err))
    }, [])

    const handleLogout = () => {
        localStorage.clear()
    }
    return <div> <h1>Home</h1>
        <div>
           {data?.map(item=> <div>
            <p>usename: {item.userName}</p>
            <p>fullname: {item.fullName}</p>
            <p>role: {item.role}</p>
           </div> )}
           
            </div>
      
        <Link onClick={handleLogout} to="/login">Logout</Link>

    </div>
}

export default Home