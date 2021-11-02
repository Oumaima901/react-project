import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

function EmployeePage({employees}) {
    let {idEmployee} = useParams()
    let employee = employees.find(employee =>(idEmployee == employee.id))
    return (
        <div style={{margin : '10px'}}>
            <Header parent={'EmployeePage'} />
            
            <div className="employeepagecontent">
               
        {employee ? employee.name : "Veillez choisir un employée"}{ employee ? <button> {'>'}</button> : ""} 
        {employee ? employee.poste : ""} { employee ? <button> {'>'}</button> : ""}     
        {employee ? employee.phone : ""}{ employee ? <button> {'>'}</button> : ""} 
        {employee ? employee.email : ""}{ employee ? <button> {'>'}</button> : ""}   
       
        </div>
            
        </div>
    )
}

export default EmployeePage
