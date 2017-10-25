import styled, {css} from 'styled-components';

export const StyledImage = styled.img.attrs({
	src: props => props.src || '',
	onLoad: props => props.handleImageLoaded,
	onError: props => props.handleImageErrored
})`
	display: block;
    height: auto;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    
    ${props => props.style && css`
		${props.style}
	`}
`;