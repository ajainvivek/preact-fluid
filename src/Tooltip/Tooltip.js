import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledTooltip } from './styles';

/**
 * Description
 *
 * @example ./../../docs/components/Tooltip.md
 */
class Tooltip extends Component {
	static propTypes = {
		/**
		 * Title
		 */
		title: PropTypes.object.isRequired,

		/**
		 * Position - default is `bottom`
		 */
		position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

		/**
		 * Animation effect - default is `fade`
		 */
		effect: PropTypes.oneOf(['fade', 'expand']),

		/**
		 * Specify fixed width
		 */
		width: PropTypes.string,

		/**
		 * Custom styles
		 */
		style: PropTypes.object

	};

	static defaultProps = {
		title: '',
		effect: 'fade',
		position: 'bottom',
		width: null
	};

	static contextTypes = {
		theme: PropTypes.object
	};

	render() {
		const { style = {}, className, children, title, effect, position, width } = this.props;
		const { theme } = this.context;

		return (
			<StyledTooltip
				style={style}
				className={`${effect} ${className}`}
				theme={theme}
				width={width}
				position={position}
				data-title={title}
			>
				{children}
			</StyledTooltip>
		);
	}
}

export default Tooltip;