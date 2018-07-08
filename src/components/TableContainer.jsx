import {connect} from 'react-redux'
import TablePresent from './TablePresent'

const makeFilter = (humans, filter) => {
    if (filter.searchString) {
        humans = humans.filter((human) => human.name.toLowerCase().indexOf(filter.searchString.toLowerCase())!==-1)
    } if(filter.letterFilter) {
        humans = humans.filter((human) => human.name.charAt(0) === filter.letterFilter)
    }  if(filter.genderFilter) {
        humans = humans.filter((human) => human.gender === filter.genderFilter)
    } 
    
    switch (filter.currentSorting) {
        case "NAME-ASCENDING":
            return [...humans.sort((a, b) => a.name < b.name ? 1 : -1)] 
        case "NAME-DESCENDING":
            return [...humans.sort((a, b) => a.name > b.name ? 1 : -1)]
        case "AGE-DESCENDING":
            return [...humans.sort((a, b) => a.age < b.age ? 1 : -1)]
        case "AGE-ASCENDING":
            return [...humans.sort((a, b) => a.age > b.age ? 1 : -1)]
        default:
            return humans
    }
}


function mapStateToProps(state) {
    return {
        peoples: makeFilter(state.userLists.displaySaved ? // Если включен просмотр сохраненных, то поысалет сюда сохраненные, иначе все
                            state.userLists.savedContacts 
                            : 
                            state.userLists.peoples, state.currentFilters),
        fetching: state.userLists.isFetching
    }
} 

const Table = connect(mapStateToProps)(TablePresent)

export default Table