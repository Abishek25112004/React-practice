import React, { useContext,  useState } from 'react'
import { context} from '../App'

function ListRendering() {

let {products,setproducts} = useContext(context)   
const [update, setupdate] = useState(false)

let handleCheckBox =(id)=>{
    let checkBox = products.map((value)=>{
      return value.id===id?{...value,checked:!value.checked}:value
    })
    setproducts(checkBox)
}

let handleDelete =(id)=>{
     let deleteItem = products.filter((item)=>(
      item.id!==id
)).map((item,index)=>{
  return {...item,id:index+1}
})
     setproducts(deleteItem)
}



  return (
    <>
       <h1></h1>
        <input type="text" placeholder='name'  />
        <button >{update==false?"Add":"Save"}</button>

        <ul>
          {
            products.map((value,index)=>(
              <li key={index}>{value.name}
              <input type="checkbox" checked={value.checked} onChange={()=>{handleCheckBox(value.id)}} />
              <button onClick={()=>{setupdate(!false)}}>update</button>
              <button onClick={()=>{handleDelete(value.id)}}>delete</button>
              </li>
            ))
          }
        </ul>
    </>
  )
}

export default ListRendering