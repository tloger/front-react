/** @jsx React.DOM */
var React = require('react');
var ClientCombo = require('./client-combo.jsx');

var ProjectForm = React.createClass({

  propTypes: {
    onSave: React.PropTypes.func.isRequired,
    selectedClient: React.PropTypes.object
  },
  getInitialState: function() {
    return {project:{name: ''}};
  },  
  handleChange: function(event) {
    this.state.project.name = event.target.value;
    this.setState({project: this.state.project});
  },
  saveClick: function(event) {
    if(this.state.project.name != '') {
      this.props.onSave(this.state.project);  
    } else {

    }
  },
  cancelClick: function(event) {
    this.setState({project:{name: ''}});
  },
  render: function() {
    var name = this.state.project.name;
    return (
      <div className='form-inline'>
        <input type="text" className="form-control" placeholder='Project Name' value={name} onChange={this.handleChange} />
        &nbsp;&nbsp;
        <ClientCombo selectedClient={this.props.selectedClient} clients={this.props.clients} />
        &nbsp;&nbsp;
        <button className='btn btn-success btn-sm' onClick={this.saveClick}>Save</button>
         &nbsp;&nbsp;
         <button className='btn btn-danger btn-sm' onClick={this.cancelClick}>Cancel</button>        
      </div>
    );
  }
});

module.exports = ProjectForm;