import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Grid from '../Layout/Grid';
import Cell from '../Layout/Cell';
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
		style: PropTypes.string,

		/**
		 * onChange
		 */
		onChange: PropTypes.func
	};
	onChange = (input) => {
		console.log('****************', input.data);
	}
	render() {
		const { className, style, grid={}, cell={} } = this.props;
		return (
			<Grid {...grid}>
				<Cell {...cell}>
					<label for="username">Username</label>
				</Cell>
				<Cell {...cell}>
					<StyledInput
						className={className}
						style={style}
						onChange={this.onChange}
					/>
				</Cell>
			</Grid>
		);
	}
}

export default FormInput;