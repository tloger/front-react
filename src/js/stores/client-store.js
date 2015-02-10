var Reflux = require('reflux');
var api = require('../libs/api');
var appActions = require('../actions');

var clientStore = Reflux.createStore({

  init: function() {
    this.listenTo(appActions.getAllClients, this.getAllClients)
    this.listenTo(appActions.saveClient, this.saveClient)
  },

  getAllClients: function() {
    var self = this;
    api.doGet('clients').then(function(result) {
      self.trigger(result);
      console.log(self);
    });
  },

  saveClient: function(client) {
    var self = this;
    api.doPost('clients', client).then(function(result) {
      self.trigger(result);
    });    
  }

})

module.exports = clientStore;