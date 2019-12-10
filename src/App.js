import React, {Component}  from 'react';
import Todos from './components/Todos';

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
        id:1,
        title:'dinner with wife',
        completed:false
      }
    ]
  }
  render(){
    return(
     <div className="App">
      <Todos todos={this.state.todos}/>
     </div>
    );
  }
}
  

export default App;