import styled, {css} from 'styled-components';

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
	padding: 5px 10px;
	margin: 5px 10px;
	
	${props => (props.type === 'default') && css`
		background: ${colors.bgColorLight};
		border: 1px solid ${colors.primaryColor};
		border-radius: 2px;
		color: ${colors.linkColor}
	`}

	${props => (props.type === 'primary') && css`
		background: ${colors.primaryColor};
		border: 1px solid ${colors.primaryColorDark};
		border-radius: 2px;
		color: ${colors.lightColor}
	`}
	
	${props => (props.type === 'link') && css`
		background: transparent;
		border: transparent;
		color: ${colors.linkColor}
	`}
`;