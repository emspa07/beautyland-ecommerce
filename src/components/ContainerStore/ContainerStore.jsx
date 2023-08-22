import styled from "styled-components";

const SectionWrapper = styled.section`
    width: 100%;
    padding: 2rem 0;
  .title {
    text-align: left;
    padding-bottom: .5rem;
    margin-left: 2em;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 2.5rem;
    letter-spacing: 2px;
    color: var(--c-font);
  }
`;

const ContainerStore = ({ children, title }) => {
    return (
      <SectionWrapper>
        <h1 className="title">{title}</h1>
        {children}
      </SectionWrapper>
    )  
}

export default ContainerStore;
