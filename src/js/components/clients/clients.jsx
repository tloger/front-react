/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/actions.js');
var ClientStore = require('../../stores/client-store');
var ClientsTable = React.createFactory(require('./clients-table.jsx'));
var ClientForm = React.createFactory(require('./client-form.jsx'));

var Component =
  React.createClass({
      saveClient: function(client) {
        AppActions.saveClient(client);
      },
      componentDidMount: function() {
        AppActions.getAllClients();
        this.unsubscribe = ClientStore.listen(this.fetchedClientsList);
      },
      fetchedClientsList: function(result) {
        this.refs.clientForm.setState({client: {}});
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
        this.refs.clientForm.setState({client: client});
      },
      deleteClicked: function(client) {
        AppActions.deleteClient(client);
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