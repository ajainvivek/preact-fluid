import React, { Component } from 'preact';
import PropTypes from 'prop-types';

import { StyledButton, AnimeDiv } from './styles';
import Anime from './../Anime';

/**
 * Button indicates possible user actions
 */
class Button extends Component {

	static propTypes = {

		/**
		 * Button label.
		 */
		children: PropTypes.string.isRequired,

		/**
		 * The size of the Button
		 */
		size: PropTypes.oneOf(['small', 'normal', 'large']),

		/**
		 * If true, the button will use the theme's primary color
		 */
		primary: PropTypes.bool,

		/**
		 * If true, the button will use the theme's secondary color
		 */
		secondary: PropTypes.bool,

		/**
		 * Gets called when the user clicks on the button
		 *
		 * @param {SyntheticEvent} event The react `SyntheticEvent`
		 */
		onClick: PropTypes.func
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
