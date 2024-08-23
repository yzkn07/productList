"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/page.module.css";
import { useEffect, useRef } from "react";

export default function Header() {
    const pathname = usePathname();
    const activeIndexRef = useRef(0);

    useEffect(() => {
        const pathnames = ["/", "/urunler", "/basvuru"];
        activeIndexRef.current = pathnames.indexOf(pathname);
        document.documentElement.style.setProperty('--active-index', activeIndexRef.current);
    }, [pathname]);

    return (
        <>  
            <div className={styles.link}>
                <Link legacyBehavior href="/">
                    <a className={pathname === "/" ? styles.active : ""}>ana sayfa</a>
                </Link>
                <Link legacyBehavior href="/urunler">
                    <a className={pathname === "/urunler" ? styles.active : ""}>urunler</a>
                </Link>
                <Link legacyBehavior href="/basvuru">
                    <a className={pathname === "/basvuru" ? styles.active : ""}>basvuru</a>
                </Link>
            </div>
        </>
    );
}
