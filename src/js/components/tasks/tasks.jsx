/** @jsx React.DOM */
var React = require('react');
var appActions = require('../../actions/actions.js');
var TaskStore = require('../../stores/task-store');
var TaskTable = require('./tasks-table.jsx');
var TaskForm = require('./task-form.jsx');

var Component =
  React.createClass({
      componentDidMount: function() {
          appActions.getAllTasks();
          this.unsubscribe = TaskStore.listen(this.fetchedTaskList);
      },
      fetchedTaskList: function(result) {
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

      render: function() {
        return (
            <div>
              <TaskForm />
              <br/><br/>
              <TaskTable tasks={this.state.tasks} />
            </div>
        )
    }
  });

module.exports = Component;