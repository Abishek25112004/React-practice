import Props from "./Props"

let obj = {
    name : "Abi",
    age : 20,
    phone : 3748234832,
    email : "abi@gmail.com"
}

let products =["product 1","product 2","product 3"]

function Functional(){
    return (
        <>
            <h2>Functional Component</h2>
            <h2>React Functional Component</h2>
            <Props  products={products}/>
        </>
)
}

export default Functional