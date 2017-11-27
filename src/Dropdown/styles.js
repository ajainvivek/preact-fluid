import styled, {css} from 'styled-components';
import defaultTheme from '../theme';

import { keyframes } from 'styled-components';

const slideDown = keyframes`
    0% {
        visibility: visible;
		transition: all 0.3s ease;
	    transform: scale(0);
	    transform-origin: center top;
	}
	100%{
		visibility: visible;
		height: 100%;
		transform: scale(1);
	}
`;

const slideUp = keyframes`
    0% {
		transform: scale(1);
	}
	100%{
		transition: all 0.3s ease;
	    transform: scale(0);
	    transform-origin: center top;
	}	
`;

const StyledDropdown = styled.div`
	position: relative;
	display: table;
	
	.dropdown {
		position: absolute;
		left: 50%;
		margin-top: 8px;
		min-width: 200px;
		transform: translate(-50%, 0%);
		z-index: 999;
		visibility: hidden;
	}
	
	${props => props.style && css`
		${props.style}
	`}
`;

StyledDropdown.defaultProps = {
	theme: defaultTheme
};

export {
	StyledDropdown,
	slideDown,
	slideUp
};