import React, { Component } from 'react'
import { Input } from 'reactstrap'

export class SearchBar extends Component {
    constructor (props){
        super(props)
        this.state={
            searchText:''
        }
    }
    handleInput(event){
        this.setState({
            ...this.state,
            searchText : event.target.value
        },() =>{console.log(this.state.searchText)} 
        )
    }
    render() {
        return (
            
                 <Input type="text" placeholder="Search.."  value={this.state.searchText} onChange={(event)=>{this.handleInput(event)}}>
                
             </Input>
        )
    }
}



export default SearchBar
