import styled, {css} from 'styled-components';

export const StyledImageWrapper = styled.div`
	position: 'relative'; 
	overflow: 'hidden';

	${props => props.inline && css`
		display: inline-flex;
		height: 100%;
		justify-content: center;
		align-items: center;
	`}
`;

export const StyledImage = styled.img.attrs({
	src: props => props.src || '',
	onLoad: props => props.handleImageLoaded,
	onError: props => props.handleImageErrored
})`
	display: block;
    height: auto;
    width: 100%;
    margin: 0 auto;
	
	${props => props.rounded && css`
		object-fit: cover;
		border-radius: 50%;
	`}

    ${props => props.style && css`
		${props.style}
	`}
`;