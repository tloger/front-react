/** @jsx React.DOM */
var React = require('react');
var ProjectRow = require('./project-row.jsx');

var ProjectsTable = React.createClass({
    propTypes: {
      editClicked: React.PropTypes.func.isRequired,
      deleteClicked: React.PropTypes.func.isRequired
    },  
    editClicked: function(project) {
      this.props.editClicked(project);
    },
    deleteClicked: function(project) {
      this.props.deleteClicked(project);
    },      
    render: function() {
        var rows = [];
        var self = this;
        this.props.projects.forEach(function(project) {
            rows.push(<ProjectRow editClicked={self.editClicked} deleteClicked={self.deleteClicked} project={project} key={project.id} />);
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