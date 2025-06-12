import { useState ,useRef} from "react"
import HookUseRef from "./Hook-UseRef";

function UseStateExample() {

    let [input, setInput] = useState("");

     let inputRef = useRef()

     let display=()=>{
        console.log(inputRef.current.value)
     }

    return(
<>
  <input style={{border:"3px solid black"}}  ref={inputRef}></input>
  <button onClick={display}>Show</button>
  <p>{display}</p>
  <HookUseRef/>
</>
    )
}

export default UseStateExample
