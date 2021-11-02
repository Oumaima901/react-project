import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import EmployeeItem from './EmployeeItem'
import  SearchBar from './SearchBar'
function EmployeeList(props) {
    return (
        <BrowserRouter>
        <ListGroup>
               <SearchBar/>
               <Link to="/EmployeePage/1">Employee Page List</Link>

            {props.employees.map((employee)=>(
                 <EmployeeItem employee={employee} key={employee.id} /> ))}
            
        </ListGroup></BrowserRouter>
    )
}

export default EmployeeList
