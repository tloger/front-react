/** @jsx React.DOM */
var React = require('react');

var TaskRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.task.name}</td>
                <td>
                  <button className='btn btn-primary btn-sm'>Edit</button>
                  &nbsp;&nbsp;
                  <button className='btn btn-danger btn-sm'>Delete</button>
                </td>
            </tr>
        );
    }
});

module.exports = TaskRow;