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
    
    ${props => props.effect === 'line' && css`
        border-radius: 0;
        border: 0; 
        border-width: 2px;
        border-bottom: 1px solid ${colors.grayColorDark};
        padding: 7px 0;
        
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
        border-width: 2px;
        border-bottom: 1px solid ${colors.grayColorDark};
        padding: 7px 0;
        
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
    
	
	${props => props.style && css`
		${props.style}
	`}
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
	`}
	
	${props => props.effect === 'lineOutwards' && css`
		position: absolute; 
		bottom: 0; 
		left: 50%; 
		width: 0; 
		height: 2px; 
		background-color: ${colors.primaryColor}; 
		transition: 0.4s;
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
		}
		
		i:after{
			left: auto; 
			right: 0; 
			top: auto;
			bottom: 0;
		}
	`}
`;