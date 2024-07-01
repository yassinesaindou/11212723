import { useEffect, useState } from "react"
import { HiStar } from "react-icons/hi";
import { useParams } from "react-router";
import styled from "styled-components";
const H2 = styled.h2`
  color: blue;
`;
const Styledpage = styled.div`
max-width: 1140px;
margin: 0 auto;

`
 
const StyledRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export default function ProductPage() {
    const [item, setItem] = useState();
    const { id } = useParams();
    useEffect(() => {
        async function getSepecificItem() {
            const res =await fetch(`http://localhost:8000/products/${id}`);
            const data = await res.json();
            console.log(data);
            setItem(data)
        } getSepecificItem();
    }, [item, id])
    
    if (!item) return <p>Loading...</p>
    const { productName, image, price, rating, discount, availability } = item;
    return <Styledpage>
        <H2>{productName}</H2>
        <img src={image} alt="" width={1140} />
        <StyledRow>

            <h3>${price} /  <span>{discount} Off</span></h3>
            <p><HiStar />{ rating}</p>
        </StyledRow>
        <div>
            <h3>Description</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magnam, quos quia illo, incidunt eos laborum error, velit veniam quibusdam quae laboriosam molestiae vero aliquid consectetur sunt alias ullam possimus quidem. Repudiandae, quaerat beatae temporibus consequuntur rem adipisci deserunt accusamus omnis, dolorem repellat qui! Dolorem, harum? Voluptas voluptatum illum ex culpa corporis expedita perspiciatis rerum qui placeat velit, repellendus, ipsum distinctio ipsam eveniet mollitia itaque voluptates atque in, fuga repellat? Debitis quibusdam aspernatur adipisci nesciunt sed id, quod fugiat. Porro sed fuga, similique fugit corrupti laborum. Odit, perferendis placeat suscipit error consectetur labore sunt nisi aut dolore quas animi possimus.</div>
        
   </Styledpage>
}
