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
		const inlineStyle = Object.assign({}, fluid_link[type], this.props.style || {});
		return (
			<a
				className='fluid_link'
				style={inlineStyle}
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
	target: PropTypes.string,
	style: PropTypes.object
};
Link.defaultProps = {};

export default Link;