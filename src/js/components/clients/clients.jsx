/** @jsx React.DOM */
var React = require('react');
var appActions = require('../../actions');
var ClientStore = require('../../stores/client-store');
var ClientsTable = require('./clients-table.jsx');
var ClientForm = require('./client-form.jsx');

var Component =
  React.createClass({
      saveClient: function(client) {
        console.log(client);
        appActions.saveClient(client);
        //this.unsubscribe2 = ClientStore.listen(this.saveClientResponse);
      },
      componentDidMount: function() {
          appActions.getAllClients();
          this.unsubscribe = ClientStore.listen(this.fetchedClientsList);
      },
      saveClientResponse: function(result) {
        //this.unsubscribe2();
        appActions.getAllClients();
      },
      fetchedClientsList: function(result) {
        this.setState({
          clients: result.data
        });
      },
      componentWillUnmount: function() {
          this.unsubscribe();          
      },
      getInitialState: function() {
        return {clients: []};
      },
      editClicked: function(client) {
        //console.log(this.refs.clientForm);
        this.refs.clientForm.setState({client: client});
      },
      deleteClicked: function(client) {
        appActions.deleteClient(client);
      },

      render: function() {
        return (
            <div>
              <ClientForm onSave={this.saveClient} ref="clientForm"/>
              <br/><br/>
              <ClientsTable editClicked={this.editClicked} deleteClicked={this.deleteClicked} clients={this.state.clients} />
            </div>
        )
    }
  });

module.exports = Component;