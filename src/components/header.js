import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header style={header}>  
      <h1 >
        List Todos
      </h1>
      <Link  style={links} to="/">Home</Link>{' | '}
      <Link  style={links}  to="/about">About</Link>

    </header>
   
  );
}
const links={
  textDecoration:'none',
  color:'#fff'
}
const header={
    backgroundColor:'black',
    color:'#fff',
    textAlign:'center',
    padding:'2px 10px',
}
