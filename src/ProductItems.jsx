import React from "react";
import { HiMiniStar } from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCard = styled.div`
  width: 300px !important;
  /* max-width: 300px; */
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(131, 128, 128, 0.1);
`;

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;
const H2 = styled.h2`
  color: blue;
`;
const Img = styled.img`
  width: 100%;
`;

export default function ProductItems({ products }) {
  return (
    <StyledProducts>
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </StyledProducts>
  );
}
function Item({ product }) {
  const { productName, image, price, rating, discount, availability, id } =
    product;
  return (
    <StyledCard>
      <Img src={image} alt="" />
      <StyledRow>
        <H2>{productName}</H2>
        <p>
          {" "}
          <span>
            {" "}
            <HiMiniStar />{" "}
          </span>{" "}
          {rating}
        </p>
      </StyledRow>
      <StyledRow>
        <p> ${price}</p>
        <p>{discount} Off</p>
      </StyledRow>
      {availability === "In Stock" ? (
        <a href={`/products/${id}`}>
          <Button> Buy Now</Button>
        </a>
      ) : (
        <span>Out of Stock</span>
      )}
    </StyledCard>
  );
}
