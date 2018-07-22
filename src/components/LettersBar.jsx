import React from 'react'
import {connect} from 'react-redux'
import {filterByChar} from '../actions/filterActions'

function LettersBar (props) {
    return (
        <div>

        <div className="btn-group mr-3" role="group">
        <button className="btn btn-primary btn-sm" 
         onClick={() => props.filterByChar()}>ALL</button>

        {props.letters.map((elem) => <button className="btn btn-primary btn-sm"
                                    key={elem} 
                                    onClick={(e) => props.filterByChar(e.target.value)} 
                                    value={elem}>
                                    {elem}
                                    </button>)}
        </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        letters: state.userLists.lettersBar
    }
}

function mapDispatchToProps (dispatch) {
    return {
        filterByChar: (char) => {
            dispatch(filterByChar(char))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LettersBar)