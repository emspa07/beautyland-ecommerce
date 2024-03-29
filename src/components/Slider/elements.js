import styled from 'styled-components';
import {mobile} from '../../responsive';

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
position: relative;
overflow: hidden;
background-color: var(--color-light-primary);
${mobile({ display: 'none'})}

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 130%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const TitleSlider = styled.h1`
  font-size: 70px;
  color:var(--c-font);
`;

const DescSlider = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const ButtonSlider = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border-color: var(--c-font);
  cursor: pointer;
  &:hover {
    background: #021F47;
    color: white;
    transform: scale(1.1);
  }
`;

export{Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, TitleSlider, DescSlider, ButtonSlider}