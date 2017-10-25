import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Image from './../Image';
import { StyledImageWrapper, StyledImage} from './styles';

/**
 * Cards header displays title information
 */
class CardImage extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.object
	};
	renderResponsiveImages(images=[]) {
		return images.map((image) => {
			return <source srcset={image.src} media={image.media} />
		});
	}
	render() {
		const { style, src, responsive, placeholder } = this.props;
		return (
			<StyledImageWrapper style={style}>
				<Image
					responsive={responsive}
					placeholder={placeholder}
					src={src}
				/>
			</StyledImageWrapper>
		);
	}
}

export default CardImage;