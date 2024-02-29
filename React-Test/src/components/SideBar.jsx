import { NavLink} from "react-router-dom"

const SideBar = () => {
  return (
    <div className="action8">
       <nav>
      <ul className="action7">
        <li>
            <NavLink to='/table' >Table</NavLink>
        </li>
        <li>
            <NavLink to='/cart' >Cart</NavLink>
        </li>
        <li>
            <NavLink >Veiw Product</NavLink>
        </li>
        <li>
          <NavLink to={"/new"} >New Product</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default SideBar
