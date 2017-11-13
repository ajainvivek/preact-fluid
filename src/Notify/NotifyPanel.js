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
		
		/**
		 * Title 
		 */
		title: PropTypes.string,

		/**
		 * Delay in seconds for the notification go away. Set this to 0 to not auto-dismiss the notification.
		 */
		autoDismiss: PropTypes.integer,

		/**
		 * Message 
		 */
		message: PropTypes.string,

		/**
		 * Level of the notification
		 */
		type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),

		/**
		 * Callback function on click of notification
		 */
		onClick: PropTypes.func,

		/**
		 * Icon name from font awesome - default is bell-o
		 */
		iconName: PropTypes.string,

		/**
		 * Size of the icon
		 */
		iconSize: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),

		/**
		 * Icon color
		 */
		iconColor: PropTypes.string

	};

	static defaultProps = {
		type: 'info'
	};

	get iconColor () {
		const colorsList = {
			info: colors.grayColorDark,
			success: colors.controlSuccessColor,
			error: colors.controlErrorColor,
			warning: colors.controlWarningColor
		};
		return colorsList[this.props.type];
	}

	close = () => {
		if (typeof this.props.close === 'function') {
			this.props.close();
		}
	}

	render() {
		const { 
			style, 
			className, 
			title='', 
			type='info', 
			message, 
			guid, 
			iconColor=this.iconColor, 
			iconName="bell-o", 
			iconSize="large" 
		} = this.props;

		return (
			<StyledNotify type={type} style={style} className={className} id={guid}>
				<div className="notification-icon">
					<Icon
						name={iconName}
						size={iconSize}
						color={iconColor}
					/>
				</div>
				<div className="notification-body">
					<div className="notification-close" onClick={this.close}></div>
					<h1 className="notification-title">{title}</h1>
					<p className="notification-message">{message}</p>
				</div>
			</StyledNotify>
		);
	}
}

export default NotifyPanel;