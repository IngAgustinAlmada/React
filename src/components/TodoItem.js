import React, { Component } from 'react';
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor:"lightgrey",
            padding:"10px",
            borderBottom: "1px black dotted",
            textDecoration: this.props.todo.completed ?
                "line-through" : "none"
            }
        }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {" "}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
}

const btnStyle = {
    background: "red",
    color: "white",
    border: "1px solid white",
    padding: "5px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    float: "right",
};
export default TodoItem
