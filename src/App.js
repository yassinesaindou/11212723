import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";
import Layout from "./Layout";

const StyledApp = styled.div`
  padding: 2rem 5rem;
  font-size: 1.2rem;
  margin: 0 auto;
`;

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8000/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path=""
              index
              element={<ProductItems products={products} />}
            />
            <Route path="/products/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
