import { Component } from 'preact';
import PropTypes from 'prop-types';

import colors from './../theme';

import style from './styles';

const fluid_btn = {
	default: {
		background: colors.bgColorLight,
		border: `1px solid ${colors.primaryColor}`,
		borderRadius: '2px',
		color: colors.linkColor,
		fontSize: '12px',
		lineHeight: '12px'
	},
	primary: {
		background: colors.primaryColor,
		border: `1px solid ${colors.primaryColorDark}`,
		borderRadius: '2px',
		color: colors.lightColor,
		fontSize: '12px',
		lineHeight: '12px'
	}
};

class Button extends Component {
	render() {
		return (
			<button className={`${style.fluid_btn}`} style={fluid_btn.default}>
				default button
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string
};
Button.defaultProps = {};

export default Button;
