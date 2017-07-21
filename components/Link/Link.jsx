import { Component } from 'preact';
import PropTypes from 'prop-types';

import colors from './../theme';

import style from './styles';

const fluid_link = {
	default: {
		color: colors.linkColor
	}
};

class Link extends Component {
	render() {
		const { type = 'default' } = this.props;
		return (
			<a
				className={`${style.fluid_link}`}
				style={fluid_link[type]}
				href={this.props.url || '#'}
				target={this.props.target || ''}
			>
				{this.props.children}
			</a>
		);
	}
}

Link.propTypes = {
	type: PropTypes.string,
	url: PropTypes.string,
	target: PropTypes.string
};
Link.defaultProps = {};

export default Link;