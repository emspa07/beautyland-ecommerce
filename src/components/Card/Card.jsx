import React from "react"
import { CardDescription, CardImage, CardWrapper } from "./elementsCard"
import Button from "../Button/Button"


const Card = ({img, title, description, price}) =>{
    return(
        <CardWrapper>
            <CardImage src={img}/>
            <CardDescription>
                <h3>{title}</h3>
                <br/>
                <p>{description}</p>
                <span>{price}</span>
            </CardDescription>
            <Button title="Añadir al carrito"/>
        </CardWrapper>
    )
}
export default Card