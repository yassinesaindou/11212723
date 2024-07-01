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

export default function ProductItems() {
    return <StyledProducts>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </StyledProducts>
}
function Item() {
  return (
    <StyledCard>
      <StyledRow>
        <h2>Laptop 1</h2>
        <p> <span> <HiMiniStar /> </span> 3.4</p>
          </StyledRow>
          <StyledRow>
            <p> 999.99$</p>
            <p>50% Off</p>
          </StyledRow>

    </StyledCard>
  );
}
