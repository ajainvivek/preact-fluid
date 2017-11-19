import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledHeader } from './styles';

/**
 * List header
 */
class ListHeader extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	render() {
		const { style = '', className } = this.props;
		return (
			<StyledHeader
				style={style}
				className={className}
			>
				ListHeader
			</StyledHeader>
		);
	}
}

export default ListHeader;