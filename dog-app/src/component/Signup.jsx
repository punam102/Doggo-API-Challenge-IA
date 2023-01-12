import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export const Signup = () => {

  const [data, setData] =useState({});
  
  const navigate=useNavigate();
  

  const handleChange=(e)=>{
  
    const {id, value}=e.target;
    // console.log(id, value)
    setData({ ...data,
      [id]:value
    })
    
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
   
   
   if(data.password!==data.confirm_password){
    alert("Password doesn't match");
    return; 
   }
   console.log(data);

    axios.post("https://backend-iujc.onrender.com/users",data).then((res)=>{
      
      if(res.data){
        alert("user registered successfully")
        navigate("/login")
      }
    })

  }
  return (
    <div>
      
      
      <form>
        <label>Email</label>
        <input id='email' onChange={handleChange}/>
        <label>Usernmae</label>
        < input id='user_name' onChange={handleChange} />
        <label>Password</label> <input id="password" type="password"  onChange={handleChange}/>
        <label >Confirm Password</label>
    <input id="confirm_password" type="password" onChange={handleChange}/>


    <input type="submit" onClick={handlesubmit} />
      </form>
      
      
      </div>
  )
}
