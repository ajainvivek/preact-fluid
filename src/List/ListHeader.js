import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledHeader, StyledTitle, StyledSubTitle } from './styles';

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
	get content () {
		const { custom, title='', subtitle='' } = this.props;
		
		if (custom && custom.nodeName) { // if node exists
			return (
				custom
			);
		}

		return (
			<div>
				<StyledTitle>{title}</StyledTitle>
				<StyledSubTitle>{subtitle}</StyledSubTitle>
			</div>	
		);
	}
	render() {
		const { style = '', className } = this.props;
		return (
			<StyledHeader
				style={style}
				className={className}
			>
				{this.content}
			</StyledHeader>
		);
	}
}

export default ListHeader;