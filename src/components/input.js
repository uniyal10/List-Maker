import React,{Component} from'react';
import '../App.css';


class Input extends Component{
    state={
        title:''
    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title:' '});
    }
    render(){
    return(
        <form onSubmit={this.onSubmit} style={{display:'flex'}}>
            <input 
            style={input}
            type="text"
            name="title"
            placeholder="type todos.."
            value={this.state.title}
            onChange={this.onChange}

            />
            <input className="btn" type="submit"
             value="Enter"
            />
          
        </form>
    );
    }
}
const input={
   flex:'10',
   padding:'5px 10px',
   border:'2px solid black',
   margin:'10px'
}
export default Input;