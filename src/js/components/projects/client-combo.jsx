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
    propTypes: {
      selectedClient: React.PropTypes.object
    },
    getInitialState: function() {
      return {client:{name: ''}};
    },
    optionChanged: function() {
      console.log(this.state);
      console.log(document.getElementById('combo').index);
    },
    render: function() {
        var rows = [];
        this.props.clients.forEach(function(client, index) {
            rows.push(<OptionRow index={index} client={client} />);
        });
        return (
            <select onChange={this.optionChanged} id="combo" ref="sel">
              <option value=''>None</option>
              {rows}
            </select>
        );
    }
});

module.exports = ClientCombo;