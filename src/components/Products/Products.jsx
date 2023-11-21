import React, { useContext, useEffect } from "react";
import Product from "./Product";
import { ShoeContext } from "../../context/ShoeContext";
import { getProductList } from "../../reducer/actions";

function Products() {
    const { state, dispatch } = useContext(ShoeContext)
    const { productList, filters: { searchText, recommended, category, color, price } } = state
    useEffect(() => {
        async function fetchProductList(){
            let productListRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
            let data = await productListRes.json();
            dispatch(getProductList(data))
        }
        fetchProductList()
    }, [])
    const queryProducts = () => {
        let filtersProductList = [...productList]
        if (searchText){
            filtersProductList = filtersProductList.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if(recommended !== "All"){
            filtersProductList = filtersProductList.filter((p) => p.company.toLowerCase() === recommended.toLowerCase())
        }
        if(category !== 'All'){
            filtersProductList = filtersProductList.filter((p) => p.category.toLowerCase() === category.toLowerCase())
        }
        if(color !== 'All'){
            filtersProductList = filtersProductList.filter((p) => p.color.toLowerCase() === color.toLowerCase())
        }
        if(price !== '0,0'){
            const [min, max] = price.split(',')
            if(min !== max){
                filtersProductList = filtersProductList.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
            }
            else {
                filtersProductList = filtersProductList.filter((p) => p.newPrice > Number(min))
            }
        }
        return filtersProductList
    }
    const remainProductList = queryProducts()
    console.log(state.filters);
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    remainProductList?.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;