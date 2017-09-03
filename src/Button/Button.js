import React, { Component } from 'preact';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Button extends Component {
	static propTypes = {
		/** Description of prop "foo". */
		type: PropTypes.string
	};
	render() {
		const { type = 'default' } = this.props;
		return (
			<StyledButton type={type}>
				{this.props.children}
			</StyledButton>
		);
	}
}

export default Button;
