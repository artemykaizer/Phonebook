import React from 'react' 
import {displaySaved} from '../actions/index'
import {connect} from 'react-redux'

function ShowSavedButtonContainer (props) {
    return (
        <button className="btn btn-primary" 
        onClick={props.displaySaved}>
        {props.displayStatus ? 
         "Show main list" 
         : 
        <span>Show my contacts <span className="badge badge-light">{props.savedContacts.length}</span></span>}
        </button>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        displaySaved: () => dispatch(displaySaved())
    }
}

function mapStateToProps (state) {
    return {
        displayStatus: state.userLists.displaySaved,
        savedContacts: state.userLists.savedContacts
    }
}

const ShowSavedButton = connect(mapStateToProps, mapDispatchToProps)(ShowSavedButtonContainer)

export default ShowSavedButton