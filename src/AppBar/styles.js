import styled, { css } from 'styled-components';

import colors from '../theme';

export const StyledHeader = styled.header`
	align-items: stretch;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-shadow: 0 2px 0 0 rgba(5,45,73,0.06999999999999995);
	height: 60px;
	z-index: 9999;
	white-space: nowrap;
	padding: 0 10px;
	
	${props => props.primary && css`
		background: ${colors.primaryColor};
		color: ${colors.lightColor};
	`}
	
	${props => props.secondary && css`
		background: ${colors.secondaryColor};
		color: ${colors.lightColor};
	`}
`;


export const StyledSection = styled.section`
	align-items: center;
	display: flex;
	flex: 1 0 0;

	&:last-child {
		justify-content: flex-end;
	}
`;
