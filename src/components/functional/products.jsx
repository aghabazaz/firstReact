import { useContext } from "react";
import Product from "./product";
import ProductContext from "../../context/products";
const Products = (props) => {
    const productContext=useContext(ProductContext)
    return ( 
        <>
        <button className='btn btn-primary' onClick={productContext.onReset}>Reset</button>

        {
            productContext.products.map((p,index)=>(
                <Product key={index} productName={p.productName} count={p.count}
                id={p.id}
                >
                    i am a good developer
                </Product>
            ))
        }
     </>
     );

     
}
 
export default Products;