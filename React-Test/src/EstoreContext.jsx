/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { useDispatch } from "react-redux";
import { price } from "./components/CartSlice";

const PostContext = createContext();
function getData(){
    let newData = JSON.parse(localStorage.getItem("Cart"));
    return newData;
  }
const EstoreContext = ({children}) => {
  const dispatch = useDispatch();
    const [cart, setCart] = useState(getData());
  const [stock, setStock] = useState([]);
  const [edit, setEdit] = useState([])
  const length = cart.length;
  function cartDelete(id,tprice){
    // const item = cart.find((cart)=> cart.id === id);
    dispatch(price(tprice));
    const newCart =   cart.filter((cart)=>cart.id !== id);
    setCart(newCart);
    localStorage.setItem("Cart", JSON.stringify(newCart));
  }
  return (
    <PostContext.Provider value={{
        cart,
        edit,
        length,
        stock,
        cartDelete,
        setStock,
        setEdit,
        setCart
    }}>
      {children}
    </PostContext.Provider>
  )
}
function useCont(){
    const context = useContext(PostContext)
    return context;
}

export {useCont, EstoreContext}
