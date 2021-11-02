import React, { Component } from 'react'
import EmployeePage from './components/EmployeePage'
import HomePage from './components/HomePage'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state={
      searchText:'',
      employees : [
        {
          id : 1,
          name : 'Anis',
          poste : 'CEO',
          image:'avatar2.png',
          phone : 22323424,
          email : 'anis@itbs.tn'
        },
        {
          id : 2,
          name : 'Aymen',
          poste : 'CTO',
          image:'img_avatar.png',
          phone : 53525323,
          email : 'aymen@itbs.tn'
        },
        {
          id : 3,
          name : 'Ahmed',
          poste : 'CMO',
          image:'img_avatar.png',
          phone : 98383484,
          email : 'ahmed@itbs.tn'
        }
      ]
    }
  }

  searchItem =(SearchText)=>{
    
    this.setState({
      ...this.state,
      SearchText

      
    })
   
  }
 
 


  render() {
    return (
      <Router>
      <div >
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/EmployeePage/1">Employee Page</Link>
          </li>
         
        </ul>
        <Switch>
          <Route exact path="/"  >
          <Link to="/EmployeePage/1">Employee Page Switch Home </Link>

            <HomePage employees={this.state.employees} searchItem={this.searchItem} />
          </Route>
          <Route path="/EmployeePage/:idEmployee"  >
            <EmployeePage 
              employees={this.state.employees} 
            />
         
          </Route>
        </Switch>
         
        
        </div>
    </Router>
       /* <div className="App"  style={{display : 'inline-flex' }}>

          {this.state.clickedEmployee ? 
          <EmployeePage 
          employee={this.state.employees.find((employee)=>  (employee.id === this.state.clickedEmployee ))} 
          clickedItem={this.clickedItem}
        />
          
          
          
          :
          
          <HomePage employees={this.state.employees} clickedItem={this.clickedItem}  searchItem={this.searchItem} />
          
          }
         
         
          
        </div>*/
    )
  }
  
  
 
  
}

export default App
