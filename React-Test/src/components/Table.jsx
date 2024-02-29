/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Record from "./Record"
import SideBar from "./SideBar"

const Table = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header  />
      <div className="action6">
      <SideBar />
      <Record />
      </div>
      <div className="action13" >
        <button onClick={()=> navigate("/new")}>New Product</button>
      </div>
    </div>
  )
}

export default Table
