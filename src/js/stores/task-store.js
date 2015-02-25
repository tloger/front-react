var Reflux = require('reflux');
var Api = require('../libs/api');
var AppActions = require('../actions/actions.js');

var TaskStore = Reflux.createStore({

  init: function() {
    this.clients = {}
    this.listenTo(AppActions.getAllTasks, this.getAllTasks)
    this.listenTo(AppActions.saveTask, this.saveTask)
    this.listenTo(AppActions.deleteTask, this.deleteTask)
  },

  getInitialState: function() {
    return this.list = [];
  },

  saveTask: function(project) {
    var self = this;
    Api.doPost('tasks', project).then(function(result) {
      self.getAllTasks();
    });
  },

  updateList: function(list) {
    this.list = list;
    this.trigger(list);
  },

  getAllTasks: function() {
    var self = this;
    Api.doGet('tasks').then(function(result) {
      self.updateList(result);
    });
  },

  deleteTask: function(project) {
    var self = this;
    Api.doDelete('tasks/' + project.id).then(function(result) {
      self.getAllTasks();
    });
  }

})
module.exports = TaskStore;