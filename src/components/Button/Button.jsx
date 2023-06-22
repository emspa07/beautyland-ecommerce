import React from "react";
import '../Button/button.css'

function Button (props){
    return <button className="btn_card">{props.title}</button>
}

export default Button;