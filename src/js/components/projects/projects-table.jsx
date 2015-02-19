/** @jsx React.DOM */
var React = require('react');
var ProjectRow = require('./project-row.jsx');

var ProjectsTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.projects.forEach(function(project) {
            rows.push(<ProjectRow project={project} key={project.name} />);
        });
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Client</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

module.exports = ProjectsTable;