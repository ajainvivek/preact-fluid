import styled, { css } from 'styled-components';

import colors from '../theme';
import keyframes from '../keyframes';

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
	padding: 10px 20px;
	margin: 10px 20px;
	background: ${colors.bgColorLight};
	border: 1px solid ${colors.primaryColor};
	border-radius: 2px;
	color: ${colors.linkColor};
	
	&.clicked:after {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		bottom: -1px;
		right: -1px;
		border-radius: inherit;
		border: 0 solid ${colors.primaryColor};
		opacity: 0.4;
		animation: ${keyframes.buttonEffect} .4s;
		display: block;
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
