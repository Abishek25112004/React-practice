import Products from "./Products"
import HookUseState from "./Hook-UseState"

function Props({products}) {
    
  return (
    <>
    <ul>
        {products.map((items, index)=>(
            <Products singleProduct = {items} key={index}/>
        ))}
    </ul>
    <HookUseState />
    </>
  )
}

export default Props
