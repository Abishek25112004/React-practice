import { useState,useEffect } from "react"

function HookUseEffect() {

  let [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(count)
  },[count])

  return (
    <div>
      <h2>{count}</h2>
      <button style={{border:"3px solid black", padding:"5px"}} onClick={()=>setCount((count)=>count+1)}>ADD</button>
    </div>
  )
}

export default HookUseEffect
