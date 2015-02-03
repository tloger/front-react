/** @jsx React.DOM */
var React = require('react');
var auth = require('../libs/auth');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getInitialState: function () {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function () {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render: function () {
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Log out</Link> :
      <Link to="login">Sign in</Link>;
    return (
      <div>
        <ul>
          <li>{loginOrOut}</li>

          <li><Link to="clients">Clients</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="tasks">Tasks</Link></li>
          <li><Link to="tasklogs">TaskLogs</Link></li>

          <li><Link to="about">About</Link></li>
          <li><Link to="header">Header</Link></li>
          <li><Link to="dashboard">Dashboard</Link> (authenticated)</li>
        </ul>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;