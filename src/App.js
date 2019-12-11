import React, {Component}  from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/header';
import Input from './components/input'
// import uuid from 'uuid';
import About from './components/About'
import axios from 'axios'

class App extends Component {
  state={
    todos:[]
  }
  // componentDidMount(){
   
  
  // }
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    })})
  }
  delTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}))
   
  }
  AddTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos'
    ,
    {
     title,
     completed:false
    }
    )
    .then(res=>this.setState({todos:[...this.state.todos,res.data]}))
    
  }
  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <Input AddTodo={this.AddTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
           </React.Fragment>
           )}/>
           <Route 
           path="/about"
           component={About}
           />
        </div>
      </Router>
    
    );
  }
}
  

export default App;