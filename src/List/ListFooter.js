import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledFooter } from './styles';

/**
 * List Footer - https://dribbble.com/shots/3935136-MrWhite-UI-Kit-Dropdown-s/attachments/897751
 */
class ListFooter extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	render() {
		const { style = '', className } = this.props;
		return (
			<StyledFooter
				style={style}
				className={className}
			>
				ListFooter
			</StyledFooter>
		);
	}
}

export default ListFooter;