import React from "react";
import DogCart from "../components/Dogcart";
import { useEffect } from "react";
import { getDog } from "../Redux/Appreducer/action";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "../App.css"
const Dogs = () => {
  const data = useSelector((state) => state.appreducer.dog);
 
  
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    
    
 
     
 if(!data.length)
 {
  dispatch(getDog())
  
 }




    
  }, [data.length,dispatch]);
  return (
    <div>
    
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}
    >
      {data.map((item,index) => (
   
  
 
    <Link key={uuidv4()} to={`/dogs/${item}`}>
           <DogCart item={item} index={index} />
         </Link>

        
     ))} 
    </div>
    </div>
  );
};

export default Dogs;





