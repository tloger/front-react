/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/actions.js');
var TaskStore = require('../../stores/task-store');
var ProjectStore = require('../../stores/project-store');
var TaskTable = require('./tasks-table.jsx');
var TaskForm = require('./task-form.jsx');

var Component =
  React.createClass({
      componentDidMount: function() {
          AppActions.getAllTasks();
          AppActions.getAllProjects();          
          this.unsubscribe = TaskStore.listen(this.fetchedTaskList);
          this.unsubscribe2 = ProjectStore.listen(this.fetchedProjectsList);
      },
      fetchedProjectsList: function(result) {
        result.data.unshift({name:'None'});
        this.setState({
          projects: result.data
        });
      },      
      fetchedTaskList: function(result) {
        this.refs.taskForm.cancelClick();
        this.setState({
          tasks: result.data
        });
      },
      componentWillUnmount: function() {
          this.unsubscribe();
      },
      getInitialState: function() {
        return {tasks: []};
      },
      saveTask: function(task) {
        AppActions.saveTask(task);
      },
      editClicked: function(task) {
        this.refs.taskForm.setState({task:task});
      },      
      deleteClicked: function(task) {
        AppActions.deleteTask(task);
      },      
      render: function() {
        return (
            <div>
              <TaskForm ref="taskForm" projects={this.state.projects} onSave={this.saveTask} />
              <br/><br/>
              <TaskTable tasks={this.state.tasks} editClicked={this.editClicked} deleteClicked={this.deleteClicked} />
            </div>
        )
    }
  });

module.exports = Component;