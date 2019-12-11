import React, {Component}  from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/header';
import Input from './components/input'
import uuid from 'uuid';
import About from './components/About'
import axios from 'axios'

class App extends Component {
  state={
    todos:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=1')
    .then(res=>this.setState({todos:res.data}))
  }
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    })})
  }
  delTodo = (id) =>{
   this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
  }
  AddTodo = (title) =>{
    const newItem={
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newItem]});
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