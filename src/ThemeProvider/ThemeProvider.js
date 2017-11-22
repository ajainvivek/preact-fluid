import React, { Component } from 'preact';
import PropTypes from 'prop-types';

/**
 * Custom theme provider for application 
 */
class ThemeProvider extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    }
    getChildContext () {
      let { children, ...context } = this.props;
      return context;
    }
    render ({ children }) {
      return children && children[0] || null
    }
  }

  export default ThemeProvider;