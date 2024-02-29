
import { useSelector } from "react-redux";
import { useCont } from "../EstoreContext"
import CartProducts from "./CartProducts"

/* eslint-disable react/prop-types */
const CartItems = () => {
  const {cart} = useCont();
  const totalPrice = useSelector((state)=> state.cart.totalPrice);

  return (
    // <div>
    //   {cart.map((user)=> (
    //     <CartProducts key={user.id} data={user} />
    //   ))}
    // </div>
   <div className="action14">
     <table className="action10">
      <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody key={cart.id}>
       {
        cart.map((user)=>(
            <CartProducts key={user.id} user={user}  />
        ))
       }
        </tbody>
      </table>
      <div className="action15"><b>Total Price:{totalPrice}</b></div>
   </div>
  )
}

export default CartItems
