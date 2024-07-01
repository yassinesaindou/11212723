import React from "react";
import { HiMiniStar } from "react-icons/hi2";
import styled from "styled-components";
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
`;
const StyledCard = styled.div`
  min-width: 300px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: 1px solid lightgrey;
`; 
 
const StyledProducts = styled.div`
margin : 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export default function ProductItems({products}) {
    return <StyledProducts>
       {products.map(product => <Item product={product} key={product.id}/>)}
    </StyledProducts>
}
function Item({ product }) {
    const { productName, price, rating, discount, availability } = product;
  return (
    <StyledCard>
      <StyledRow>
              <h2>{ productName}</h2>
              <p> <span> <HiMiniStar /> </span> {rating}</p>
          </StyledRow>
          <StyledRow>
              <p> ${ price}</p>
              <p>{ discount} Off</p>
          </StyledRow>

    </StyledCard>
  );
}
