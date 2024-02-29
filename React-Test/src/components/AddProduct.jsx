import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { NewProduct } from "../utility/http";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [id, setId] = useState("");
    const navigate= useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {mutate} = useMutation({
        mutationKey: ["newProduct"],
        mutationFn: NewProduct
    }) 
    function handleAdd(){
    let newPro = {id,title,price,description};
    mutate(newPro)
    navigate("/table")
    }
  return (
       <div className="action16">
    <form>
    <div className="action11">
    <label>Id:</label>
     <input type="number" value={id} onChange={(e)=> setId(e.target.value)} />
    </div>
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
    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </div>   
    </form>
    <div className="action13">
    <button onClick={handleAdd} >Submit</button>
    </div>
    </div>
  )
}

export default AddProduct
