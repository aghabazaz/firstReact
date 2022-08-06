import { Component } from "react";
import ProductContext from "../context/products";
class Product extends Component {
  static contextType = ProductContext;
  imageUrl =
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2020/05/Frame-9.png";
  count = 5;
  state = {
    //count: this.props.count,
    productName: "laptop",
  };
  render() {
    //const list = [<li>item one</li>, <li>item two</li>, <li>item three</li>]
    const list = ["item one", "item two", "item three"];
    //const mappedList=list.map(item=><li>item</li>)
    //{list}
    //{mappedList}
    const { productName } = this.props;
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 text-info">{this.props.productName}</span>
        <span className="m-2 badge bg-primary">{2 + 2}</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button
          onClick={this.handleIncreament}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="m-2 text-info btn btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={this.handleDelete}
          className="m-2 text-info btn btn-sm btn-danger"
        >
          delete
        </button>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        {this.props.children}
      </div>
    );
  }

  handleIncreament = () => {
    this.context.onIncrement(this.props.id);
  };

  handleDecrement = () => {
    this.context.onDecrement(this.props.id);
  };

  handleDelete = () => {
    //this.props.onDelete(this.props.id)
    this.context.onDelete(this.props.id);
  };

  format() {
    if (this.props.count === 0) {
      return "zero";
    } else {
      return this.props.count;
    }
  }
}

export default Product;
