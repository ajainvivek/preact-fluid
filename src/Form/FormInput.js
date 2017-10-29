import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

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
			<div>
				<StyledInput style={style} className={className} />
			</div>
		);
	}
}

export default FormInput;