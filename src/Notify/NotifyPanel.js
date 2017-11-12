import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Icon from './../Icon';
import colors from './../theme';
import { StyledNotify } from './styles';


/**
 * Notification panel
 */
class NotifyPanel extends Component {
	static propTypes = {

		/**
		 * Custom styles
		 */
		style: PropTypes.object,

	};
	render() {
		const { style, className, title='', type='info', message } = this.props;

		return (
			<StyledNotify type={type} style={style} className={className}>
				<div className="notification-icon">
					<Icon
						name="bell-o"
						size="large"
						color={colors.grayColorDark}
					/>
				</div>
				<div className="notification-body">
					<div className="notification-close"></div>
					<h1 className="notification-title">{title}</h1>
					<p className="notification-message">{message}</p>
				</div>
			</StyledNotify>
		);
	}
}

export default NotifyPanel;