import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Grid from '../Layout/Grid';
import Cell from '../Layout/Cell';
import { StyledInput, StyledBorder } from './styles';

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
		const { className, style, grid={}, cell={}, effect='', label='', placeholder='' } = this.props;
		return (
			<Grid {...grid}>
				<Cell {...cell}>
					<label for={label}>{label}</label>
				</Cell>
				<Cell {...cell} style={`position: relative;`}>
					<StyledInput
						effect={effect}
						className={className}
						style={style}
						placeholder={placeholder}
						onChange={this.onChange}
					/>
					<StyledBorder
						className="focus-border"
						effect={effect}
					>
						<i></i>
					</StyledBorder>
				</Cell>
			</Grid>
		);
	}
}

export default FormInput;