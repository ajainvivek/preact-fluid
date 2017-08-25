import { Component } from 'preact';
import PropTypes from 'prop-types';

import colors from './../theme';

import './styles';

const fluid_btn = {
	default: {
		background: colors.bgColorLight,
		border: `1px solid ${colors.primaryColor}`,
		borderRadius: '2px',
		color: colors.linkColor
	},
	primary: {
		background: colors.primaryColor,
		border: `1px solid ${colors.primaryColorDark}`,
		borderRadius: '2px',
		color: colors.lightColor
	},
	link: {
		background: 'transparent',
		borderColor: 'transparent',
		color: colors.linkColor
	}
};

class Button extends Component {
	render() {
		const { type = 'default' } = this.props;
		return (
			<button className='fluid_btn' style={fluid_btn[type]}>
				{this.props.children}
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string
};
Button.defaultProps = {};

export default Button;
