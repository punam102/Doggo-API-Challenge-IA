import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [data, setData] =useState({});
  
  const [udata, setUdata] =useState({});
  
  const [da, setDa]=useState([]);
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
     
   for(let i=0; i<da.length; i++){
 

    console.log(da[i].email, data.email)
   
     if(da[i].email===data.email ){
        console.log(da[i],"lnkafd") 
        localStorage.setItem("user", JSON.stringify(da[i]));
        setUdata(udata[i])
        
        break;
     }
   }
   let login=true; 
   console.log(udata)
   localStorage.setItem("auth", JSON.stringify(login))
   navigate("/dog")
   
  }
 

 useEffect(()=>{
    axios.get("https://backend-iujc.onrender.com/users").then((res)=>{
        console.log("alsdnf",res.data);
    setDa(res.data)
  
})


 },[])

  return (
    <div>
        
         
      <form>
        <label>Email</label>
        <input id='email' onChange={handleChange}/>
       
        <label>Password</label> <input id="password" type="password"  onChange={handleChange}/>
    
    <input type="submit" onClick={handlesubmit} />
      </form>
      
        
        
        </div>
  )
}
