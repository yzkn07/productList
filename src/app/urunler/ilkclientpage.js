"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './urunler.module.css';

export default function Urunler( ) {

    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([{ title: newProduct }, ...products]);
        setNewProduct("");
    }

    useEffect(() => {
        async function getData() {
            const request = await fetch(`https://dummyjson.com/products`)
            if (request.ok) {
                const respons = await request.json();
                setProducts(respons.products);
            } else {
                setProducts([]);
            }
            setIsLoading(false);
        }
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <div className="header">ürünler</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                    type="text"
                    name="productname"
                    className={styles.input}
                    placeholder="Yeni ürün ekle"
                />
                <button type="submit" className={styles.button}>kaydet</button>
            </form>
            {isLoading ? (
                <div className={styles.loading}>Yükleniyor</div>
            ) : products.length < 1 ? (
                <div className={styles.loading}>Yüklenmiyor</div>
            ) : (
                <ul className={styles['product-list']}>
                    {products.map((product, index) => (
                        <li key={index} className={styles['product-item']}>
                            {product.title}
                            <Link href={`urunler/${product.id}`}>
                                <span className={styles['product-link']}>ürüne git</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
























