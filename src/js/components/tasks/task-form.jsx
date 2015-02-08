/** @jsx React.DOM */
var React = require('react');

var TaskForm = React.createClass({
  render: function() {
    return (
      <div className='form-inline'>
        <input type="text" className="form-control" placeholder='Task Name' />
        &nbsp;&nbsp;
        <select className='form-control'>
          <option>None</option>
        </select>
        &nbsp;&nbsp;
        <button className='btn btn-success btn-sm'>Save</button>
         &nbsp;&nbsp;
         <button className='btn btn-danger btn-sm'>Cancel</button>        
      </div>
    );
  }
});

module.exports = TaskForm;