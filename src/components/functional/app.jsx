import Navbar from "../navbar";
import Products from "./products";
import { useState } from "react";
//import {ProductContextProvider} from "../../context/products";
import { ProductContextProvider } from "../../context/products";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, productName: "laptop", count: 1 },
    { id: 2, productName: "phone", count: 1 },
    { id: 3, productName: "airpad", count: 1 },
  ]);
  function handleDelete(productId) {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
  }
  function handleIncrement(productId) {
    console.log("increment functional", productId);
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }
  function handleDecrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }
  function handleReset() {
    const newProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    console.log("rest");
    setProducts(newProducts);
  }

  return (
    <>
      <ProductContextProvider
        products={products}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      >
        <Navbar></Navbar>
        <Products></Products>
      </ProductContextProvider>
    </>
  );
};
export default App;
