import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { fetchdata } from "../utility/http";
/* eslint-disable react/no-unknown-property */
const Login = () => {
    const [userName , setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {data} =   useQuery({
            queryKey: ["login"],
            queryFn: fetchdata
        })
        function handleLogin(){
            data.map((user)=> {
                if(user.username == userName && user.password == password){
                    navigate("/table");
                }
                // {user.username == userName && user.password == password ? navigate("/table"): navigate("/error")}
            })
        }
    function handleSignup(){
       navigate("/signup")
       console.log(userName,password)
    }
  return (
    <div className="action1">
    <div className="action2">
      <div><h3>Login:</h3></div>
      <div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Username:</label>
  <input type="text" value={userName} className="form-control" id="exampleFormControlInput1" onChange={(e)=> setUserName(e.target.value)} />
</div>
<div className="mt-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Password:</label>
  <input type="password" value={password} className="form-control" id="exampleFormControlTextarea1" onChange={(e)=> setPassword(e.target.value)}></input>
</div>
      </div>
      <div className="mt-3 action4">
        <button className="action3" onClick={handleSignup} disabled>Sign up</button>
        <button className="action3" onClick={handleLogin}>Login</button>
      </div>
      </div>
    </div>
  )
}

export default Login
