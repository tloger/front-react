var Reflux = require('reflux');
var Api = require('../libs/api');
var AppActions = require('../actions/actions.js');

var ProjectStore = Reflux.createStore({

  init: function() {
    this.clients = {}
    this.listenTo(AppActions.getAllProjects, this.getAllProjects)
    this.listenTo(AppActions.saveProject, this.saveProject)
    this.listenTo(AppActions.deleteProject, this.deleteProject)
  },

  getInitialState: function() {
    return this.list = [];
  },

  saveProject: function(project) {
    var self = this;
    Api.doPost('projects', project).then(function(result) {
      self.getAllProjects();
    });
  },

  updateList: function(list) {
    this.list = list;
    this.trigger(list);
  },

  getAllProjects: function() {
    var self = this;
    Api.doGet('projects').then(function(result) {
      self.updateList(result);
    });
  },

  deleteProject: function(project) {
    var self = this;
    Api.doDelete('projects/' + project.id).then(function(result) {
      self.getAllProjects();
    });
  }

})

module.exports = ProjectStore;