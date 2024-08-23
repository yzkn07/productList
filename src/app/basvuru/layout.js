import Header from "@/components/Header";

export default function AplicationLayout({ children }) {
    return(
        <>
        <Header/>
        { children }
        </>
    )
}