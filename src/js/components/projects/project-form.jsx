/** @jsx React.DOM */
var React = require('react');
var ClientCombo = require('./client-combo.jsx');
var ReactWidgets = require('react-widgets');
var DropdownList = ReactWidgets.DropdownList;
var is = require('is_js');

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
    if(is.string(this.state.project.name)) {
      if(this.selectedClient) {
        this.state.project.clientId = this.selectedClient.id;
      }
      this.props.onSave(this.state.project);  
    } else {

    }
  },
  selectChanged: function(val) {
    this.selectedClient = val;
  },
  cancelClick: function(event) {
    this.setState({project:{name: ''}});
  },
  render: function() {
    var name = this.state.project.name;
    return (
      <div className='row'>
        <div className="col-sm-3 col-sm-offset-4">
          <input type="text" className="form-control" placeholder='Project Name' value={name} onChange={this.handleChange} />
        </div>
        <div className="col-sm-3">
          <DropdownList onSelect={this.selectChanged} data={this.props.clients} valueField='id' textField='name' />
        </div>
        <div className="col-sm-2 pull-right">
          <button className='btn btn-success btn-sm' onClick={this.saveClick}>Save</button>
          <button className='btn btn-danger btn-sm' onClick={this.cancelClick}>Cancel</button>
        </div>
      </div>
    );
  }
});

module.exports = ProjectForm;