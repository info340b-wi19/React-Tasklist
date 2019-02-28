import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtedText: '',
      tasks: [],
    }
  }

  //addTask() { }  why doesn't it work??
  addTask = () => {
    //easiest way for you guys to modify an array in state
    //spread operator / callback function is a cleaner way to update an array
    //but not really worth the loss in readability at your level
    let text = this.state.inputtedText;
    let newTasks = this.state.tasks;
    newTasks.push({ id: this.state.tasks.length, text : text, completed : false});
    this.setState({ tasks : newTasks });
  }

  completeTask = (id) => {
    console.log(id);
    let newTasks = this.state.tasks;
    newTasks[id].completed = !newTasks[id].completed;
    this.setState({ tasks: newTasks });
  }

  render() {
    console.log(this.state.inputtedText);
    console.log(this.state.tasks);
    return (
      <div className="container">
        <h1>To Do List</h1>

        <p id="alert-done" className="alert d-none">Alert!</p>  
        
        <p className="lead">Things I have to do:</p>
        <TaskList tasks={this.state.tasks} completeCallback={this.completeTask} />
      
        <div className="form">
          <div className="form-group">
            <input type="text" id="task-input" className="form-control" placeholder="What else do you have to do?" onChange={(evt) => this.setState({ inputtedText : evt.target.value })} />
          </div>
          <div className="form-group">
            <button type="button" id="add-task" className="btn btn-primary" onClick={this.addTask}>Add task to list</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
