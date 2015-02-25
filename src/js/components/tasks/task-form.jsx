/** @jsx React.DOM */
var React = require('react');
var ReactWidgets = require('react-widgets');
var DropdownList = React.createFactory(ReactWidgets.DropdownList);
var is = require('is_js');
var _ = require('lodash');

var TaskForm = React.createClass({
  propTypes: {
    onSave: React.PropTypes.func.isRequired,
    selectedProject: React.PropTypes.object
  },
  getInitialState: function() {
    return {task:{}};
  },
  handleChange: function(event) {
    this.state.task.name = event.target.value;
    this.setState({task: this.state.task});
  },
  componentWillUpdate: function(nextProps, nextState) {

    if(this.props.projects == undefined){
      return;
    }

    if(nextState.task.project) {
      this.selectedProject = _.find(this.props.projects, {id:nextState.task.project.id})
    }
    if(this.selectedProject == undefined) {
      this.selectedProject = this.props.projects[0];  
    }
    this.refs.projectCombo.setState({
      value: this.selectedProject
    });

  },
  saveClick: function(event) {
    if(is.string(this.state.task.name)) {
      if(this.selectedProject) {
        this.state.task.projectId = this.selectedProject.id;
      }
      this.props.onSave(this.state.task);
    }
  },
  selectChanged: function(val) {
    this.selectedProject = val;
  },
  cancelClick: function(event) {
    this.setState({task:{}});
    if(this.props.projects == undefined){
      return;
    }
    this.selectedProject = this.props.projects[0];
    this.refs.projectCombo.setState({
      value: this.selectedProject
    });
  },
  render: function() {
    var name = this.state.task.name;
    return (
      <div className='row'>
        <div className="col-sm-3 col-sm-offset-4">
          <input type="text" className="form-control" placeholder='Task Name' value={name} onChange={this.handleChange} />
        </div>
        <div className="col-sm-3">
          <DropdownList onChange={this.selectChanged} data={this.props.projects} valueField='id' textField='name' ref="projectCombo" />
        </div>
        <div className="col-sm-2 pull-right">
          <button className='btn btn-success btn-sm' onClick={this.saveClick}>Save</button>
          <button className='btn btn-danger btn-sm' onClick={this.cancelClick}>Cancel</button>
        </div>
      </div>
    );
  }
});

module.exports = TaskForm;