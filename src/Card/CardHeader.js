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

	static contextTypes = {
		theme: PropTypes.object
	};

	render() {
		const { style, title, subtitle } = this.props;
		const { theme } = this.context;
		return (
			<StyledHeader style={{ style }} theme={theme}>
				<StyledTitle theme={theme}>{title}</StyledTitle>
				<StyledSubTitle theme={theme}>{subtitle}</StyledSubTitle>
			</StyledHeader>
		);
	}
}

export default CardHeader;