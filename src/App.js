import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import nextId from 'react-id-generator';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: nextId(),
        title:'Take out trash',
        completed: false
      
      },
      {
        id: nextId(),
        title:'Work on React',
        completed: false
      
      },
      {
        id: nextId(),
        title:'Apply to internships',
        completed: false
      
      }
    ]
  }


  // toggles complete from true to false for each todo
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      console.log(id +", completed:" + todo.completed)
      return todo;
    })})

}
// Delete Todo
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}

//Add Todo
addTodo = (title) => {
  const newTodo = {
    id: nextId(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
} 



  render(){

    return (

      <div className="App">
        <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
   
        <Todos todos = {this.state.todos} 
        markComplete={this.markComplete}
        delTodo={this.delTodo}/>

        </div>


      </div>
    );

  }

}

export default App;
