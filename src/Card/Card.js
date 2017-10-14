import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledLink } from './styles';

/**
 * Provides declarative, accessible navigation around your application.
 *
 * @example ./../../docs/components/Link.md
 */
class Card extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.object,

		/**
		 * Link type
		 */
		type: PropTypes.oneOf(['default']),

		/**
		 * Gets called when the user clicks on the button
		 *
		 * @param {SyntheticEvent} event The react `SyntheticEvent`
		 */
		onClick: PropTypes.func
	};
	render() {
		return (
			<div></div>
		);
	}
}

export default Card;