import React from 'react';
import {connect} from 'react-redux'
import {filterByGender} from '../actions/filterActions'

function GenderFilter (props) {
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


export default connect(null, mapDispatchToProps)(GenderFilter)