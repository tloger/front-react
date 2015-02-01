
/** @jsx React.DOM */
var APP = require('./components/app.jsx');
var Header = require('./components/header.jsx');
var React = require('react');

React.renderComponent( 
  <Header />,
  document.getElementById('main'));
