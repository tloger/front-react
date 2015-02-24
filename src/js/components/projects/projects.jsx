/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/actions.js');
var ProjectStore = require('../../stores/project-store');
var ClientStore = require('../../stores/client-store');
var ProjectsTable = require('./projects-table.jsx');
var ProjectForm = require('./project-form.jsx');

var Component =
  React.createClass({
      componentDidMount: function() {
          AppActions.getAllProjects();
          AppActions.getAllClients();
          this.unsubscribe = ProjectStore.listen(this.fetchedProjectsList);
          this.unsubscribe2 = ClientStore.listen(this.fetchedClientsList);
      },
      fetchedClientsList: function(result) {
        result.data.unshift({name:'None'});
        this.setState({
          clients: result.data
        });
      },
      saveProject: function(project) {
        AppActions.saveProject(project);
      },      
      fetchedProjectsList: function(result) {
        this.setState({
          projects: result.data
        });
        //this.refs.projectForm.setState({project:{}});
        this.refs.projectForm.cancelClick();
      },
      componentWillUnmount: function() {
          this.unsubscribe();
          this.unsubscribe2();
      },
      getInitialState: function() {
        return {projects: [], clients: []};
      },
      editClicked: function(project) {
        this.refs.projectForm.setState({project:project});
      },
      deleteClicked: function(project) {
        AppActions.deleteProject(project);
      },
      render: function() {
        return (
            <div>
              <ProjectForm ref="projectForm" clients={this.state.clients} onSave={this.saveProject} />
              <br/><br/>
              <ProjectsTable editClicked={this.editClicked} deleteClicked={this.deleteClicked} projects={this.state.projects} />
            </div>
        )
    }
  });

module.exports = Component;