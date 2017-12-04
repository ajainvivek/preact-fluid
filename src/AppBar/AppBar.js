import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import defaultTheme from '../theme';

import { StyledHeader, StyledSection, StyledLogo } from './styles';
import { Link } from '../index';

/**
 * A toolbar that’s used for branding, navigation, search, and actions.
 *
 * @example ./../../docs/components/AppBar.md
 */
class AppBar extends Component {
	static propTypes = {
		/**
		 * title
		 */
		title: PropTypes.string,

		/**
		 * title style
		 */
		titleStyle: PropTypes.object,

		/**
		 * logo image src
		 */
		logo: PropTypes.string,

		/**
		 * logo style
		 */
		logoStyle: PropTypes.object,

		/**
		 * components on the left side of appbar
		 */
		leftSection: PropTypes.element,

		/**
		 * components on the right side of appbar
		 */
		rightSection: PropTypes.element
	};

	static defaultProps = {
		title: '',
		titleStyle: {},
		logo: null,
		logoStyle: {},
		leftSection: '',
		rightSection: ''
	};

	static contextTypes = {
		theme: PropTypes.object
	};

	renderLogo() {
		const {
			logo='',
			logoStyle={}
		} = this.props;

		if (logo) {
			return <StyledLogo src={logo} style={logoStyle} />
		}

		return '';
	}

	render() {
		const {
			title,
			titleStyle,
			logo,
			leftSection,
			rightSection
		} = this.props;

		const { theme } = this.context;

		return (
			<StyledHeader {...this.props} theme={theme}>
				<StyledSection>
					<Link style={titleStyle} theme={theme} className="header-link">
						{this.renderLogo()}
						{title}
					</Link>
					{leftSection}
				</StyledSection>
				<StyledSection>
					{rightSection}
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
