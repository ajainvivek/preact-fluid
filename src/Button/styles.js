import styled, { css, keyframes } from 'styled-components';

import colors from '../theme';

const effect = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const StyledButton = styled.button`
	position: relative;
	appearance: none;
	cursor: pointer;
	display: inline-block;
	outline: none;
	text-align: center;
	text-decoration: none;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
	font-size: 14px;
	line-height: 14px;
	padding: 8px 16px;
	margin: 8px 16px;
	background: ${colors.bgColorLight};
	border: 1px solid ${colors.primaryColor};
	border-radius: 2px;
	color: ${colors.linkColor};
	
	&:focus {
		outline: 0;
		animation: ${effect} 0.8s ease-out;
	}

	${props => props.primary && css`
		background: ${colors.primaryColor};
		border: 1px solid ${colors.primaryColorDark};
		border-radius: 2px;
		color: ${colors.lightColor}
	`}
	
	
	${props => props.secondary && css`
		background: ${colors.secondaryColor};
		border: 1px solid ${colors.secondaryColorDark};
		border-radius: 2px;
		color: ${colors.lightColor}
	`}
`;
