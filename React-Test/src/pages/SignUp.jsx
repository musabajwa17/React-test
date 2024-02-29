import { useMutation } from "@tanstack/react-query";
import { useReducer } from "react";
import { addUser } from "../utility/http";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/no-unknown-property */
const initialState = {
    userName : "",
    password:"",
    name:"",
    address:"",
    phone: ""
}
function reducer(state,action){
    switch(action.type){
        case "userName" :
            return {...state , userName: action.payload};
        case "password":
            return {...state , password: action.payload};
        case "name":
            return {...state, name: action.payload};
        case "address":
            return {...state, address: action.payload};
        case "phone":
            return {...state, phone: action.payload} 
        default:
            throw new Error("No action matched...!!!");
}
}

const SignUp = () => {
    const [state , dispatch] =  useReducer(reducer, initialState);
    const {userName,password,name,address,phone} = state;
    const navigate = useNavigate();
    const {mutate} = useMutation({
    mutationFn: addUser,
    })
    function addSignUp(){
      mutate({userName,password,name,address,phone})
      navigate("/");
    }
  return (
    <div className="action1">
    <div className="action2">
      <div><h3>Login:</h3></div>
      <div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Username:</label>
  <input value={userName} type="text" className="form-control" id="exampleFormControlInput1" onChange={(e)=> dispatch({type: "userName", payload: e.target.value})}/>
</div>
<div className="mt-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Password:</label>
  <input value={password} type="password" className="form-control" id="exampleFormControlTextarea1" onChange={(e)=> dispatch({type: "password", payload: e.target.value})}></input>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Name:</label>
  <input value={name} type="text" className="form-control" id="exampleFormControlInput2" onChange={(e)=> dispatch({type: "name", payload: e.target.value})}/>
</div><div className="mb-3">
  <label htmlFor="exampleFormControlInput3" className="form-label">Address</label>
  <input value={address} type="text" className="form-control" id="exampleFormControlInput3" onChange={(e)=> dispatch({type: "address", payload: e.target.value})} />
</div><div className="mb-3">
  <label htmlFor="exampleFormControlInput4" className="form-label">Phone</label>
  <input type="text" className="form-control" id="exampleFormControlInput4" value={phone} onChange={(e)=> dispatch({type: "phone", payload: e.target.value})} />
</div>
      </div>
      <div className="mt-3">
        <button className="action3" onClick={addSignUp}>Sign up</button>
      </div>
      </div>
    </div>
  )
}

export default SignUp
