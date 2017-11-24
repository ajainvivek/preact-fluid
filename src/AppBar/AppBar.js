import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import defaultTheme from '../theme';

import { StyledHeader, StyledSection } from './styles';
import { Link } from '../index';

/**
 * A toolbar that’s used for branding, navigation, search, and actions.
 *
 * @example ./../../docs/components/AppBar.md
 */
class AppBar extends Component {
	static contextTypes = {
		theme: PropTypes.object
	};

	render() {
		const {
			title = '',
			leftElement = '',
			rightElement = ''
		} = this.props;

		const { theme } = this.context;

		return (
			<StyledHeader {...this.props} theme={theme}>
				<StyledSection>
					<Link style={this.props.titleStyle} theme={theme}>{title}</Link>
					{leftElement}
				</StyledSection>
				<StyledSection>
					{rightElement}
				</StyledSection>
			</StyledHeader>
		);
	}
}

AppBar.propTypes = {
	title: PropTypes.string,
	left: PropTypes.array,
	titleStyle: PropTypes.object
};
AppBar.defaultProps = {};

export default AppBar;
