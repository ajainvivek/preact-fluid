import styled, {css} from 'styled-components';
import defaultTheme from '../theme';

const StyledCard = styled.div`
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
	padding: 16px;
    padding-bottom: 0;
    margin: 0;

    &:last-child {
      padding-bottom: 16px;
    }
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

const StyledImageWrapper = styled.div`
	position: relative;
	padding: 0;
	margin: 0;
	overflow: hidden;
	
	&:not(:first-child):last-child {
      padding-top: 16px;
    }
    
    .image-overlay {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 16px;
        text-align: right;
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        object-fit: cover;
    }
    
    ${props => props.style && css`
		${props.style}
	`}
`;

const StyledBody = styled.div`
	font-size: 16px;
	line-height: 24px;
	padding: 16px;
    padding-bottom: 0;
    margin: 0;
    color: ${props => props.theme.darkColor};

    &:last-child {
      padding-bottom: 16px;
    }
    
    ${props => props.style && css`
		${props.style}
	`}
`;

const StyledFooter = styled.div`
	padding: 16px;
    padding-bottom: 0;
    margin: 0;

    &:last-child {
      padding-bottom: 16px;
    }
    
    ${props => props.style && css`
		${props.style}
	`}
`;

StyledCard.defaultProps = {
	theme: defaultTheme
};

StyledHeader.defaultProps = {
	theme: defaultTheme
};

StyledTitle.defaultProps = {
	theme: defaultTheme
};

StyledSubTitle.defaultProps = {
	theme: defaultTheme
};

StyledImageWrapper.defaultProps = {
	theme: defaultTheme
};

StyledBody.defaultProps = {
	theme: defaultTheme
};

StyledFooter.defaultProps = {
	theme: defaultTheme
};

export {
	StyledCard,
	StyledHeader,
	StyledTitle,
	StyledSubTitle,
	StyledImageWrapper,
	StyledBody,
	StyledFooter
};