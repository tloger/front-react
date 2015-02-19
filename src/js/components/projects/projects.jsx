/** @jsx React.DOM */
var React = require('react');
var appActions = require('../../actions/actions.js');
var ProjectStore = require('../../stores/project-store');
var ClientStore = require('../../stores/client-store');
var ProjectsTable = require('./projects-table.jsx');
var ProjectForm = require('./project-form.jsx');

var Component =
  React.createClass({
      componentDidMount: function() {
          appActions.getAllProjects();
          appActions.getAllClients();
          this.unsubscribe = ProjectStore.listen(this.fetchedProjectsList);
          this.unsubscribe2 = ClientStore.listen(this.fetchedClientsList);
      },
      fetchedClientsList: function(result) {
        console.log(result);
        this.setState({
          clients: result.data
        });
      },      
      fetchedProjectsList: function(result) {
        this.setState({
          projects: result.data
        });
      },
      componentWillUnmount: function() {
          this.unsubscribe();
          this.unsubscribe2();
      },
      getInitialState: function() {
        return {projects: [], clients: []};
      },

      render: function() {
        return (
            <div>
              <ProjectForm clients={this.state.clients} />
              <br/><br/>
              <ProjectsTable projects={this.state.projects} />
            </div>
        )
    }
  });

module.exports = Component;