import styled, { css } from 'styled-components';

import colors from './../theme';

export const StyledInput = styled.input`
	-webkit-appearance: none;
    color: ${colors.darkColor};
    display: block;
    font-size: 16px;
    height: 30px;
    height: 42px;
    max-width: 100%;
    width: 100%;
    background: none rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
    border-color: ${colors.grayColorDark};
    border-image: initial;
    outline: none;
    padding: 7px 8px;
    transition: all 0.2s ease;
    box-sizing : border-box;
    
    &:focus {
        border-width: 2px;
        box-shadow: rgba(87, 85, 217, 0.2) 0px 0px 0px 2px;
        border-color: ${colors.primaryColor};
	}

	${props => props.disabled && css`
		color: rgba(0, 0, 0, 0.3);
		cursor: not-allowed;
		border-style: dashed;

		&::placeholder {
			color: rgba(0, 0, 0, 0.3);
		}
	`}

	${props => props.errorText && css`
		border-color: ${colors.controlErrorColor};
	`}
    
    ${props => props.effect === 'line' && css`
        border-radius: 0;
        border: 0; 
        border-bottom: 1px solid ${colors.grayColorDark};
		padding: 7px 0;
		
		${props => props.disabled && css`
			border-bottom: 1px dashed ${colors.grayColorDark}; 
		`}

		${props => props.errorText && css`
			border-bottom: 1px dashed ${colors.controlErrorColor}; 
		`}
        
        &:focus {
	        box-shadow: none;
	        border-color: ${colors.grayColorDark};
	    }
	    
	    &:focus ~ .focus-border {
	        width: 100%; 
	        transition: 0.4s;
	    }
    `}
    
    ${props => props.effect === 'lineOutwards' && css`
        border-radius: 0;
        border: 0; 
        border-bottom: 1px solid ${colors.grayColorDark};
		padding: 7px 0;
		
		${props => props.disabled && css`
			border-bottom: 1px dashed ${colors.grayColorDark};
		`}	
        
        &:focus {
	        box-shadow: none;
	        border-color: ${colors.grayColorDark};
	    }
	    
	    &:focus ~ .focus-border {
	        width: 100%; 
	        transition: 0.4s; 
	        left: 0;
		}
    `}
    
    
    ${props => props.effect === 'border' && css`
        border: 1px solid ${colors.grayColorDark}; 
        padding: 7px 14px 9px; 
		transition: 0.4s;
		
		${props => props.disabled && css`
			border: 1px dashed ${colors.grayColorDark}; 
		`}
        
        &:focus {
	        box-shadow: none;
	        border-color: ${colors.grayColorDark};
	    }
	    
	    &:focus ~ .focus-border:after{
	        top: auto; 
	        bottom: 0; 
	        right: auto; 
	        left: 0; 
	        transition-delay: 0.6s;
	    }
	    
	    &:focus ~ .focus-border:before,
		&:focus ~ .focus-border:after {
			width: 100%; 
			transition: 0.3s;
		}
		
		&:focus ~ .focus-border i:before,
		&:focus ~ .focus-border i:after { 
			height: 100%; 
			transition: 0.4s;
		}
	`}

	${props => props.errorText && css`
		border-color: ${colors.controlErrorColor};
		&:focus {
			border-color: ${colors.controlErrorColor};
		}
	`}
    
	
	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledMessage = styled.span`
	font-size: 12px;
	padding: 5px;
	color: ${colors.controlErrorColor};
`;

export const StyledLabel = styled.label`
	font-size: 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const StyledIcon = styled.span`
	position: absolute;
	right: 8px;
	bottom: 8px;
`;

export const StyledBorder = styled.span`
	${props => props.effect === 'line' && css`
		position: absolute; 
		bottom: 0; 
		left: 0; 
		width: 0; 
		height: 2px; 
		background-color: ${colors.primaryColor}; 
		transition: 0.4s;

		${props => props.errorText && css`
			background-color: ${colors.controlErrorColor}; 
		`}
	`}
	
	${props => props.effect === 'lineOutwards' && css`
		position: absolute; 
		bottom: 0; 
		left: 50%; 
		width: 0; 
		height: 2px; 
		background-color: ${colors.primaryColor}; 
		transition: 0.4s;

		${props => props.errorText && css`
			background-color: ${colors.controlErrorColor}; 
		`}
	`}
	
	${props => props.effect === 'border' && css`
		&:before,
		&:after {
			content: ""; 
			position: absolute; 
			top: 0; 
			left: 0; 
			width: 0; 
			height: 2px; 
			background-color: ${colors.primaryColor}; 
			transition: 0.3s;

			${props => props.errorText && css`
				background-color: ${colors.controlErrorColor}; 
			`}
		}
		
		&:after {
			top: auto; 
			bottom: 0; 
			left: auto; 
			right: 0;
		}
		
		i:before,
		i:after {
			content: ""; 
			position: absolute; 
			top: 0; 
			left: 0; 
			width: 2px; 
			height: 0; 
			background-color: ${colors.primaryColor}; 
			transition: 0.4s;

			${props => props.errorText && css`
				background-color: ${colors.controlErrorColor}; 
			`}
		}
		
		i:after{
			left: auto; 
			right: 0; 
			top: auto;
			bottom: 0;
		}
	`}
`;