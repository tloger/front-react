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
        <nav className='navbar navbar-inverse'>
          <div className="navbar-header">
            <a className="navbar-brand" href="#">TLoger</a>
          </div>        
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li><Link to="clients">Clients</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="tasks">Tasks</Link></li>
              <li><Link to="tasklogs">TaskLogs</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </nav>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;