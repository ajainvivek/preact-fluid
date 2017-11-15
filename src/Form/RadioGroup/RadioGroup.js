import React, { Component, cloneElement } from 'preact';
import PropTypes from 'prop-types';
import { StyledRadioGroup, StyledLabel } from './styles';

/**
 * Radio are switches used for selection from multiple options
 *
 * @example ./../../../docs/components/Form/RadioGroup.md
 */
class RadioGroup extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
		style: PropTypes.string,

		/**
		 * Default selected value
		 */
		defaultSelected: PropTypes.string,

		onChange: PropTypes.func,

		horizontal: PropTypes.bool,
		
		grid: PropTypes.object,
		
		cell: PropTypes.object,

		hideLabel: PropTypes.bool,

		disabled: PropTypes.bool
	};

	static defaultProps = {
		defaultSelected: null,
		style: '',
		horizontal: false,
		grid :{
            columns: '1fr 2fr'
        }, 
        cell : {
            middle: true
		},
		hideLabel: false,
		disabled: false
	};

	get label () {
		const {
			label='', 
			hideLabel=false,
			cell={}
		} = this.props;

		if (hideLabel) {
			return '';
		}

		return (
			<Cell {...cell}>
				<StyledLabel for={label}>{label}</StyledLabel>
			</Cell>
		);
    }

	get selectedValue () {
		const { defaultSelected } = this.props;
		const { selected } = this.state;
		if (defaultSelected) {
			return defaultSelected;
		}
		return selected;
	}

	handleOnChange = (input) => {
		const { onChange } = this.props;
		this.setState({
			selected: input.value
		}, () => {
			if (typeof onChange === 'function') {
				onChange(input.value, input);
			}
		});
	}

	renderRadio = (child, index) => {
		const selectedValue = this.selectedValue;

		return cloneElement(child, {
			checked: selectedValue ? child.props.value === selectedValue : index === 0,
			key: index,
			onChange: this.handleOnChange,
			disabled: this.props.disabled,
			...child.props
		});
	}

	render() {
		const { style = {}, className, children, horizontal, grid, cell, disabled } = this.props;
		
		return (
			<Grid {...grid} alignContent="space-around">
				{this.label} 
				<Cell {...cell}>
					<StyledRadioGroup
						style={style}
						className={className}
						horizontal={horizontal}
						disabled={disabled}
					>
						{
							children.map((child, index) => {
								return (<div className="radio-item">{this.renderRadio(child, index)}</div>)
							})
						}
					</StyledRadioGroup>
				</Cell>
			</Grid>
		);
	}
}

export default RadioGroup;