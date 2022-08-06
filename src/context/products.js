import { createContext } from "react";
const productContext = createContext({
    products:[],
    onDelete:()=>{},
    onReset: ()=>{},
    onIncrement: ()=>{},
    onDecrement: ()=>{}
})
export default productContext;