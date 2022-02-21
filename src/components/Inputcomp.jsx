import React ,{useEffect, useState}from 'react'
import {mainContext,useContext} from "../context"

const Inputcomp = () => {
  const{addMethod} =useContext(mainContext);
  const [search,setSearch] = useState("");
  useEffect(()=>{addMethod({search});},[search])
  return (
    <>
        <input onChange={(e)=>{setSearch(e.target.value)}} value={search} placeholder='Name' type="text" />
    </>
  )
}

export default Inputcomp