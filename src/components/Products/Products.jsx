import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../reducer/actions";

/*
    1. store
    2. rootReducer
        2.1. reducer
        2.2. reducer
    3. actions (action creator)
    4. dispatch => useDispatch
    5. useSelect => lấy các dữ liệu riêng biệt trong state (data)


    cài đặt
    1. npm i redux
    2. npm i react-redux
    3. npm i redux-devtools-extension
 */
function Products() {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { searchText, recommended, category, price, color } = useSelector((state) => state.filters)
    useEffect(() => {
        async function getProducts(){
            let productListRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
            let data = await productListRes.json()
            dispatch(getProductList(data))
        }

        getProducts()
    }, [])
    const queryProductList = () => {
        let queryProducts = [...productList]
        if(searchText) {
            queryProducts = queryProducts.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if(recommended !== 'All'){
            queryProducts = queryProducts.filter((p) => p.company.toLowerCase() === recommended.toLowerCase())
        }
        if(category != 'All') {
            queryProducts = queryProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
        }
        if(color != 'All') {
            queryProducts = queryProducts.filter((p) => p.color.toLowerCase() === color.toLowerCase())
        }
        if(price != '0,0') {
            const [min, max] = price.split(',')
            if(min !== max){
                queryProducts = queryProducts.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
            }
            else {
                queryProducts = queryProducts.filter((p) => p.newPrice > Number(min))
            }
        }
        return queryProducts;
    }

    const remainProductList = queryProductList()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    remainProductList?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;