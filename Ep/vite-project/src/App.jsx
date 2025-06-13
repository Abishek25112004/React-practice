import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Functional from './Functional'


 export let contextValue = createContext();

function App() {
    
  let obj = {
       name : "abishek",
       age : 20,
       email : "abishek@gmail.com"
  }


  return (
    <contextValue.Provider value={{...obj}}>
       <h1 className='title'>Hello</h1>  
       <Functional />
     
       </contextValue.Provider>
  )
 }

export default App
