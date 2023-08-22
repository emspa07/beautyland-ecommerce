import styled from "styled-components";
import Card from "../Card/Card";


const ProductWrapper = styled.section``;
const FilterContainer = styled.div`
display: flex;
justify-content: right;
`;
const FilterProduct = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color:var(--c-font);
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () =>{
    return(
        <ProductWrapper>
            <FilterContainer>
                <FilterProduct>
                <FilterText>Ordenar por:</FilterText>
                    <Select>
                        <Option selected>Nuevo</Option>
                        <Option>Precio Menor a Mayor</Option>
                        <Option>Precio Mayor a Menor</Option>
                    </Select>
                </FilterProduct>
            </FilterContainer>
            <Card/>
        </ProductWrapper>
    )
}

export default ProductList;