import React from "react";
import axios from "axios";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


import '../Login/login.css'
import { useContext } from "react";

export const Login = () =>{
    //Cambio de estado para manejar inputs
    const [input, setInput ] = useState(null)
    const navigate = useNavigate()
    const { saveUser } = useContext(UserContext)
    const onChange = (evt) => setInput({
        ...input, 
        [evt.target.name] : evt.target.value
    })

    const login = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:5500/users/login', input)
            if (!response.data.isAuth) return alert(response.data.message)
            saveUser(input)
            return navigate('/dashboard')            
        } catch (error) {
            alert('Verifica tus credenciales')
        }

    }
    return (
        <section className= "beauty_container">
            <div className="login_main">
                <form className="form_login" onSubmit={login}>
                    <h3 className="login_title">Iniciar Sesión</h3>
                    <input type="email" name="email" id="email" onChange={onChange} placeholder="Email" required/>
                    <input type="password" name="password" id="password" onChange={onChange} placeholder="Contraseña" required/>
                    <button className="login_btn">Iniciar Sesión</button>
                </form>
                <div className="division_login">
                  <hr/>                    
                </div>
                <div className="signup_section">
                <h3 className="login_title">Nueva cuenta</h3>
                <button className="sign_btn"><Link to="/signup" className="signup">Regístrate ahora</Link></button>                    
                </div>
            </div>
        </section>
    )
}