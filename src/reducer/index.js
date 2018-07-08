import {REQUEST_PEOPLES, 
        REQUEST_START,
        CREATE_LETTERS_BAR,
        ADD_CONTACT,
        CREATE_SAVED_CONTACTS,
        DELETE_CONTACT,
        DISPLAY_SAVED   
    } from '../actions/index'
import {combineReducers} from 'redux'
import filterReducer from './filterReducer'


function indexReducer (state={}, action) {
    switch(action.type) {
        case REQUEST_START:
            return Object.assign({}, state, {isFetching: true})

        case REQUEST_PEOPLES: 
            return Object.assign({}, state, {peoples: action.peoples, isFetching: false})
            
        case CREATE_LETTERS_BAR:
            //Генерирует уникальный массив букв, на которые начинаются имена
            const letters = Array.from(new Set(state.peoples.map((elem) => elem.name.charAt(0)))).sort()
            return Object.assign({}, state, {lettersBar: letters})

        case ADD_CONTACT: 
            const addedContact = state.savedContacts.concat(action.human)
            localStorage.setItem("saved", JSON.stringify(addedContact))
            return Object.assign({}, state, {savedContacts: addedContact})

        case CREATE_SAVED_CONTACTS: 
            const saved = state.savedContacts.concat(action.human)
            return Object.assign({}, state, {savedContacts: saved})

        case DELETE_CONTACT: 
            let newSaved = state.savedContacts.filter((elem) => elem.id !== action.human.id)
            localStorage.setItem("saved", JSON.stringify(newSaved))
            return Object.assign({}, state, {savedContacts: newSaved})

        case DISPLAY_SAVED:
            return Object.assign({}, state, {displaySaved: !state.displaySaved})
        default:
            return state
    }
}

export default combineReducers({userLists: indexReducer, currentFilters: filterReducer})