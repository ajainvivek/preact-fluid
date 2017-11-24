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
		 * Custom styles
		 */
		style: PropTypes.object

	};

	static contextTypes = {
		theme: PropTypes.object
	};

	render() {
		const { style = {}, className } = this.props;
		const { theme } = this.context;

		return (
			<StyledTooltip
				style={style}
				className={className}
				theme={theme}
			>
				Tooltip Component
			</StyledTooltip>
		);
	}
}

export default Tooltip;