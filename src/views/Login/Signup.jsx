import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '../Login/signup.css'

export const Signup = () =>{
    
    const [user, setUser] = useState({
    
        name: "",
        lastName: "",
        email: "",
        password: ""
    })
    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const signup = (evt) =>{
        evt.preventDefault()
        const {name, lastName, email, password} = user
        if (name && lastName && email && password){
            axios.post('http://127.0.0.1:5500/users', user).then(res=>console.log(res))
        }
        else{
            alert('Entrada inválida')
        }
    }
    return(
        <section className= "beauty_container">
            <div className="signup_main">
                <form className="form_signup">
                    <h3 className="signup_title">Crear cuenta</h3>
                    <input type="text" name="name" id="name" value={user.name} onChange={handleChange} placeholder="Nombre" required/>
                    <input type="text" name="lastName" id="lastName" value={user.lastName} onChange={handleChange}placeholder="Apellido" required/>
                    <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required/>
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Contraseña" required/>
                    <button typer="submit" className="signup_btn" onClick={signup}>Registrarse</button>
                    <span><Link to="/login" className="signup_message">¿Ya tienes una tienes cuenta? Ingresa ahora</Link></span>
                </form>
            </div>
        </section>
    )
}