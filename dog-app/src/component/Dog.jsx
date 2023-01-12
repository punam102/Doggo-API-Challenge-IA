import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Dog = () => {
 
    const [data, setData]=useState([]);



    useEffect(()=>{
       
        axios.get("https://dog.ceo/api/breeds/list/all").then((res)=>{
         
        let y=res.data.message
          let arr=Object.keys(y);

        //  console.log(arr);
          setData(arr);
          
        })

    })
 
    function handleClick(id){

        console.log(id);

    }



  return (
   
      <div >

      {
        data.map((el,i)=>(

         <div>

           <Link to={el}><h2>{el}</h2></Link>
         </div>

        ))
      }
</div>

 
  )
}
