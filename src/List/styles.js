import styled, {css} from 'styled-components';
import defaultTheme from '../theme';

const StyledList = styled.div`
	background: ${props => props.theme.lightColor};
	border: 1px solid ${props => props.theme.borderColor};
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);

	&:focus {
		text-decoration: none;
	}

	&:hover {
		text-decoration: none;
	}
	
	${props => props.style && css`
		${props.style}
	`}
`;

const StyledHeader = styled.div`
	padding: 15px 20px;
	border-bottom: 1px solid ${props => props.theme.borderColor};
	
	${props => props.style && css`
		${props.style}
	`}
`;

const StyledSection = styled.ul`
	padding: 0;
	margin: 0;

	&:not(:last-child) {
		border-bottom: 1px solid ${props => props.theme.borderColor};
	}

	${props => props.style && css`
		${props.style}
	`}
`;

const StyledItem = styled.li`
	padding: 0 20px;
	color: ${props => props.theme.grayColorDark};
	height: 42px;
	line-height: 42px;

	&:hover {
		cursor: pointer;
		background: ${props => props.theme.listActiveColor};
	}

	.list-item-left {
		display: inline-flex;
		height: 100%;
		padding-right: 15px;
		float: left;
		justify-content: center;
		align-items: center;

		i {
			color: ${props => props.theme.grayColorDark};
		}
	}

	.list-item-right {
		display: inline-flex;
		height: 100%;
		padding-left: 15px;
		float: right;
		justify-content: center;
		align-items: center;

		i {
			color: ${props => props.theme.grayColorDark};
		}
	}

	${props => props.active && css`
		background: ${props => props.theme.listActiveColor};
	`}

	${props => props.style && css`
		${props.style}
	`}
`;

const StyledFooter = styled.div`
	padding: 15px 20px;

	&:not(:last-child) {
		border-top: 1px solid ${props => props.theme.borderColor};
	}

	${props => props.style && css`
		${props.style}
	`}
`;

const StyledTitle = styled.h1`
	font-size: 20px;
	line-height: 32px;
	font-weight: 500;
    color: ${props => props.theme.darkColor};
    margin: 0;
    
    ${props => props.light && css`
		color: ${props => props.theme.lightColor};
	`}
    
    ${props => props.style && css`
		${props.style}
	`}
`;

const StyledSubTitle = styled.h2`
	font-size: 14px;
	line-height: 18px;
	font-weight: 300;
    color: ${props => props.theme.grayColor};
    margin: 0;
    
    ${props => props.light && css`
		color: ${props => props.theme.lightColor};
	`}
    
    ${props => props.style && css`
		${props.style}
	`}
`;

StyledList.defaultProps = {
	theme: defaultTheme
};

StyledHeader.defaultProps = {
	theme: defaultTheme
};

StyledSection.defaultProps = {
	theme: defaultTheme
};

StyledItem.defaultProps = {
	theme: defaultTheme
};

StyledFooter.defaultProps = {
	theme: defaultTheme
};

StyledTitle.defaultProps = {
	theme: defaultTheme
};

StyledSubTitle.defaultProps = {
	theme: defaultTheme
};

export {
	StyledList,
	StyledHeader,
	StyledSection,
	StyledItem,
	StyledFooter,
	StyledTitle,
	StyledSubTitle
};