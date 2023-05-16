import React,{useEffect, useState} from 'react'
import {useParams, Link} from "react-router-dom"
import axios from "axios"
function MicroDetail() {
    const [data, setData] = useState({})

   const {microId} = useParams()

   const getData = async () => {
    const res = await axios.get(`http://localhost:6969/microMergejil/${microId}`);
    setData({...res.data.data})
    console.log(res.data.data, "ahha")
   
  };

   useEffect(()=>{
     getData()

   },[])



 
  return (
    <>

    <div>
        {/* {
            data?.microMergejil?.length != 0 && data?.microMergejil.map((e)=>{
                return <div>{e.description}</div>
            })
        } */}
     

                <div>{data?.description}</div>
            

            
         
    </div>
    </>
  )
}

export default MicroDetail