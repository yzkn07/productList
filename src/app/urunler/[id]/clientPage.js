// "use client";
// import Image from "next/image"
// import { useEffect, useState } from "react";
// import styles from './urundetay.module.css';

// import { notFound } from "next/navigation";


// export default function Urun({ params = {} }) {
//     const { id } = params
//     const [product, setProduct] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
 
    
//     useEffect(() => {
//         async function getData() {
//             try {
//                 const request = await fetch(`https://dummyjson.com/products/${id}`);
//                 if (request.ok) {
//                     const response = await request.json();
//                     setProduct(response);
//                     setIsLoading(false);
                    
//                 } else {
//                     setIsLoading(false);
//                 }
//             } catch (error) {
//                 console.error("Veri çekme hatası:", error);
//                 setIsLoading(false);
//                 notFound();  // Hata durumunda 404 sayfasına yönlendir
//             }
//         }
//         if (id) {
//             getData();
//         }
//     }, [id]);
    



//     if (isLoading) {
//         return <div className={styles.loading}>Yükleniyor</div>;
//     }

//     return (
//         <div>
//             {product.title ? (
//                 <div className={styles['product-card']}>
//                 <Image
//                     className={styles['product-image']}
//                     src={product.thumbnail}
//                     width={300}
//                     height={300}
//                     alt={product.title}
//                     priority
//                 />
//                 <div className={styles['product-title']}>{product.title}</div>
//                 <div className={styles['product-price']}>{product.price}$</div>
//                 <div className={styles['product-description']}>{product.description}</div>
//                 <div className={styles['button-container']}>
//                     <button className={styles['add-to-cart-button']}>Add to Cart</button>
//                 </div>
//             </div>
//             ) : (
//                notFound()
//             )}
//         </div>
//     );
// }