import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledItem } from './styles';

/**
 * List Item
 */
class ListItem extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	render() {
		const { style = '', className } = this.props;
		return (
			<StyledItem
				style={style}
				className={className}
			>
				ListItem
			</StyledItem>
		);
	}
}

export default ListItem;