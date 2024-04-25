'use client'
import { createContext,useState } from "react";


export const Context=createContext();

const WholeContext = (props) => {
  const[toogle,setToogle]=useState(false); 
  const[category,setCategory]=useState('basketball');


  const value={
    toogle,
    setToogle,
    category,
    setCategory
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export default WholeContext

