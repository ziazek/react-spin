'use strict';

var React = require('react');
var Spinner = require('spin.js');

var ReactSpinner = React.createClass({
  displayName: 'ReactSpinner',

  propTypes: {
    config: React.PropTypes.object,
    stopped: React.PropTypes.bool,
    style: React.PropTypes.object,
    spinner: React.PropTypes.object
  },

  componentDidMount: function componentDidMount() {
    this.spinner = new Spinner(this.props.config);
    this.spinner.spin(React.findDOMNode(this.refs.container));
  },

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {

    if (this.props.stopped) {
      return;
    }

    if (newProps.stopped) {
      this.spinner.stop();
    } else {
      this.spinner.spin(React.findDOMNode(this.refs.container));
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.spinner.stop();
  },

  render: function render() {
    return React.createElement('div', { ref: 'container', style: this.props.style });
  }
});

module.exports = ReactSpinner;