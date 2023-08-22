import styled from "styled-components";

const Container = styled.div`
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h2`
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
`;
const Upper = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`;
const UpperButton = styled.button`
    padding: 10px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background: ${(props)=>props.type === "filled" ? "#021F47": "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`;
const UpperTexts = styled.div`
`;
const UpperText = styled.span`
    text-decoration: underline; 
    cursor: pointer;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const InfoProduct = styled.div`
    flex:3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2; 
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`
`;
const ProductId = styled.span`
`;
const ProductDescription = styled.span`
`;
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;
const ShopSummary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h2`
    font-weight: 200;
    text-transform: uppercase;  
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between; 
    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: var(--c-font);
    color: white;
    font-weight: 600;
    text-transform: uppercase;
`;





export {Container, Wrapper, Title, Upper, UpperButton, UpperText, UpperTexts, Bottom, InfoProduct, Product, ProductDetail, Image, Details, ProductName, ProductId, ProductDescription, PriceDetail, ProductAmount,
     ProductAmountContainer, ProductPrice, Hr, ShopSummary, SummaryButton, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle};