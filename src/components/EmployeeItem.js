import React from 'react'
import { Link, BrowserRouter as Router} from 'react-router-dom'

function EmployeeItem({employee}) {
   
    return (
        <Router>
            <Link to={"/EmployeePage/"+employee.id}>
                <div className='employeeItem noneStyleBtn'> 
                
                    <img className='employeeItemImg' src={process.env.PUBLIC_URL+"/img/"+employee.image}/>
                    <p className='employeeItemName'> {employee.name}</p>
                    <p className='employeeItemPoste'>{employee.poste}</p>
                      
                   

                </div>
        
            </Link>
        </Router>
    )
  
}

export default EmployeeItem
