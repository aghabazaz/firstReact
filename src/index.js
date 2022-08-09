//import React from "react";
//import App from "./app";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/functional/app';
//import Product from './components/product'
//import Product from './components/functional/product'
//import Products from './components/products'
//import Products from './components/functional/products'
//const element = <h1>hello world</h1>   // js6

// const element= React.createElement('h1','','hello world')
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));
