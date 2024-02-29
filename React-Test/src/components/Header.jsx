/* eslint-disable react/prop-types */

import { useCont } from "../EstoreContext"

const Header = () => {
  const {length} = useCont();
  return (
    <div className="action5">
      <h1>Products...</h1>
      <p>{length}: Item in Cart</p>
    </div>
  )
}

export default Header
