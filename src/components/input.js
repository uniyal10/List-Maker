import React from'react';
import '../App.css';


function Input(){
    return(
        <form style={{display:'flex'}}>
            <input 
            style={input}
            type="text"
            name="input"
            placeholder="type todos.."
            />
            <button className="btn" type="submit">
             Enter
            </button>
          
        </form>
    );
}
const input={
   flex:'10',
   padding:'5px 10px',
   border:'2px solid black',
   margin:'10px'
}
export default Input;