import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Grid from '../Layout/Grid';
import Cell from '../Layout/Cell';
import { StyledInput, StyledLabel, StyledIcon, StyledBorder, StyledMessage } from './styles';

/**
 * TextField allow users to input text.
 *
 * @example ./../../docs/components/Form/TextField.md
 */
class TextField extends Component {
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
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(input);
		}
	}
	renderErrorMessage = (errorText) => {
		if (!errorText) {
			return '';
		}
		return (
			<StyledMessage>{errorText}</StyledMessage>
		);
	}
	render() {
		const { 
			className, 
			style, 
			grid={}, 
			cell={}, 
			effect='', 
			label='', 
			placeholder='', 
			icon='', 
			disabled=false,
			value='',
			errorText=''
		} = this.props;

		return (
			<Grid {...grid} alignContent="space-around">
				<Cell {...cell}>
					<StyledLabel for={label}>{label}</StyledLabel>
				</Cell>
				<Cell {...cell} middle>
					<div style={`position: relative;`}>
						<StyledInput
							effect={effect}
							className={className}
							style={style}
							placeholder={placeholder}
							onChange={this.onChange}
							disabled={disabled}
							value={value}
							errorText={errorText}
						/>
						<StyledIcon>{icon}</StyledIcon>
						<StyledBorder
							className="focus-border"
							effect={effect}
							errorText={errorText}
						>
							<i></i>
						</StyledBorder>
					</div>
					{this.renderErrorMessage(errorText)}
				</Cell>
			</Grid>
		);
	}
}

export default TextField;