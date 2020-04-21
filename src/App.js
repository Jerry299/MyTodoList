import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import Addtodo from "./components/layout/Addtodo";
import About from "./components/pages/About";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take Out The Trash",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "Have Dinner with wife",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "Meeting with Boss",
        completed: false,
      },
    ],
  };
  //my dummy test

  //Toggle checkbox complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  // Delete Button
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add new Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment style={bgImage}>
                <Addtodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
const bgImage = {
  backgroundColor: "#2f2fa2",
};
export default App;
