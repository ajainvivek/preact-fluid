import styled, { css } from 'styled-components';

import keyframes from '../keyframes';

const size = {
	xsmall: 16,
	small: 32,
	medium: 40,
	large: 48,
	xlarge: 72
};

export const StyledIcon = styled.i`
	position: relative;
	cursor: pointer;
	text-align: center;
    
	${props => props.size && css`
		height: ${size[props.size]}px;
		width: ${size[props.size]}px;
		font-size: ${size[props.size]}px;
	`}
	
	${props => props.color && css`
		color: ${props.color};
	`}
`;
