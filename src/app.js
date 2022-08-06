import { Component } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";
import { ProductContextProvider } from "./context/products";
class App extends Component {
  state = {
    products: [
      { id: 1, productName: "laptop", count: 1 },
      { id: 2, productName: "phone", count: 1 },
      { id: 3, productName: "airpad", count: 1 },
    ],
  };
  render() {
    return (
      <>
        <ProductContextProvider
          products={this.state.products}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        >
          <Navbar />
          <Products />
        </ProductContextProvider>
      </>
    );
  }
  handleDelete = (productId) => {
    console.log("handleDelete", productId);
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };
  handleIncrement = (productId) => {
    console.log("increment", productId);
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };
  handleDecrement = (productId) => {
    console.log("handleDecrement");
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };
  handleReset = () => {
    console.log("rest");
    const newProducts = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });

    this.setState({ products: newProducts });
  };
}

// function App() {
//     return (
//         <>
//             <h1>hello world</h1>
//             <h2>thanks</h2>
//         </>
//     );
// }

export default App;
