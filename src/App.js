import React, {Component} from 'react';
import Todos from './components/Todos';
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
        completed: true
      
      },
      {
        id: 3,
        title:'Apply to internships',
        completed: false
      
      }
    ]
  }
  
  markComplete = (id) => {
    console.log(id)
}



  render(){

    return (

      <div className="App">
   
        <Todos todos = {this.state.todos} markComplete={this.markComplete}/>
      </div>
    );

  }

}

export default App;
