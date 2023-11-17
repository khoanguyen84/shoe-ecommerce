export const setSearchText = (payload) => {
    return {
        type: 'filters/searchText',
        payload
    }
}

export const setSearchCategory = (payload) => {
    return {
        type: 'filters/searchCategory',
        payload
    }
}

export const setSearchPrice = (payload) => {
    return {
        type: 'filters/searchPrice',
        payload
    }
}

export const setSearchColor = (payload) => {
    return {
        type: 'filters/searchColor',
        payload
    }
}

export const setSearchRecommended = (payload) => {
    return {
        type: 'filters/searchRecommended',
        payload
    }
}