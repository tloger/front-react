var Reflux = require('reflux');
var Api = require('../libs/api');
var AppActions = require('../actions/actions.js');

var ProjectStore = Reflux.createStore({

  init: function() {
    this.clients = {}
    this.listenTo(AppActions.getAllProjects, this.getAllProjects)
  },

  getAllProjects: function() {
    var self = this;
    Api.doGet('projects').then(function(result) {
      self.trigger(result);
    });
  }

})

module.exports = ProjectStore;