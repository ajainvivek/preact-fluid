import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledBody } from './styles';

/**
 * Cards header displays title information
 */
class CardBody extends Component {
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
		const { style, children } = this.props;
		const { theme } = this.context;
		return (
			<StyledBody style={{ style }} theme={theme}>
				{children}
			</StyledBody>
		);
	}
}

export default CardBody;