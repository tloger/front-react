/** @jsx React.DOM */
var React = require('react');

var TaskRow = React.createClass({
    propTypes: {
      editClicked: React.PropTypes.func.isRequired,
      deleteClicked: React.PropTypes.func.isRequired,
      task: React.PropTypes.object.isRequired
    },  
    editClicked: function() {
      this.props.editClicked(this.props.task);
    },
    deleteClicked: function() {
      this.props.deleteClicked(this.props.task);
    },  
    render: function() {
        return (
            <tr>
                <td>{this.props.task.name}</td>
                <td>{this.props.task.project.name}</td>
                <td>
                  <button className='btn btn-primary btn-sm' onClick={this.editClicked}>Edit</button>
                  &nbsp;&nbsp;
                  <button className='btn btn-danger btn-sm' onClick={this.deleteClicked}>Delete</button>
                </td>
            </tr>
        );
    }
});

module.exports = TaskRow;