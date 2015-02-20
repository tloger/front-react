/** @jsx React.DOM */
var React = require('react');

var ProjectRow = React.createClass({
    propTypes: {
      editClicked: React.PropTypes.func.isRequired,
      deleteClicked: React.PropTypes.func.isRequired,
      project: React.PropTypes.object.isRequired
    },  
    editClicked: function() {
      this.props.editClicked(this.props.project);
    },
    deleteClicked: function() {
      this.props.deleteClicked(this.props.project);
    },  
    render: function() {
        return (
            <tr>
                <td>{this.props.project.name}</td>
                <td>{this.props.project.clientId}</td>
                <td>
                  <button onClick={this.editClicked} className='btn btn-primary btn-sm'>Edit</button>
                  &nbsp;&nbsp;
                  <button onClick={this.deleteClicked} className='btn btn-danger btn-sm'>Delete</button>
                </td>
            </tr>
        );
    }
});

module.exports = ProjectRow;