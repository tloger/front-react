/** @jsx React.DOM */
var React = require('react');

var Client = React.createClass({

  propTypes: {
    onSave: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {client:{name: ''}};
  },
  handleChange: function(event) {
    this.state.client.name = event.target.value;
    this.setState({client: this.state.client});
  },
  saveClick: function(event) {
    if(this.state.client.name != '') {
      this.props.onSave(this.state.client);  
    } else {

    }
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