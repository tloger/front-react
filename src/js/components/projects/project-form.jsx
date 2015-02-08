/** @jsx React.DOM */
var React = require('react');

var ProjectForm = React.createClass({
  render: function() {
    return (
      <div className='form-inline'>
        <input type="text" className="form-control" placeholder='Project Name' />
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

module.exports = ProjectForm;