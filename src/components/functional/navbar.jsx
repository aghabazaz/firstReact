import context from "../../context/products";
import { useContext } from "react";

const Navbar = (props) => {
  const productContext = useContext(context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/#" className="navbar-brand">
          Navbar {calculateSum()}
        </a>
      </div>
    </nav>
  );
  function calculateSum() {
    let sum = 0;
    productContext.products.forEach((p) => {
      sum += p.count;
    });
    console.log("sum", sum);
    return sum;
  }
};

export default Navbar;
