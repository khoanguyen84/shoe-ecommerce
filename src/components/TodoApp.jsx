import React, { useState, useEffect } from "react";
import useFetchProduct from "../hooks/useFetchProduct";
import useFetch from "../hooks/useFetch";

// useState
// 1. action 
// 2. update State


// useReducer
// 1. initState = khởi tạo dữ liệu (bất kể các kiểu dữ liệu)
// 2. actions = hành động
// 3. reducer = là 1 hàm
// 4. dispatch = là 1 hàm, kích hoạt hành động

function TodoApp() {
    // const [productList, setProductList] = useState([])
    // useEffect(() => {
    //     async function fetchData(){
    //         let productRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
    //         let data = await productRes.json()
    //         setProductList(data)
    //     }
    //     fetchData()
    // }, [])
    // const productList = useFetchProduct()
    const productList = useFetch('https://jsonserver-vercel-api.vercel.app/products')
    const categoryList = useFetch('https://jsonserver-vercel-api.vercel.app/categories')
    return (
        <>
            <div>
                {categoryList.map((cat) => (
                    <li>{cat.name}</li>
                ))}
            </div>
            <div>
                {productList.map(product => (
                    <p>{product.title} - {product.company}</p>
                ))}
            </div>
        </>
    )
}

export default TodoApp;