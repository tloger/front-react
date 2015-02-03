var Reflux = require('reflux');
var api = require('../libs/api');
var appActions = require('../actions');

var clientStore = Reflux.createStore({

  init: function() {
    this.clients = {}
    this.listenTo(appActions.getAllClients, this.getAllClients)
  },

  getAllClients: function() {
    var self = this;
    api.doGet('projects').then(function(result){
      self.trigger(result);
    });
  }

})

module.exports = clientStore;