var Reflux = require('reflux');
var Api = require('../libs/api');
var AppActions = require('../actions/actions.js');

var TaskStore = Reflux.createStore({

  init: function() {
    this.clients = {}
    this.listenTo(AppActions.getAllTasks, this.getAllTasks)
  },

  getAllTasks: function() {
    var self = this;
    Api.doGet('tasks').then(function(result) {
      self.trigger(result);
    });
  }

})

module.exports = TaskStore;