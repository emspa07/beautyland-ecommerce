import React from "react";
import styled from "styled-components";
import { bestSellers } from "../../data";
import BestSeller from "./BestSeller";
import { mobile } from "../../responsive";


const Container = styled.section`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
${mobile({padding: "0"})}

`;
const HeadBest = styled.div`
display:flex;
align-items:center;
`;
const TitleBest = styled.h2`
font-family: 'Pathway Gothic One', sans-serif;
font-size: 3rem;
color: var(--c-font);
margin:1.5rem;
`;

const BestSellers = () => {
    return (
        <Container>
            <HeadBest>
             <TitleBest>Favoritos Beauty Land</TitleBest>                
            </HeadBest>
                {bestSellers.map((item) => (<BestSeller item={item} key={item.id} />))}
        </Container>
    )
    }
    export default BestSellers
