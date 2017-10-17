import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledHeader } from './styles';

/**
 * Cards are content containers to display information
 *
 * @example ./../../docs/components/Card.md
 */
class CardHeader extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	render() {
		const {style, children} = this.props;
		return (
			<StyledHeader style={{style}}>
				{children}
			</StyledHeader>
		);
	}
}

export default CardHeader;