import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledSection } from './styles';

/**
 * List Section
 */
class ListSection extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	render() {
		const { style = '', className, children } = this.props;
		return (
			<StyledSection
				style={style}
				className={className}
			>
				{children}
			</StyledSection>
		);
	}
}

export default ListSection;