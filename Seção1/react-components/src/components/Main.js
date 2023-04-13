import React, { Component } from 'react';

import './Main.css';

import Form from './Form';
import Tasks from './Tasks';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({
      tasks: tasks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        newTask: '',
        tasks: [...newTasks, newTask],
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        newTask: '',
        tasks: [...newTasks],
        index: -1,
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleEdit = (event, index) => {
    const { tasks } = this.state;

    this.setState({
      newTask: tasks[index],
      index: index,
    });
  };

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          newTask={newTask}
        />
        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </div>
    );
  }
}
