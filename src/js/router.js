/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');

var App = require('./components/app.jsx');
var Header = require('./components/header.jsx');
var Dashboard = require('./components/dashboard.jsx');
var Login = require('./components/login.jsx');
var About = require('./components/about.jsx');
var Logout = require('./components/logout.jsx');
var Clients = require('./components/clients/clients.jsx');
var Projects = require('./components/projects/projects.jsx');
var Tasks = require('./components/tasks/tasks.jsx');
var TaskLogs = require('./components/tasklogs/tasklogs.jsx');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Header} />
    <Route name="clients" handler={Clients}/>
    <Route name="projects" handler={Projects}/>
    <Route name="tasks" handler={Tasks}/>
    <Route name="tasklogs" handler={TaskLogs}/>
    <Route name="about" handler={About}/>    
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
