

function Products({singleProduct,keys}) {
  return (
    <div >
      <li key ={keys}>
        {singleProduct}
      </li>
    </div>
  )
}

export default Products
