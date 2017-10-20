import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledHeader } from './styles';

/**
 * Cards header displays title information
 */
class CardHeader extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	render() {
		const { style, children } = this.props;
		return (
			<StyledHeader style={{ style }}>
				{children}
			</StyledHeader>
		);
	}
}

export default CardHeader;