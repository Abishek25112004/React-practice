import { createContext} from 'react'
import './App.css'
import Functional from './Functional'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/ReactRouting/pages/Home.jsx'
import User from '../src/ReactRouting/pages/User.jsx'
import Contact from '../src/ReactRouting/pages/Contact.jsx'
import About from '../src/ReactRouting/pages/About.jsx'
import Navbar from './ReactRouting/Navbar.jsx'



 export let contextValue = createContext();

function App() {
    
  let obj = {
       name : "abishek",
       age : 20,
       email : "abishek@gmail.com"
  }


  return (
     <>
    

     <BrowserRouter>
      <Navbar/>
     <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
     </Routes>
     
     </BrowserRouter>

     

    <contextValue.Provider value={{...obj}}>
       <h1 className='title'>Hello</h1>  
       <Functional />
     
       </contextValue.Provider>
       </>
  )
 }

export default App
