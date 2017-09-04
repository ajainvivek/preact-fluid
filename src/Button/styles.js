import styled, { css } from 'styled-components';

import colors from '../theme';

export const StyledButton = styled.button`
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