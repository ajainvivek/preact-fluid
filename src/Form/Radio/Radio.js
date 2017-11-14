import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Grid from '../../Layout/Grid';
import Cell from '../../Layout/Cell';
import { StyledRadio, StyledLabel } from './styles';

/**
 * Radio are switches used for selection
 *
 * @example ./../../../docs/components/Form/Radio.md
 */
class Radio extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
        style: PropTypes.object,
        
        /**
		 * onChange
		 */
        onChange: PropTypes.func,
        
        grid: PropTypes.object,

        cell: PropTypes.object,

        effect: PropTypes.oneOf(['default', 'circle', 'drop']),

        bgColor: PropTypes.string,

        highlightColor: PropTypes.string

    };

    static defaultProps = {
        grid :{
            columns: '36px 2fr',
	        gap: '15px'
        }, 
        cell : {
            middle: true
        },
        effect: 'default',
	    checked: false
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

    handleOptionChange = (input) => {
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(input);
		}
	}
    
	render() {
        const { 
            style = {}, 
            className,
            value='',
            disabled=false,
            grid,
            cell,
            effect,
	        checked
        } = this.props;
        
		return (
            <Grid {...grid} alignContent="space-around">
                <Cell {...cell}>
                    <StyledRadio className={className} onClick={() => {this.handleOptionChange(this.radioBtn)}}>
                        <input
                            className={`radio ${effect}`}
                            style={style}
                            type="radio"
                            value={value}
                            checked={checked}
                            ref={(input) => { this.radioBtn = input; }}
                        />
                        <label></label>
                    </StyledRadio>
                </Cell>
                {this.label} 
            </Grid>
		);
	}
}

export default Radio;