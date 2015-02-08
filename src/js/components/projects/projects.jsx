/** @jsx React.DOM */
var React = require('react');
var appActions = require('../../actions');
var ProjectStore = require('../../stores/project-store');
var ProjectsTable = require('./projects-table.jsx');
var ProjectForm = require('./project-form.jsx');

var Component =
  React.createClass({
      componentDidMount: function() {
          appActions.getAllProjects();
          this.unsubscribe = ProjectStore.listen(this.fetchedProjectsList);
      },
      fetchedProjectsList: function(result) {
        this.setState({
          projects: result.data
        });
      },
      componentWillUnmount: function() {
          this.unsubscribe();
      },
      getInitialState: function() {
        return {projects: []};
      },

      render: function() {
        return (
            <div>
              <ProjectForm />
              <br/><br/>
              <ProjectsTable projects={this.state.projects} />
            </div>
        )
    }
  });

module.exports = Component;