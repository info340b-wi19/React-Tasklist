import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {

    render() {
        //return <div>Hi!</div>
        let tasksJSX = this.props.tasks.map((task) => {
            {/* We only need to add a key prop for React, not for us */}
            return <Task data={task} completeCallback={this.props.completeCallback} key={task.id} />
        });

        return (
        <ol>
            {tasksJSX}
            {/*<li>Task 1!</li>
            <li>Task 2!</li>*/}
        </ol>
        );

    }

}

export default TaskList;