import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title:'Take out trash',
        completed: false
      
      },
      {
        id: 2,
        title:'Work on React',
        completed: false
      
      },
      {
        id: 3,
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



  render(){

    return (

      <div className="App">
        <div className="container">
        <Header />
        <AddTodo />
   
        <Todos todos = {this.state.todos} 
        markComplete={this.markComplete}
        delTodo={this.delTodo}/>

        </div>


      </div>
    );

  }

}

export default App;
