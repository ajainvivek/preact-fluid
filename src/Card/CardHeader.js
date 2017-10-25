import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledHeader, StyledTitle, StyledSubTitle } from './styles';

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
		const { style, title, subtitle } = this.props;
		return (
			<StyledHeader style={{ style }}>
				<StyledTitle>{title}</StyledTitle>
				<StyledSubTitle>{subtitle}</StyledSubTitle>
			</StyledHeader>
		);
	}
}

export default CardHeader;