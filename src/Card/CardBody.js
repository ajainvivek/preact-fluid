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
	render() {
		const { style, children } = this.props;
		return (
			<StyledBody style={{ style }}>
				{children}
			</StyledBody>
		);
	}
}

export default CardBody;