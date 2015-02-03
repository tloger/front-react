/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');

var App = require('./components/app.jsx');
var Header = require('./components/header.jsx');
var Dashboard = require('./components/dashboard.jsx');
var Login = require('./components/login.jsx');
var About = require('./components/about.jsx');
var Logout = require('./components/logout.jsx');
var ClientsList = require('./components/clients-list.jsx');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

//var api = require('./libs/api');
//api.doGet('https://gist.githubusercontent.com/sumitarora/738f781675b961d77d71/raw/6b994a695fd235115a6039ecacfb03e5ff4112d5/gistfile1.json');

var routes = (
  <Route handler={App}>
    <Route name="header" handler={Header}/>
    
    <Route name="clients" handler={ClientsList}/>
    <Route name="projects" handler={Header}/>
    <Route name="tasks" handler={Header}/>
    <Route name="tasklogs" handler={Header}/>

    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
