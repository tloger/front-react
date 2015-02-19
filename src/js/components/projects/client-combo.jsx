/** @jsx React.DOM */
var React = require('react');

var OptionRow = React.createClass({
    render: function() {
        return (
            <option data-index={this.props.index} value={this.props.client.id}>
                {this.props.client.name}
            </option>
        );
    }
});

var ClientCombo = React.createClass({
    optionChanged: function() {
      console.log(this);
    },
    render: function() {
        var rows = [];
        this.props.clients.forEach(function(client, index) {
            rows.push(<OptionRow index={index} client={client} />);
        });
        return (
            <select onChange={this.optionChanged} ref="sel">
              <option>None</option>
              {rows}
            </select>
        );
    }
});

module.exports = ClientCombo;