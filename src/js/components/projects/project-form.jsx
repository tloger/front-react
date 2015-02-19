/** @jsx React.DOM */
var React = require('react');
var ClientCombo = require('./client-combo.jsx');

var ProjectForm = React.createClass({
  render: function() {
    return (
      <div className='form-inline'>
        <input type="text" className="form-control" placeholder='Project Name' />
        &nbsp;&nbsp;
        <ClientCombo clients={this.props.clients} />
        &nbsp;&nbsp;
        <button className='btn btn-success btn-sm'>Save</button>
         &nbsp;&nbsp;
         <button className='btn btn-danger btn-sm'>Cancel</button>        
      </div>
    );
  }
});

module.exports = ProjectForm;