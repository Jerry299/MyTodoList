import React, { Component } from "react"; //import connect from react redux
import { connect } from "react-redux";
//import redux actions
import { setAddTodo } from "../../redux/actions";
import "./AddTodo.css";

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => dispatch(setAddTodo(event.target.value)),
  };
};

class Addtodo extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.props.title);
  };
  // onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { title, onChange } = this.props;
    return (
      <div>
        <div className="form-group container col-md-8 offset-md-4">
          <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
            <input
              className="form-control mr-2 mt-2 p-2"
              type="text"
              name="title"
              placeholder="Add todo.."
              style={{ flex: "10", padding: "5px" }}
              value={title}
              onChange={onChange}
            />

            <input
              className="form-control mr-2 mt-2 p-2 btn btn"
              type="submit"
              value="Add TODO"
              style={{ flex: "1" }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addtodo);
