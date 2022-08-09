import { useContext } from "react";
import {ProductContextProvider} from "../../context/products";
//const  Product= (props) => {
const Product = ({ productName, count: countPro, children, id }) => {
  //const [count,setCount] = useState(countPro);
  const productsContext = useContext(ProductContextProvider);
  return (
    <>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{2 + 2}</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      <button onClick={handleIncreament} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button
        onClick={handleDecrement}
        className="m-2 text-info btn btn-sm btn-warning"
      >
        -
      </button>
      <button
        onClick={handleDelete}
        className="m-2 text-info btn btn-sm btn-danger"
      >
        delete
      </button>
      {children}
    </>
  );
  function handleIncreament() {
    //setCount(count + 1)
    productsContext.onIncrement(id);
    // Increment(id)
  }

  function handleDecrement() {
    // setCount(count - 1)
    productsContext.onDecrement(id);
  }

  function handleDelete() {
    productsContext.onDelete(id);
  }

  function format() {
    if (countPro === 0) {
      return "zero";
    } else {
      return countPro;
    }
  }
};

export default Product;
