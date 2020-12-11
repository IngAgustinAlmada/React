import React, { Component } from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import './App.css';
import { uuid } from 'uuid';

class App extends Component {
  state = {
    todos:[
      {
        id: uuid.v4(),
        //id: 1,
        title:"Looking for job",
        status:false
      },
      {
        id: uuid.v4(),
        title:"Going on a trip",
        status:false
      },
      {
        id: uuid.v4(),
        title:"Working hard",
        status:false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.status = !todo.status
       }
      return todo;
    })
  })
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      status: false

    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="Container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
