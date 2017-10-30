import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledFormGroup, StyledInput } from './styles';

/**
 * FormInput allow users to input text.
 *
 * @example ./../../docs/components/Form/FormInput.md
 */
class FormInput extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.string
	};
	render() {
		const { style, className } = this.props;
		return (
			<StyledFormGroup style={style}>
				<label for="username">Username</label>
				<StyledInput className={className} />
			</StyledFormGroup>
		);
	}
}

export default FormInput;