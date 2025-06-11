import React,{useState} from 'react'
import HookUseEffect from './Hook-UseEffect';

function HookUseState() {
    let [num,setnum] = useState(10)
   let adding=()=>{
        setnum(()=>{
            return(
                <h2>value</h2>
            )
        }
        )
    }

  return (
    <div>
      <h2>{num}</h2>
      <button style={{border : "3px solid black"}} onClick={adding}>Add</button>

      <HookUseEffect />
    </div>
  )
}

export default HookUseState
