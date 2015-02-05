/** @jsx React.DOM */
var React = require('react');
var appActions = require('../actions');
var clientStore = require('../stores/client-store');
var Reactable = require('Reactable');
var Table = Reactable.Table;

// var ProductRow = React.createClass({
//     render: function() {
//         return (
//             <tr>
//                 <td>{this.props.product.fname}</td>
//                 <td>{this.props.product.lname}</td>
//             </tr>
//         );
//     }
// });

// var ProductTable = React.createClass({
//     render: function() {
//         var rows = [];
//         this.props.products.forEach(function(product) {
//             rows.push(<ProductRow product={product} key={product.fname} />);
//         });
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// });

var Client = React.createClass({
  render: function() {
    return (
      <input type="text" />
      <button />
      // <button>Save</ button>
      // <button>Cancel</ button>
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
              <Table className="table" data={this.state.clients} />
            </div>
        )
    }
  });
module.exports = Component;