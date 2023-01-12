import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getDog } from "../Redux/Appreducer/action";
const Single = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appreducer.shoes);
  const [first, setfirst] = useState([])
  useEffect(() => {
   axios.get(`https://dog.ceo/api/breed/${id}/images/random`).then((r)=>setfirst(r.data.message))
  }, [id]);


  return (

    <div style={{ textAlign: "center" }}>

      <div>
        <img src={first} alt="Cover Pic" />
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default Single;
