import Products from "./Products"

function Props({products}) {
    
  return (
    <>
    <ul>
        {products.map((items, index)=>(
            <Products singleProduct = {items} key={index}/>
        ))}
    </ul>
    </>
  )
}

export default Props
