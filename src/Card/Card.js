import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledCard } from './styles';

/**
 * Cards are content containers to display information
 *
 * @example ./../../docs/components/Card.md
 */
class Card extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.string,

		/**
		 * Gets called when the user clicks on the button
		 *
		 * @param {SyntheticEvent} event The react `SyntheticEvent`
		 */
		onClick: PropTypes.func
	};
	render() {
		const { style, children, className } = this.props;
		return (
			<StyledCard style={style} className={className}>
				{children}
			</StyledCard>
		);
	}
}

export default Card;