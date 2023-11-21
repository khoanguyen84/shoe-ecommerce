export const getProductList = (payload) => {
    return {
        type: 'productList/fetchProducts',
        payload
    }
}
export const setSearchText = (payload) => {
    return {
        type: 'filters/searchText',
        payload: payload
    }
}

export const setSearchRecommended = (payload) => {
    return {
        type: 'filters/searchRecommended',
        payload
    }
}

export const setSearchCategory = (payload) => {
    return {
        type: 'filters/searchCategory',
        payload
    }
}
export const setSearchColor = (payload) => {
    return {
        type: 'filters/searchColor',
        payload
    }
}
export const setSearchPrice = (payload) => {
    return {
        type: 'filters/searchPrice',
        payload
    }
}