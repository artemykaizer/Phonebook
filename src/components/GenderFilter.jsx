import React from 'react';
import {connect} from 'react-redux'
import {filterByGender} from '../actions/filterActions'

function GenderFilterContainer (props) {
    return (
        <label>
            Show only:
            <select className="form-control" onChange={(e) => props.filterByGender(e.currentTarget.value)}>
                    <option value="">All</option>
                    <option value="male">Males</option>
                    <option value="female">Females</option>
            </select>
        </label>
    )
}


function mapDispatchToProps (dispatch) {
    return {
        filterByGender: (gender) => {
            dispatch(filterByGender(gender))
        }
    }
}


const GenderFilter = connect(null, mapDispatchToProps)(GenderFilterContainer)

export default GenderFilter