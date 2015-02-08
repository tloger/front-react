/** @jsx React.DOM */
var React = require('react');
var appActions = require('../../actions');
var TaskLogStore = require('../../stores/tasklog-store');
var TaskLogsTable = require('./tasklogs-table.jsx');

var Component =
  React.createClass({
      componentDidMount: function() {
          appActions.getAllTasks();
          this.unsubscribe = TaskLogStore.listen(this.fetchedTaskList);
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
              <TaskLogsTable tasks={this.state.tasks} />
            </div>
        )
    }
  });

module.exports = Component;