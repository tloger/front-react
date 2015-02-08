/** @jsx React.DOM */
var React = require('react');
var ClientRow = require('./client-row.jsx');

var ClientsTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.clients.forEach(function(client) {
            rows.push(<ClientRow client={client} key={client.name} />);
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