import React, { Component } from 'react'
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () =>{
     return{
         backgroundColor:'#f4f4f4',
         padding:'10px',
         borderBottom:'1px dotted #ccc',
         textDecoration:this.props.todo.completed ? 'line-through':'none'
     }
    }
  render() {
      const {id , title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
            {title}
            <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
        </p>
 
      </div>
    )
  }
}

TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}
const btnStyle={
    color:'#333',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}


export default TodoItem;
