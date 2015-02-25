/** @jsx React.DOM */
var React = require('react');
var TaskRow = React.createFactory(require('./task-row.jsx'));

var TaskTable = React.createClass({
    propTypes: {
      editClicked: React.PropTypes.func.isRequired,
      deleteClicked: React.PropTypes.func.isRequired
    },  
    editClicked: function(task) {
      this.props.editClicked(task);
    },
    deleteClicked: function(task) {
      this.props.deleteClicked(task);
    },    
    render: function() {
        var rows = [];
        var self = this;
        this.props.tasks.forEach(function(task) {
            rows.push(<TaskRow task={task} key={task.name} editClicked={self.editClicked} deleteClicked={self.deleteClicked} />);
        });
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Project</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

module.exports = TaskTable;