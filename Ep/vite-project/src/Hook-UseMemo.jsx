import  { useState, useMemo ,useRef} from 'react'
import HookUseContext from './Hook-UseContext';

function HookUseMemo() {

    let [input,setInput] = useState();

    let inputRef = useRef();

   function calculate(){
        console.log(parseInt(inputRef.current.value)*2)
        setInput(parseInt(inputRef.current.value)*2)
    }
   
    useMemo(()=>{
      console.log("hi")
    },[input])

  return (
    <div>
      <input style={{border:"3px solid black"}} type="number"  ref={inputRef}/>
      <div  style={{ height:"30px" , width:"100%"} }>{input}</div>
      <button onClick={calculate} >Toogle</button>
      <HookUseContext />
    </div>
  )
}

export default HookUseMemo
