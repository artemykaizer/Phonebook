import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducer/index'
import {getPeoples, createSavedContacts} from '../actions/index'


export const initialState = {
    userLists: {
        peoples: [],
        lettersBar: [],
        savedContacts: [],
        isFetching: false,
        displaySaved: false
    },
    currentFilters: {
        searchString: "",
        letterFilter: "",
        genderFilter: "",
        currentSorting: " "
    }
}

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))

//Делает запрос на сервер
store.dispatch(getPeoples())

// Получает сохраненные контакты при загрузке приложения и помещает их в стор
const json = JSON.parse(localStorage.getItem("saved"))
if(json) {
    json.forEach((elem) => {
            store.dispatch(createSavedContacts(elem))
    })
}

export default store