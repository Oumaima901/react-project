import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import EmployeeList from './EmployeeList'
import Header from './Header'

function HomePage(props) {
    const {employees} = props;
    return (
        <BrowserRouter style={{margin : '10px'}}>
            <Link to="/EmployeePage/1">Employee Page Home</Link>
            <Header parent={'HomePage'}  />

            <EmployeeList  employees={employees}    />
        </BrowserRouter>
    )
}

export default HomePage
