import React, { Component } from 'preact';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

/**
 * Button indicates possible user actions
 */
class Button extends Component {

	static propTypes = {

		/** If true, the button will use the theme's primary color  */
		primary: PropTypes.bool,

		/** If true, the button will use the theme's secondary color  */
		secondary: PropTypes.bool
	};

	static defaultProps = {
		primary: false,
		secondary: false
	};

	render() {
		return (
			<StyledButton {...this.props}>
				{this.props.children}
			</StyledButton>
		);
	}
}

export default Button;
