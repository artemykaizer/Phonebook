export const SORT_PEOPLES = "SORT_PEOPLES"
export const FILTER_BY_CHAR = "FILTER_BY_CHAR"
export const SEARCH_PEOPLES = "SEARCH_PEOPLES"
export const FILTER_BY_GENDER = "FILTER_BY_GENDER"

export function searchPeoples (char) {
    return {
        type: SEARCH_PEOPLES, 
        char
    }
}

export function filterByGender (gender) {
    return {
        type: FILTER_BY_GENDER,
        gender
    }
}

export function filterByChar (char) {
    return {
        type: FILTER_BY_CHAR,
        char
    }
}

export function sortPeoples (sortType) {
    return {
        type: SORT_PEOPLES,
        sortType
    }
}