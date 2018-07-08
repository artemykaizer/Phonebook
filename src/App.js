import React from 'react'
import TableContainer from './components/TableContainer'
import Filter from './components/Filter'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'


function AppContainer (props) {
    return (
      <div className="wrapper">
          <h1>{props.displaySaved ? "My contacts" : "Main list"}</h1>
          <Filter/>
          <TableContainer/>
      </div>
    )
}

function mapStateToProps (state) {
    return {
        displaySaved: state.userLists.displaySaved
    }
}

const App = connect(mapStateToProps)(AppContainer)

export default App;
