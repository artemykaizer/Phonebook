import React from 'react';
import {searchPeoples} from '../actions/filterActions'
import {connect} from 'react-redux'

function SearchInputContainer (props) {
    return (
        <label htmlFor="search">Search: 
        <input id="search" type="text" className="form-control input" 
        onChange={(e) => props.search(e.target.value)}/>
        </label>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        search: (char) => { 
            dispatch(searchPeoples(char))
        }
    }
}


const SearchInput = connect(null, mapDispatchToProps)(SearchInputContainer)

export default SearchInput