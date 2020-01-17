import React, { Component } from 'react';
import AddNewTask from './addNewTask';
import CheckBox from './checkBox';
import DeleteButton from './deleteButton';
import Tasks from './tasks';

class Todos extends Component {
  state = {
    tasks: []
  };

  handleAdd = e => {
    e.preventDefault();
    const newTask = {
      id: Date(),
      isDone: false,
      name: this.state.newTaskValue
    };
    const tasks = [...this.state.tasks];
    tasks.push(newTask);
    this.setState({ tasks, newTaskValue: '' });
  };

  handleCheck = task => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...task };
    tasks[index].isDone = !tasks[index].isDone;
    this.setState({ tasks });
  };

  handleDelete = task => {
    const tasks = this.state.tasks.filter(t => t.id !== task.id);
    this.setState({ tasks });
  };

  handleChange = value => {
    this.setState({ newTaskValue: value });
  };

  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-4">
            <AddNewTask
              onAdd={this.handleAdd}
              onChange={this.handleChange}
              currentValue={this.state.newTaskValue}
            />
          </div>
        </div>
        <div className="row mt-5 table-responsive">
          {!this.state.tasks.length && 'There are no tasks'}
          <Tasks
            tasks={this.state.tasks}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
          />
        </div>
      </main>
    );
  }
}

export default Todos;
