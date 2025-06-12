import {useState} from 'react'

function HookUseRef() {
     
    let [input,setInput] = useState("")

console.log(input)

  return (
    <div>
     <input style={{border:"3px solid black"}} type="text"  value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <h2>My name is : {input}</h2>
      <button>show</button>
    </div>
  )
}

export default HookUseRef
