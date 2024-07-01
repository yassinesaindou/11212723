import styled from "styled-components";

const StyledButton = styled.button`

font-size:1.2rem;
background-color: blue;
border: 1px solid blue;
paint-order: 0.5rem 3rem;
padding: 1rem 0;
color: white;
text-align: center;
width: 100%;
display: inline-block;
border-radius: 10px;
font-weight: 500;
cursor: pointer;

`
export default function Button({children, onClick}) {
    return <StyledButton onClick={onClick}>{ children}</StyledButton>
}
