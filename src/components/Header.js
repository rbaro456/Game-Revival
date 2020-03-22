import React from 'react'

 function Header() {
    return (
       <header style={headerStyle}>
           <div style={titleStyle}>
                <h1>Game Reviver</h1>
           </div>
           <div style={linkDiv}>    
               <a href="url">home</a>
               <a href="url">community</a>
               <a href="url">contact</a>                 
           </div>
       </header>
    )
}

export default Header;

const headerStyle = {
    display: 'flex',
    background: '#0cb520',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const titleStyle = {
    marginLeft: '7px',
    textAlign: 'left'
}

const linkDiv = {
    marginRight: '0',
    marginLeft: 'auto',
    width: '248px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid black'
}