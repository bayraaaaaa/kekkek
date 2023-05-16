import React,{useEffect, useState} from 'react'
import {useParams, Link} from "react-router-dom"
import axios from "axios"
import "../styles/detailContainer.css"
function PrefessionDetail() {
    const [data, setData] = useState([])

   const {professionId} = useParams()

   const getData = async () => {
    const res = await axios.get(`http://localhost:6969/mergejil/${professionId}`);
    setData(res.data.data.microMergejil)
 
  
  };

   useEffect(()=>{
     getData()
   },[])



  return (
    <>

    <div >
        {/* {
            data?.microMergejil?.length != 0 && data?.microMergejil.map((e)=>{
                return <div>{e.description}</div>
            })
        } */}
        {
          data.map((e)=>{
            console.log(e._id)
            return (
            <>
            <Link to={e._id}>
            <div className='detailContainer'>{e.microMergejilName}</div>
            
            </Link>
            
            </>
            )
          })
        }
    </div>
    </>
  )
}

export default PrefessionDetail