/* eslint-disable react/prop-types */
import CartItems from "./CartItems"
import Header from "./Header"
import SideBar from "./SideBar"

const Cart = () => {

  return (
    <div>
      <Header />
      <div className="action6">
        <SideBar />
        <CartItems />
      </div>
    </div>
  )
}

export default Cart
