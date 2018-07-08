export const REQUEST_PEOPLES = "REQUEST_PEOPLES";
export const REQUEST_START = "REQUEST_START"
export const CREATE_LETTERS_BAR = "CREATE_LETTERS_BAR"
export const ADD_CONTACT = "ADD_CONTACT"
export const CREATE_SAVED_CONTACTS = "CREATE_SAVED_CONTACTS"
export const DELETE_CONTACT = "DELETE_CONTACT"
export const DISPLAY_SAVED = "DISPLAY_SAVED"

function requestPeoples (peoples) {
    return {
        type: REQUEST_PEOPLES,
        peoples
    }
}

export function requestStart() {
    return {
        type: REQUEST_START
    }
}

export function getPeoples () {
    return function (dispatch) {
        dispatch(requestStart())
        fetch("http://www.json-generator.com/api/json/get/cgkKOhvAOa?indent=2")
            .then(response => response.json())
            .then(result => {
                dispatch(requestPeoples(result)) 
                dispatch(createLettersBar()) 
            })
            .catch(err => {
                dispatch(requestPeoples("ERROR")) 
            })
    }
}

export function createLettersBar () {
    return {
        type: CREATE_LETTERS_BAR
    }
}

export function addContact (human) {
    return {
        type: ADD_CONTACT,
        human
    }
}

export function createSavedContacts (human) {
    return {
        type: CREATE_SAVED_CONTACTS,
        human
    }
}

export function deleteContact (human) {
    return {
        type: DELETE_CONTACT,
        human
    }
}


export function displaySaved () {
    return {
        type: DISPLAY_SAVED
    }
}