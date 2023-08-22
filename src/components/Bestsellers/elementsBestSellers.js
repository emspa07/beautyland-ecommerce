import styled from "styled-components";

const InfoBest = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ContainerBest = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;
  position: relative;
  &:hover ${InfoBest}{
    opacity: 1;
  }
`;
const ImageBest = styled.img`
  height: 75%;
  z-index: 2;
`;

const IconBest = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--c-font);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export{InfoBest, ContainerBest, ImageBest, IconBest}