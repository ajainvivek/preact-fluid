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
	get left () {
		const { left } = this.props;

		if (left && left.nodeName) { // if node exists
			return (
				<div className="list-item-left">{left}</div>
			);
		}

		return '';
	}

	get right () {
		const { right } = this.props;

		if (right && right.nodeName) { // if node exists
			return (
				<div className="list-item-right">{left}</div>
			);
		}

		return '';
	}

	render() {
		const { style = '', className, children, active } = this.props;
		return (
			<StyledItem
				style={style}
				className={className}
				active={active}
			>
				{this.left}
				{children}
				{this.right}
			</StyledItem>
		);
	}
}

export default ListItem;