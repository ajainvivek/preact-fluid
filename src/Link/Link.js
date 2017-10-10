import React, { Component } from 'preact';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';

class Link extends Component {
	render() {
		const { type = 'default', style = {} } = this.props;
		return (
			<StyledLink
				type={type}
				style={style}
				href={this.props.url || '#'}
				target={this.props.target || ''}
			>
				{this.props.children}
			</StyledLink>
		);
	}
}

Link.propTypes = {
	type: PropTypes.string,
	url: PropTypes.string,
	target: PropTypes.string,
	style: PropTypes.object
};
Link.defaultProps = {};

export default Link;