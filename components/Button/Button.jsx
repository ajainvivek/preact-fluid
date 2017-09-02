import { Component } from 'preact';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

class Button extends Component {
	render() {
		const { type = 'default' } = this.props;
		return (
			<StyledButton type={type}>
				{this.props.children}
			</StyledButton>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string
};
Button.defaultProps = {};

export default Button;
