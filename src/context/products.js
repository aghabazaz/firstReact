import { createContext } from "react";
const Context = createContext({
  products: [],
  onDelete: () => {},
  onReset: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
});


export default Context

export const ProductContextProvider = ({children, ...props}) => {
return (
    <Context.Provider value={props}>{children}</Context.Provider>
)
};
