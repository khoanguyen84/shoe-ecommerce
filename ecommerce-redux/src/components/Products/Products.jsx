import React, { useContext } from "react";
import Product from "./Product";
import { EcommerceContext } from "../../context/EcommerceContext";

function Products() {
    const { state } = useContext(EcommerceContext)
    const { productList, filters: { searchText, color, price, recommended, category } } = state
    const queryProducts = () => {
        let filtersProductList = [...productList]
        if (searchText) {
            filtersProductList = filtersProductList.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        filtersProductList = filtersProductList.filter(p => {
            if(category !== 'All') {
                return p.category.toLowerCase() === category.toLowerCase()
            }
            if (color !== 'All')
                return p.color.toLowerCase() === color.toLowerCase()
            if (recommended != 'All') {
                return p.company.toLowerCase() === recommended.toLowerCase()
            }
            return p
        }

        )
        if (price !== '0,0') {
            let [min, max] = price.split(",")
            filtersProductList = filtersProductList.filter(p => (min !== max) ? (p.newPrice > Number(min) && p.newPrice <= Number(max)) : p.newPrice > Number(min))
        }
        // console.log(filtersProductList);
        // if (searchText && color === 'All' && category === 'All' && price === '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
        // }
        // if (searchText && color !== 'All' && category === 'All' && price === '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) =>
        //         p.title.toLowerCase().includes(searchText.toLowerCase()) &&
        //         p.color.toLowerCase() === color.toLowerCase()
        //     )
        // }
        // if (searchText && color !== 'All' && category !== 'All' && price === '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) =>
        //         p.title.toLowerCase().includes(searchText.toLowerCase()) &&
        //         p.color.toLowerCase() === color.toLowerCase() &&
        //         p.category.toLowerCase() === category.toLowerCase()
        //     )
        // }
        // if (searchText && color !== 'All' && category !== 'All' && price !== '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return p.title.toLowerCase().includes(searchText.toLowerCase()) &&
        //             p.category.toLowerCase() === category.toLowerCase() &&
        //             p.color.toLowerCase() === color.toLowerCase() &&
        //             ((min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min))
        //     })
        // }
        // if (searchText && color === 'All' && category !== 'All' && price !== '0,0' && recommended !== 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return p.title.toLowerCase().includes(searchText.toLowerCase()) &&
        //             p.category.toLowerCase() === category.toLowerCase() &&
        //             p.color.toLowerCase() === color.toLowerCase() &&
        //             ((min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min)) &&
        //             p.company.toLowerCase() === recommended.toLowerCase()
        //     })
        // }
        // if (!searchText && color !== 'All' && category === 'All' && price === '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) => p.color.toLowerCase() === color.toLowerCase())
        // }
        // if (!searchText && color !== 'All' && category !== 'All' && price === '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) =>
        //         p.color.toLowerCase() === color.toLowerCase() &&
        //         p.category.toLowerCase() === category.toLowerCase()
        //     )
        // }
        // if (!searchText && color !== 'All' && category !== 'All' && price !== '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return p.color.toLowerCase() === color.toLowerCase() &&
        //             p.category.toLowerCase() === category.toLowerCase() &&
        //             ((min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min))
        //     })
        // }
        // if (!searchText && color !== 'All' && category !== 'All' && price !== '0,0' && recommended !== 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return p.color.toLowerCase() === color.toLowerCase() &&
        //             p.category.toLowerCase() === category.toLowerCase() &&
        //             ((min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min)) &&
        //             p.company.toLowerCase() === recommended.toLowerCase()
        //     })
        // }
        // if (!searchText && color === 'All' && category !== 'All' && price === '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) => p.category.toLowerCase() === category.toLowerCase())
        // }
        // if (!searchText && color === 'All' && category !== 'All' && price !== '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return p.category.toLowerCase() === category.toLowerCase() &&
        //             ((min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min))
        //     })
        // }
        // if (!searchText && color === 'All' && category !== 'All' && price !== '0,0' && recommended !== 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return p.category.toLowerCase() === category.toLowerCase() &&
        //             ((min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min)) &&
        //             p.company.toLowerCase() === recommended.toLowerCase()
        //     })
        // }
        // if (!searchText && color === 'All' && category === 'All' && price !== '0,0' && recommended === 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return (min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min)
        //     })
        // }
        // if (!searchText && color === 'All' && category === 'All' && price !== '0,0' && recommended !== 'All') {
        //     return filtersProductList.filter((p) => {
        //         let [min, max] = price.split(',')
        //         return ((min !== max) ? p.newPrice > Number(min) && p.newPrice <= Number(max) : p.newPrice > Number(min)) &&
        //             p.company.toLowerCase() === recommended.toLowerCase()
        //     })
        // }
        // if (!searchText && color === 'All' && category === 'All' && price === '0,0' && recommended !== 'All') {
        //     return filtersProductList.filter((p) => p.company.toLowerCase() === recommended.toLowerCase())
        // }
        return filtersProductList
    }
    const remainProductList = queryProducts()
    console.log(state.filters);
    return (
        <div className="py-2">
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