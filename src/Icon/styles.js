import styled, { css } from 'styled-components';

import keyframes from '../keyframes';

const size = {
	xsmall: 8,
	small: 16,
	normal: 24,
	large: 32,
	xlarge: 64
};

export const StyledIcon = styled.i`
	position: relative;
    cursor: pointer;
    
    ${props => props.size && css`
		font-size: ${size[props.size]}px;
	`}
	
	${props => props.color && css`
		color: ${props.color};
	`}
`;
