import {useState , useRef, useEffect} from 'react'

function HookUseRef() {
     
    let [input,setInput] = useState("")

    let inputRef = useRef();
    let ans;

console.log(input)

let display=()=>{
       ans  = inputRef.current.value
       setInput(ans)
       console.log(ans)
     
}




  return (
    <div>
     <input style={{border:"3px solid black"}} type="text"  ref={inputRef}  />
      <h2>My name is : {input}</h2>
      <button onClick={display}>show</button>
    </div>
  )
}

export default HookUseRef
