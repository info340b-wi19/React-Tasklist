import React, { Component } from 'react';

class Task extends Component {
    render() {
        return <li 
        onClick={() => {
            this.props.completeCallback(this.props.data.id)
        }} 
        className={this.props.data.completed ? "font-strike" : ""} >
            {this.props.data.text}
        </li>
    }

}

export default Task;