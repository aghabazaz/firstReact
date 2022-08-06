import React, { Component } from "react";
import Product from "./product";
import ProductContext from "../context/products";
class Products extends Component {
  static contextType = ProductContext;
  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.context.onReset}>
          Reset
        </button>
        {this.context.products.map((p, index) => (
          <Product
            id={p.id}
            key={index}
            productName={p.productName}
            count={p.count}
          >
            i am a good developer
          </Product>
        ))}
      </>
    );
  }
}

export default Products;
