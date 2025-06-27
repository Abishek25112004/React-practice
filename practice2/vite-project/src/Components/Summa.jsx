import React, { useActionState } from 'react'
import { useState } from 'react'
import Count from './Count'

function Summa() {
     
  const [view, setview] = useState("hello")

  const [count, setcount] = useState(0)

    let change=()=>{
       setview(()=>{
        return (
          "hi"
        )
       })
    }

  return (
    <div>
      <h1>{view}</h1>
      <button onClick={change}>click</button>
       <Count/>
    </div>
  )
}

export default Summa
