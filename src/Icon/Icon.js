import React, { Component } from 'preact';
import PropTypes from 'prop-types';

import { StyledIcon } from './styles';

/**
 * Button indicates possible user actions
 */
class Button extends Component {

	static propTypes = {
		/**
		 * The size of the Button
		 */
		size: PropTypes.oneOf(['small', 'normal', 'large']),

		/**
		 * Gets called when the user clicks on the button
		 *
		 * @param {SyntheticEvent} event The react `SyntheticEvent`
		 */
		onClick: PropTypes.func
	};

	static defaultProps = {
		clicked: false
	};

	render() {
		return (
			<StyledIcon {...this.props}>
				{}
			</StyledIcon>
		);
	}
}

export default Button;
