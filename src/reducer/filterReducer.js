import {
    FILTER_BY_GENDER,
    SEARCH_PEOPLES,
    FILTER_BY_CHAR,
    SORT_PEOPLES
} from '../actions/filterActions'

function filterReducer (state = {}, action) {
    switch(action.type) {
    case FILTER_BY_GENDER: 
        const newGenderFilter = Object.assign({}, state, {genderFilter: action.gender})
        return newGenderFilter
    case SEARCH_PEOPLES: 
        const newSearchFilter = Object.assign({}, state, {searchString: action.char})
        return newSearchFilter
    case FILTER_BY_CHAR:
        const newLetterFilter = Object.assign({}, state, {letterFilter: action.char})
        return newLetterFilter
    case SORT_PEOPLES: 
        const newSort = Object.assign({}, state, {currentSorting: action.sortType})
        return newSort
    default: 
        return state
    }
}

export default filterReducer