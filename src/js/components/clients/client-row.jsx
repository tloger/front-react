/** @jsx React.DOM */
var React = require('react');

var ClientRow = React.createClass({
    propTypes: {
      editClicked: React.PropTypes.func.isRequired,
      deleteClicked: React.PropTypes.func.isRequired,
      client: React.PropTypes.object.isRequired
    },  
    editClicked: function() {
      this.props.editClicked(this.props.client);
    },
    deleteClicked: function() {
      this.props.deleteClicked(this.props.client);
    },
    render: function() {
        return (
            <tr>
                <td>{this.props.client.name}</td>
                <td>
                  <button className='btn btn-primary btn-sm' onClick={this.editClicked}>Edit</button>
                  &nbsp;&nbsp;
                  <button className='btn btn-danger btn-sm' onClick={this.deleteClicked}>Delete</button>
                </td>
            </tr>
        );
    }
});

module.exports = ClientRow;