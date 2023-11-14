import { useState, useEffect } from "react"
const useFetchProduct = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        async function fetchData() {
            let productRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
            let data = await productRes.json()
            setProductList(data)
        }
        fetchData()
    }, [])
    
    return productList;
}

export default useFetchProduct