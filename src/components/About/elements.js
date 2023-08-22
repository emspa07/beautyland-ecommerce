import styled from "styled-components";
import {mobile} from '../../responsive';

const Container = styled.section`
    max-width: 100%;
    height: 60vh;
    background-color: var(--color-light-secundary);
    display: flex;
    flex-direction: row-reverse;
    ${mobile({ height: '30vh'})}
`;
const WrapperAbout = styled.div`
    display: flex;
    gap: 3rem;
    align-items:center;
    margin: 2rem;
    ${mobile({ margin: '1em', gap: '1rem'})}
`;
const AboutImage = styled.img`
    height: 110%;
    ${mobile({ height: '40%'})}
`;
const AboutInfo = styled.div`
    flex: 1;
`;
const AboutTitle = styled.h2`
    color: var(--c-font);
    margin:1rem;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Pathway Gothic One', sans-serif;
    letter-spacing: 2px;
    ${mobile({ fontSize: '1rem', margin:'.5em'})}


`;
const AboutDescription = styled.p`
    font-size: 1.3rem;
    margin: 2em;
    letter-spacing: 1px;
    line-height: 1.5;
    ${mobile({ fontSize: '0.5rem'})}
`;
export{Container, WrapperAbout, AboutImage, AboutInfo, AboutTitle, AboutDescription}