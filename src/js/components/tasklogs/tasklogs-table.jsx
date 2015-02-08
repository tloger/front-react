/** @jsx React.DOM */
var React = require('react');
var TaskLogRow = require('./tasklog-row.jsx');

var TaskLogTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.tasks.forEach(function(tasklog) {
            rows.push(<TaskLogRow tasklog={tasklog} key={tasklog.name} />);
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

module.exports = TaskLogTable;