import styled, {css} from 'styled-components';

const StyledImageWrapper = styled.div`
	position: relative; 
	overflow: hidden;

	${props => props.inline && css`
		display: inline-flex;
		height: 100%;
		justify-content: center;
		align-items: center;
	`}
`;

const StyledImage = styled.img.attrs({
	src: props => props.src || '',
	onLoad: props => props.handleImageLoaded,
	onError: props => props.handleImageErrored
})`
	display: block;
    height: auto;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
	
	${props => props.rounded && css`
		border-radius: 50%;
	`}

    ${props => props.style && css`
		${props.style}
	`}
`;

export {
	StyledImageWrapper,
	StyledImage
};