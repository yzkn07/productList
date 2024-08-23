// import { notFound } from "next/navigation";
import ProductDetailOne from "./content";

export default async function UrunleriListele({ params, searchParams}) {
    // console.log(searchParams);
    const { firstName, lastName, age} = searchParams;
    const { id } = params;
    const request = await fetch(`https://dummyjson.com/products/${id}`)
    const response = await request.json()
    
    return <ProductDetailOne product={response}/>
    
        
            /* <p className={styles.tekurun}>{response.title}</p> */
            /* {(age || firstName || lastName) ? (
            <div>
                <p>isim: {firstName}</p>
                <p>soyisim : {lastName}</p>
                <p>yaş : {age}</p>
            </div>
            ) : (
                notFound()
                )} */
            
       
        
     
}