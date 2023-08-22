import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
`;
const ImageCategory = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: '40vh'})}
`;
const InfoCategory = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const TitleCategory = styled.h2`
    color: white;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
`;
const ButtonCategory = styled.button`
    border: none;
    padding: 10px;
    background-color: var(--c-font);
    color: white;
    cursor: pointer;
    font-weight:bold;
    &:hover {
        background: white;
        color: #021F47;
        transform: scale(1.1);
      }
`;

export{Container, ImageCategory, InfoCategory, TitleCategory, ButtonCategory}