import styled from "styled-components";

const CardWrapper = styled.div`
    overflow: hidden;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;
    margin-bottom: 2rem;
    &:hover {
    transform: scale(1.02);
    }

`;
const CardImage = styled.img`
    height: 12rem;
    width: 100%;
    object-fit: cover;
`;
const CardDescription = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    h3{
        font-weight:bold;
    }
`;

export{CardWrapper, CardImage, CardDescription}