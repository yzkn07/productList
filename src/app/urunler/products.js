"use client"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function ProductsAll({ products, id }) {
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (products.products.length > 0) {
            setIsLoading(false);
        }
    }, [products]);

    return (
        <>
            {!isLoading ? (
                products.products.map((p, i) => (
                        <p key={i}>{p.title} <Link  href={`urunler/${p.id}`}>ürüne git</Link></p>  
                ))
            ) : (
                <p>yükleniyor...</p>
            )}
        </>
    );
}
