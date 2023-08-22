import React from 'react';
import { sliderItems } from '../../data';
import {VscChevronLeft, VscChevronRight} from "react-icons/vsc";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, TitleSlider, DescSlider, ButtonSlider} from '../Slider/elements.js';


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }
    return(
        <Container>
            <Arrow direction="left">
                <VscChevronLeft/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                         <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <TitleSlider>{item.title}</TitleSlider>
                            <DescSlider> {item.desc}</DescSlider>
                            <Link to={item.link}><ButtonSlider>¡Compra ahora!</ButtonSlider></Link>
                        </InfoContainer>
                    </Slide>
                ))}               
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <VscChevronRight/>
            </Arrow>
        </Container>
    )
}

export default Slider;