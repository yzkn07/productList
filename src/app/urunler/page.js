
import ProductsAll from "./products";

export default async function GetProducts({ params }) {
    const { id } = params
   
    const request = await fetch("https://dummyjson.com/products")
    const response = await request.json()

    
    return <ProductsAll products={response}/>
    
    
}
