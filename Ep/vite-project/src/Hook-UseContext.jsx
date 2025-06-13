import { contextValue } from "./App"
import { useContext } from "react"

function HookUseContext() {

    let values = useContext(contextValue)
   
  return (
    <div>
      <ul>
        {Object.entries(values).map(([key,value],index)=>(
            <li key={index}>
                {key} : {value}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default HookUseContext
