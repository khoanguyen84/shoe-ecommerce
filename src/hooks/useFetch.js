import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            let productRes = await fetch(url)
            let data = await productRes.json()
            setData(data)
        }
        fetchData()
    }, [])

    return data;
}

export default useFetch