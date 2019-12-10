import React, {Component}  from 'react';
import Todos from './components/Todos';
import Header from './components/header';
import Input from './components/input'

class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:'take out trash',
        completed:false
      },
      {
        id:2,
        title:'meeting with boss',
        completed:false
      },
      {
        id:3,
        title:'dinner with wife',
        completed:false
      }
    ]
  }
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id==id){
        todo.completed=!todo.completed
      }
      return todo;
    })})
  }
  delTodo = (id) =>{
   this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
  }
  render(){
    return(
     <div className="App">
      <Header />
      <Input />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
     </div>
    );
  }
}
  

export default App;