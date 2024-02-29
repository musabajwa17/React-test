import Header from './Header'
import SideBar from './SideBar'
import AddProduct from './AddProduct'

const NewProduct = () => {
  return (
    <div>
      <Header />
      <div className='action6'>
        <SideBar />
        <AddProduct />
      </div>
    </div>
  )
}

export default NewProduct
