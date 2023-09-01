import { Link } from "react-router-dom";
import { Checkout } from "../../components/Checkout/Checkout";
import { Container, Wrapper, Title, Upper, UpperButton, UpperText, UpperTexts, Bottom, InfoProduct, Product,
     ProductDetail, Details,Image, ProductName, ProductId, ProductDescription, PriceDetail, ProductAmount, 
     ProductAmountContainer, ProductPrice, Hr, ShopSummary, SummaryItem, SummaryItemText, SummaryItemPrice, SummaryButton, SummaryTitle } from "./elements"
import {FaPlus, FaMinus} from "react-icons/fa";

export const Cart = () => {
    return(
        <Container>
            <Wrapper>
                <Title>
                    Carrito de compra
                </Title>
                <Upper>
                    <Link to='/'><UpperButton>Continúe explorando</UpperButton></Link>
                    <UpperTexts>
                        <UpperText>Carrito de compra(1)</UpperText> :
                        <UpperText>Tu Wishlist(0)</UpperText>
                    </UpperTexts>
                    <UpperButton type="filled">Proceder al pago</UpperButton>
                </Upper>
                <Bottom>
                    <InfoProduct>
                        <Product>
                            <ProductDetail>
                              <Image src='https://res.cloudinary.com/doo2bx7qe/image/upload/v1686626052/Nudestix_MiniNudiesSet_Lifestyle_Desktop_pqsdd5.jpg'/>   
                                <Details>
                                    <ProductName><b>Product:</b> Mini Nudestix Set</ProductName>
                                    <ProductId><b>ID:</b> 0642754</ProductId>
                                    <ProductDescription><b>Description:</b> Mini Nudestix Set (Blush, Bronzer, Lip)</ProductDescription>

                                </Details>
                            </ProductDetail>
                           
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <FaPlus/>
                                    <ProductAmount>1</ProductAmount>
                                    <FaMinus/>
                                </ProductAmountContainer>
                                <ProductPrice>$740</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                    </InfoProduct>
                    <ShopSummary>
                        <SummaryTitle>Resumen de compra</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$740</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$740</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Pagar Ahora</SummaryButton>      
                        <Checkout/>
                    </ShopSummary>
                </Bottom>

            </Wrapper>
        </Container>
    )
}