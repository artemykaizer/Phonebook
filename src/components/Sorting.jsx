import React from 'react' 
import {sortPeoples} from '../actions/filterActions'
import {connect} from 'react-redux'


function Sorting (props) {
    return (
        <div className="nav-wrapper">
        <label htmlFor="sortSelect">Sort by:
        <select id="sortSelect" className="form-control" onChange={(e) => props.sorting(e.target.value)}>
            <option value=" ">None</option>
            <option value="NAME-DESCENDING">Descending name</option>
            <option value="NAME-ASCENDING">Ascending name</option>
            <option value="AGE-DESCENDING">Descending age</option>
            <option value="AGE-ASCENDING">Ascending age</option>
        </select>
        </label>
        </div>
    )
}



function mapDispatchToProps (dispatch) {
    return {
        sorting: (sortType) => {
            dispatch(sortPeoples(sortType))
        }
    }
}


export default connect(null, mapDispatchToProps)(Sorting)