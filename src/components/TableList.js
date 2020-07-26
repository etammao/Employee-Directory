import React from 'react'
import TableRow from './TableRow'

function TableList( props ){
    // props.employees
    return (

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Pet Type</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map( employee=><TableRow {...employee} /> )}
            </tbody>
        </table>
    )
}

export default TableList
