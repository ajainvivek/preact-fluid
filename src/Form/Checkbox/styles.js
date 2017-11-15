import styled, {css, keyframes} from 'styled-components';
import colors from './../../theme';

const drawCheckbox = keyframes`
    0% {
        stroke-dashoffset: 33;
    }
    100% {
        stroke-dashoffset: 0;
    }
`;

const height = 36;
const width = 36;

export const StyledCheckbox= styled.span`
    position: relative;
    display: inline-block;
    height: ${height}px;
    width: ${width}px;
    
    .checkbox {
        position: absolute;
        border: 0; 
        clip: rect(0 0 0 0); 
        height: 1px; margin: -1px; 
        overflow: hidden; 
        padding: 0;
        width: 1px;
        
        &:checked + label > svg {
            display: block;
            height: ${height / 2}px;
            animation: ${drawCheckbox} ease-in-out 0.2s forwards;
        }
    }

    label {
        color: ${colors.primaryColor};
        line-height: ${height}px;
        cursor: pointer;
        position: relative;

        &:active::after {
            background-color: ${colors.grayColor};
        }

        &:after {
            content: "";
            height: ${height - 4}px;
            width: ${width - 4}px;
            margin-right: 1rem;
            float: left;
            border: 2px solid ${colors.primaryColor};
            border-radius: 3px;
            transition: 0.15s all ease-out;      
        }
    }

    svg {
        display: none;
        stroke: ${colors.primaryColor};
        stroke-width: 3px;
        height: 0; //Firefox fix
        width: ${height / 2}px;
        position: absolute;
        top: 8px;
        left: 9px;
        stroke-dasharray: 33; //Firefox fix
    }

	${props => props.style && css`
		${props.style}
	`}
`;

export const StyledLabel = styled.label`
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;