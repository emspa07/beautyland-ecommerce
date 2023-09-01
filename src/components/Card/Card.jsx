import React from "react"
import { CardDescription, CardSection, CardImage, CardWrapper } from "./elementsCard"
import Button from "../Button/Button"
import { products } from "../../data"

const Card = () =>{
    return(
        <CardWrapper>
            {products.map((item) =>(
            <CardSection key={item.id}>
                <CardImage src={item.img}/>
                <CardDescription>
                            <h3>{item.title}</h3>
                            <br/>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                </CardDescription>
                <Button title="Añadir al carrito"/>
            </CardSection>
            ))}
        </CardWrapper>
    )
}
export default Card