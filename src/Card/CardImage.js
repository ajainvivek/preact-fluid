import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Image from './../Image';
import { StyledImageWrapper, StyledTitle, StyledSubTitle } from './styles';

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

	static contextTypes = {
		theme: PropTypes.object
	};

	renderOverlay = (overlay) => {
		if (Object.keys(overlay).length === 0) {
			return '';
		}
		return (
			<div className="image-overlay">
				<StyledTitle light>{overlay.title || ''}</StyledTitle>
				<StyledSubTitle light>{overlay.subtitle || ''}</StyledSubTitle>
			</div>
		);
	}

	render() {
		const { style, src, responsive, placeholder, overlay={} } = this.props;
		const { theme } = this.context;
		return (
			<StyledImageWrapper style={style} theme={theme}>
				<Image
					responsive={responsive}
					placeholder={placeholder}
					src={src}
				/>
				{this.renderOverlay(overlay)}
			</StyledImageWrapper>
		);
	}
}

export default CardImage;