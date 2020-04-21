import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItems extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "1px",
      borderBottom: "1px #ccc dotted",
      backgroundColor: "#f4f4f4",
    };
  };

  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={btnStyle()}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = () => {
  return {
    backgroundColor: "#f00",
    borderRadius: "50%",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    float: "right",
  };
};

//propTypes
TodoItems.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItems;
