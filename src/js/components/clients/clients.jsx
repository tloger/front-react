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
      },
      componentDidMount: function() {
          appActions.getAllClients();
          this.unsubscribe = ClientStore.listen(this.fetchedClientsList);
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

      render: function() {
        return (
            <div>
              <ClientForm onSave={this.saveClient}/>
              <br/><br/>
              <ClientsTable clients={this.state.clients} />
            </div>
        )
    }
  });

module.exports = Component;