import { useCont } from "../EstoreContext";
import { useDispatch } from "react-redux";
import {  price, total } from "./CartSlice";
import { useState } from "react";
/* eslint-disable react/prop-types */
const CartProducts = ({user }) => {
  // let quantity = useSelector((state)=> state.cart.quantity);
  const dispatch = useDispatch();
   const {cartDelete} = useCont();
    const [quantity, setQuantity] = useState(1);
    let tprice = user.price * quantity;
    function handleDec(){
      setQuantity((quantity)=>quantity-1)
        dispatch(price(user.price))
    }
    function handleInc(){
      setQuantity((quantity)=>quantity+1)
      dispatch(total(user.price))
    }
  return (
   <>
     <tr>
    <td>{user.id}</td>
    <td>{user.title}</td>
    <td>{user.price}</td>
    <td>{quantity}</td>
    <td><button onClick={handleInc}>Inc</button><button onClick={handleDec}>Dec</button> <button onClick={()=>cartDelete(user.id,tprice)}>Delete</button></td>
    </tr>
   </>
  )
}

export default CartProducts
