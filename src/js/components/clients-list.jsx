/** @jsx React.DOM */
var React = require('react');
var appActions = require('../actions');
var clientStore = require('../stores/client-store');
var Reactable = require('Reactable');
var Table = Reactable.Table;

var ClientRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.client.name}</td>
                <td>
                  <button className='btn btn-primary btn-sm'>Edit</button>
                  &nbsp;&nbsp;
                  <button className='btn btn-danger btn-sm'>Delete</button>
                </td>
            </tr>
        );
    }
});

var ClientsTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.clients.forEach(function(client) {
            rows.push(<ClientRow client={client} key={client.name} />);
        });
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Client = React.createClass({
  render: function() {
    return (
      <div className='form-inline'>
        <input type="text" className="form-control" placeholder='Client Name' />
        <button className='btn btn-success btn-sm'>Save</button>
         &nbsp;&nbsp;
         <button className='btn btn-danger btn-sm'>Cancel</button>        
      </div>
    );
  }
})

var Component =
  React.createClass({
      componentDidMount: function() {
          appActions.getAllClients();
          this.unsubscribe = clientStore.listen(this.fetchedClientsList);
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
              <Client />
              <br/><br/>
              <ClientsTable clients={this.state.clients} />
            </div>
        )
    }
  });
module.exports = Component;