import React from "react"
import {connect} from 'react-redux'
import {addContact, deleteContact} from '../actions/index'

class TableRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            added: false
        }
        this.addToList = this.addToList.bind(this)
        this.deleteFromList = this.deleteFromList.bind(this)
    }

    addToList (human) {
        this.setState({added: true})
        this.props.addContact(human)
    }

    deleteFromList (human) {
        this.setState({added: false})
        this.props.deleteContact(human)
    }

    componentDidMount() {
        // Используется при запуске приложения, чтобы определить добавлен ли контакт
        //Сверяет все контакты с теми, что были получены из localstorage
        this.props.savedContacts.forEach((elem) => {
            if(elem.id === this.props.human.id) {
                this.setState({added: true})
            }
        })
    }


    render() {
        return (
        <tr 
        key={this.props.key}
        >
            <td>{this.props.human.name}</td>
            <td>{this.props.human.age}</td>
            <td>{this.props.human.address}</td>
            <td>{this.props.human.phone}</td>
            <td>
            {this.state.added ? 
                                    <button type="button" className="btn btn-outline-danger del-btn"
                                    onClick={() => this.deleteFromList(this.props.human)}>
                                    Delete from list
                                    </button> 
                                    : 
                                    <button type="button" className="btn btn-outline-success add-btn"
                                    onClick={() => this.addToList(this.props.human)}>
                                    Add to my list
                                    </button>
                                  }
            </td>
        </tr>
        )
    }
}

function mapStateToProps (state) {
    return {
        savedContacts: state.userLists.savedContacts
    }   
}

function mapDispatchToProps (dispatch) {
    return {
        addContact: (human) => dispatch(addContact(human)),
        deleteContact: (human) => dispatch(deleteContact(human))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow)