/* eslint-disable react/prop-types */
import Header from "./Header"
import Product from "./Product"
import SideBar from "./SideBar"

const VeiwProduct = () => {
  return (
    <div>
      <Header />
      <div className="action6">
        <SideBar />
        <Product />
      </div>
    </div>
  )
}

export default VeiwProduct
