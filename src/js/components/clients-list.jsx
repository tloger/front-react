/** @jsx React.DOM */
var React = require('react');
var appActions = require('../actions');
var clientStore = require('../stores/client-store');

// var Clients = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

var ProductRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.product.fname}</td>
                <td>{this.props.product.lname}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.products.forEach(function(product) {
            rows.push(<ProductRow product={product} key={product.fname} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Component =
  React.createClass({
      componentDidMount: function() {
          appActions.getAllClients();
          this.unsubscribe = clientStore.listen(this.fetchedClientsList);
      },
      fetchedClientsList: function(data) {
        console.log('fetchedClientsList', data);
        console.log(this.state);
        this.setState({
          products: data
        });
        console.log(this.state);
        //this.state.products = data;
      },
      componentWillUnmount: function() {
          this.unsubscribe();
      },
      getInitialState: function() {
        return {products: []};
      },

      render: function() {
        return (
          <div>
            <ProductTable products={this.state.products}/>
          </div>
        )
    }
  });
module.exports = Component;