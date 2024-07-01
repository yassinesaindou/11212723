import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";


function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:8000/products')
      const data = await res.json()
      setProducts(data)
    } getData();
  
  }, [])
  return (
    <div className="App">
      <ProductItems products={products} />
    </div>
  );
}

export default App;
