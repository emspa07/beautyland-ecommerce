import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Dashboard = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    useEffect (() => {
        if(!user) navigate('/login')
    }, [])
    return(
        <h1>Bienvenido {!user ? '': user.email}</h1>
    )
}