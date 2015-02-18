/** @jsx React.DOM */
var React = require('react');
var ClientRow = require('./client-row.jsx');

var ClientsTable = React.createClass({
    propTypes: {
      editClicked: React.PropTypes.func.isRequired,
      deleteClicked: React.PropTypes.func.isRequired,
    },      
    editClicked: function(client) {
      this.props.editClicked(client);
    },
    deleteClicked: function(client) {
      this.props.deleteClicked(client);
    },
    render: function() {
        var rows = [];
        var self = this;

        this.props.clients.forEach(function(client) {
            rows.push(<ClientRow editClicked={self.editClicked} deleteClicked={self.deleteClicked} client={client} key={client._id} />);
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

module.exports = ClientsTable;