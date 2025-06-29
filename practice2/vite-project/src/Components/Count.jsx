import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ListRendering from './listRendering'

function Count() {

   let [count, setCount] = useState(0)
    
   let add=()=>{
        setCount((Count)=>{
            return Count+=1;
        })
   }

   let decrement = ()=>{
    setCount((Count)=>{
        return (
            Count-=1
        )
    })
   }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={decrement}>Decrement</button>
      <ListRendering/>
    </div>
  )
}

export default Count
