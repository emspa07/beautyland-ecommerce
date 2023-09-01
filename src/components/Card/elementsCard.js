import styled from "styled-components";
import { mobile } from "../../responsive";
const CardWrapper = styled.div`
    padding: 30px;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap:2rem;
    ${mobile({display:"flex", flexDirection : "column"})}

`;
const CardSection = styled.div`
    align-items: center;
    box-shadow: 1px 2px 10px #08141e1a;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    width: 80%;
    height: auto;
    &:hover {
    transform: scale(1.02);
    }
`;
const CardImage = styled.img`
    height: auto;
    width: 100%;
`;
const CardDescription = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    h3{
        font-weight:bold;
    }
    p{
        margin-bottom:  1rem;
    }
    span{

        font-weight:bold;
    }
`;

export{CardWrapper, CardSection, CardImage, CardDescription}