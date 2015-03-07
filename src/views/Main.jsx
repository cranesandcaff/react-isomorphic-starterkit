const React = require('react');
const Superagent = require('superagent');
const ContextHelper = require('../helpers/ContextHelper');

/**
 * Main React application entry-point for both the server and client.
 *
 * @module Main
 */
const Main = React.createClass({
  render() {
    return <div>
      <h1>Hello World.</h1>
    </div>;
  }
});

export default Main;
