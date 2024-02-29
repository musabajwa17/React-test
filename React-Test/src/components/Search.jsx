/* eslint-disable react/prop-types */

import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { update } from "../utility/http";

const Search = ({data}) => {
  const param = useParams();
  const navigate = useNavigate();
  const {mutate} = useMutation({
    mutationKey: ["update"],
    mutationFn: update
  })
  const [title, setTitle] = useState(data.title);
  const [price, setPrice] = useState(data.price);
  const [description, setDesc] = useState(data.description);
  function handleUpdate(e){
    e.preventDefault();
    let newData = {title,price,description};
    mutate({id: param.id, payload: newData})
  //  fetch(`https://fakestoreapi.com/products/${param.id}`, {
  //     method : 'PUT',
  //     headers: {
  //       'Accept' : 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newData)
  //   }).then((result)=>{
  //     result.json().then((res)=>{
  //       console.log(res);
  //     })
  //   })
    navigate("/table")
  }
  return (
    <div >
    <form>
     <div className="action11">
     <label>Title:</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
     </div>
    <div className="action11">
    <label>Price:</label>
      <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
    </div>
    <div className="action11">
    <label>Description:</label>
    <input type="text" value={description} onChange={(e)=>setDesc(e.target.value)}/>
    </div>   
    </form>
    <div className="action13">
    <button onClick={handleUpdate} >Submit</button>
    </div>
    </div>
  )
}

export default Search
