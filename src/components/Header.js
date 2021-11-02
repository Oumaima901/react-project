import React from 'react'


function Header(props) {
    return (
        <div  className='titlepage'>
            
            { props.parent==='HomePage' ? 
               <h1>Employee Directory</h1> 
                
                : 
               
                <div  style={{display : 'flex', alignItems : 'center'}}> 
                    <button onClick={props.clickedItem} style={{height : '20px'}}> {'<'} </button>
                    <h1>Emplopyee</h1> 
                    
                </div>
            }
               
        </div>
    )
}

export default Header
