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
        completed: false
      
      },
      {
        id: 3,
        title:'Apply to internships',
        completed: false
      
      }
    ]
  }
  



  render(){
    console.log(this.state.todos);
    return (

      <div className="App">
   
        <Todos />
      </div>
    );

  }

}

export default App;
