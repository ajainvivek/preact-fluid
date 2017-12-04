import styled, { css } from 'styled-components';
import defaultTheme from '../theme';

const StyledHeader = styled.header`
	align-items: stretch;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-shadow: 0 2px 0 0 rgba(5,45,73,0.06999999999999995);
	height: 60px;
	z-index: 9999;
	white-space: nowrap;
	padding: 0 10px;
	background: ${props => props.theme.lightColor};

	.header-link {
		align-items: center;
		display: inline-flex;
		justify-content: center;
	}
	
	${props => props.primary && css`
		background: ${props => props.theme.primaryColor};
		color: ${props => props.theme.lightColor};
	`}
	
	${props => props.secondary && css`
		background: ${props => props.theme.secondaryColor};
		color: ${props => props.theme.lightColor};
	`}
`;


const StyledLogo = styled.img`
	display: inline-flex;
	padding: 0 5px;
`;


const StyledSection = styled.section`
	align-items: center;
	display: flex;
	flex: 1 0 0;

	&:last-child {
		justify-content: flex-end;
	}
`;

StyledHeader.defaultProps = {
	theme: defaultTheme
};

export {
	StyledHeader,
	StyledSection,
	StyledLogo
};
