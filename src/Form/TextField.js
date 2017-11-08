import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Grid from '../Layout/Grid';
import Cell from '../Layout/Cell';
import { StyledInput, StyledLabel, StyledIcon, StyledBorder } from './styles';

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
		console.log('****************', input.data);
	}
	render() {
		const { className, style, grid={}, cell={}, effect='', label='', placeholder='', icon='' } = this.props;
		return (
			<Grid {...grid} alignContent="space-around">
				<Cell {...cell}>
					<StyledLabel for={label}>{label}</StyledLabel>
				</Cell>
				<Cell {...cell} style={`position: relative;`} middle>
					<StyledInput
						effect={effect}
						className={className}
						style={style}
						placeholder={placeholder}
						onChange={this.onChange}
					/>
					<StyledIcon>{icon}</StyledIcon>
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

export default TextField;