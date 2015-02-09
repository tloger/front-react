/** @jsx React.DOM */
var React = require('react');

var Client = React.createClass({

  propTypes: {
    onSave: React.PropTypes.func.isRequired,
    client: React.PropTypes.object
  },
  getInitialState: function() {
    var client = {client:{name: ''}};
    if(this.props.client) {
      client = this.props.client;
    }
    return client;
  },
  handleChange: function(event) {
    this.setState({client:{name: event.target.value}});
  },
  saveClick: function(event) {
    this.props.onSave(this.state.client);
  },
  cancelClick: function(event) {
    this.setState({client:{name: ''}});
  },
  render: function() {
    var name = this.state.client.name;
    return (
      <div className='form-inline'>
        <input type="text" className="form-control" placeholder='Client Name' value={name} onChange={this.handleChange} />
        <button className='btn btn-success btn-sm' onClick={this.saveClick}>Save</button>
         &nbsp;&nbsp;
         <button className='btn btn-danger btn-sm' onClick={this.cancelClick}>Cancel</button>        
      </div>
    );
  }
});

module.exports = Client;