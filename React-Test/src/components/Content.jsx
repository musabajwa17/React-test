/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { deleteData } from "../utility/http";
import { useCont } from "../EstoreContext";
import { useDispatch } from "react-redux";
import { quantity, total } from "./CartSlice";
import { queryClient } from "../utility/QueryClient";

/* eslint-disable react/prop-types */
const Content = ({user}) => {
  const dispatch = useDispatch();
  const {cart, setCart} = useCont();
    const {mutate} = useMutation({
      mutationKey: ["delete"],
      mutationFn:  deleteData,
      onSuccess: ()=>{
        queryClient.invalidateQueries({
          queryKey: ["delete"]
        })
      }
    })
    const navigate = useNavigate();
    function handleEdit(){
        navigate(`/veiwproduct/${user.id}`)
    }
    function handleCart({user}){
      dispatch(total(user.price))
    const existingObject = cart.find(obj => obj.id === user.id);
    if (existingObject) {
      console.log(`Object with ID ${user.id} is already added.`);
      navigate("/cart")
    } else {
      setCart((cart)=> [...cart, user])
      localStorage.setItem("Cart", JSON.stringify([...cart, user]))
      navigate("/cart");
    }
    }
   function handleDelete(id) {
        mutate({id})
          navigate('/table');
      }
  return (
    <tr>
    <td>{user.id}</td>
    <td>{user.title}</td>
    <td>{user.price}</td>
    <td><img src={user.image} width={50} height={50}/></td>
    <td><button onClick={handleEdit}>Edit</button><button onClick={()=>handleDelete(user.id)}>Delete</button><button onClick={()=>handleCart({user})}>Add</button></td>
    </tr>
  )
}

export default Content
