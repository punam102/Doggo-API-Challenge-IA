import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {

    let a=useParams();

    console.log(a)

    useEffect(()=>{

        axios.get(`https://dog.ceo/api/breed/${a}/images/random/3`).then((res)=>{

        console.log(res)
        }).catch((er)=>{
            console.log(er)
        })
    })
  return (
    <div>Details</div>
  )
}
