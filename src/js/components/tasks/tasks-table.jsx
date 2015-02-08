/** @jsx React.DOM */
var React = require('react');
var TaskRow = require('./task-row.jsx');

var TaskTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.tasks.forEach(function(task) {
            rows.push(<TaskRow task={task} key={task.name} />);
        });
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

module.exports = TaskTable;