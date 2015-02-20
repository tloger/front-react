var Reflux = require('reflux');
var Api = require('../libs/api');
var AppActions = require('../actions/actions.js');

var clientStore = Reflux.createStore({

  init: function() {
    this.listenTo(AppActions.getAllClients, this.getAllClients);
    this.listenTo(AppActions.saveClient, this.saveClient);
    this.listenTo(AppActions.deleteClient, this.deleteClient);
  },

  getInitialState: function() {
    return this.list = [];
  },

  updateList: function(list) {
    this.list = list;
    this.trigger(list);
  },

  getAllClients: function() {
    var self = this;
    Api.doGet('clients').then(function(result) {
      self.updateList(result);
    });
  },

  saveClient: function(client) {
    var self = this;
    Api.doPost('clients', client).then(function(result) {
      self.getAllClients();
    });
  },

  deleteClient: function(client) {
    var self = this;
    Api.doDelete('clients/' + client.id).then(function(result) {
      self.getAllClients();
    });
  }

})

module.exports = clientStore;