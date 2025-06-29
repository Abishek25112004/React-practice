import { createContext, useState } from 'react'
import './App.css'
import Summa from './Components/Summa'

export let context = createContext();



function App() {

   let [products, setproducts] = useState(
     [
    {id:1,name:"bat",checked:true},
    {id:2,name:"ball",checked:true},
      {id:3,name:"car",checked:false}
  ]
  )


  return (
    
   <context.Provider value={{products,setproducts}}>
      <Summa/>
      </context.Provider>
   
  )
}

export default App
