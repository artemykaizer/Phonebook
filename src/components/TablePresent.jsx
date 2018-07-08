import React from 'react'
import TableRow from './TableRow'
import Circle from '../style/Eclipse-1s-200px.svg'

function TablePresent (props) {
    const peoples = props.peoples

    if (props.fetching) {
        //Прелоадер
        return <img src={Circle} alt="Loading..." style={{width: '135px', height: '135px'}}/>
    }
        
    if(peoples.length===0) {
        return <p>Not found.</p>
    }

    if(peoples === "ERROR") {
        return <p className="alert alert-danger" role="alert">Failed to load data.</p>
    }

    return (
            <div className="table-container">
            <table className="table table-hover main-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Adress</th>  
                    <th>Number</th>
                    <th className="save-cl">Save</th>  
                </tr>
            </thead>
            <tbody>
                {peoples.map((human) => {
                    return (
                        <TableRow
                        key={human.id}
                        human={human}
                        />
                    )
                })}  
            </tbody>
            </table>
            </div>
            )
}


export default TablePresent