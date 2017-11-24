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

	static contextTypes = {
		theme: PropTypes.object
	};

	get content () {
		const { custom, title='', subtitle='' } = this.props;
		const { theme } = this.context;
		
		if (custom && custom.nodeName) { // if node exists
			return (
				custom
			);
		}

		return (
			<div>
				<StyledTitle theme={theme}>{title}</StyledTitle>
				<StyledSubTitle theme={theme}>{subtitle}</StyledSubTitle>
			</div>	
		);
	}

	render() {
		const { style = '', className } = this.props;
		const { theme } = this.context;

		return (
			<StyledHeader
				style={style}
				className={className}
				theme={theme}
			>
				{this.content}
			</StyledHeader>
		);
	}
}

export default ListHeader;