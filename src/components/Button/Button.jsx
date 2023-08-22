import styled from "styled-components"

const ButtonWrapper = styled.button`
    border: 2px solid #021F47;
    background-color: transparent;
    margin: 1rem;
    font-weight: bold;
    font-size: .8rem;
    padding: 1em;
    cursor: pointer;
    transition: background 200ms ease-in, color 200ms ease-in;
    flex: display;
    &:hover {
        background: #021F47;
        color: white;
    }
`;

const Button = (props) =>{
    return(
        <ButtonWrapper>{props.title}</ButtonWrapper>
    )
}

export default Button