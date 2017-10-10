import React, { Component } from 'preact';
import PropTypes from 'prop-types';

import {StyledHeader, StyledSection} from './styles';
import {Link} from '../index';

/**
 * A toolbar that’s used for branding, navigation, search, and actions.
 *
 * @example ./../../docs/components/AppBar.md
 */
class AppBar extends Component {
	render() {
		const {
			title = '',
			leftElement = '',
			rightElement = ''
		} = this.props;

		return (
			<StyledHeader {...this.props}>
				<StyledSection>
					<Link style={this.props.titleStyle}>{title}</Link>
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
