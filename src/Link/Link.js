import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledLink } from './styles';

/**
 * Provides declarative, accessible navigation around your application.
 *
 * @example ./../../docs/components/Link.md
 */
class Link extends Component {
	static propTypes = {
		/**
		 * Anchor link
		 */
		href: PropTypes.string,

		/**
		 * Custom styles
		 */
		style: PropTypes.object,

		/**
		 * Gets called when the user clicks on the button
		 *
		 * @param {SyntheticEvent} event The react `SyntheticEvent`
		 */
		onClick: PropTypes.func
	};

	static contextTypes = {
		theme: PropTypes.object
	};

	render() {
		const { style = {}, url = '#', target = '', onClick, className } = this.props;
		const { theme } = this.context;

		return (
			<StyledLink
				style={style}
				href={url}
				target={target}
			    onClick={onClick}
				className={className}
				theme={theme}
			>
				{this.props.children}
			</StyledLink>
		);
	}
}

export default Link;