import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import NotifyPortal from './NotifyPortal';
import lodash from 'lodash';
import Icon from './../Icon';
import colors from './../theme';
import NotifyPanel from './NotifyPanel';
import { StyledNotify } from './styles';


/**
 * Notification system for application with customizable features
 *
 * @example ./../../docs/components/Notify.md
 */
class Notify extends Component {
	static propTypes = {
        
        /**
		 * Unique id for the notification wrapper
		 */
		id: PropTypes.string.required,

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
		autoDismiss: PropTypes.number,

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
		iconColor: PropTypes.string,

		/**
		 * A callback function that will be called when the notification is successfully added. The first argument is the original notification e.g. `function (notification) { console.log(notification.title + 'was added'); }`
		 */
		onAdd: PropTypes.func,

		/**
		 * A callback function that will be called when the notification is about to be removed. The first argument is the original notification e.g. `function (notification) { console.log(notification.title + 'was removed'); }`
		 */
		onDismiss: PropTypes.func

	};
	
	static defaultProps = {
		type: 'info',
		style: {},
		title: null,
		message: null,
		autoDismiss: 5,
		iconName: 'bell-o',
		iconColor: 'dark gray',
		iconSize: 'xsmall'
	};

	constructor (props) {
		super(props);
		this.state =  {
			notifications: []
		};
	}

	get guid () {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	add  = (notification) => {
		const notifications = this.state.notifications;
		notifications.push(Object.assign(notification, {
			guid: this.guid,
			close: () => {
				this.dismiss(notification);
			}
		}));

		// onAdd callback
		if (typeof notification.onAdd === 'function') {
			notification.onAdd(notification);
		}

		// set the state to display the notification
		this.setState({
			notifications
		}, () => {
			const {autoDismiss = 5} = notification;
			if (autoDismiss !== 0 && typeof autoDismiss === 'number') {
				setTimeout(() => {
					this.dismiss(notification);
				}, autoDismiss * 1000);
			}
			// clear notification state
			this.setState({
				notifications: []
			});
		});
	}

	dismiss = (notification) => {
		const { id } = this.props;
		const notifyWrapper = document.getElementById(id);
		const notificationElement = document.getElementById(notification.guid);

		// onDismiss callback
		if (typeof notification.onDismiss === 'function') {
			notification.onDismiss(notification);
		}

		// close the notitication
		notificationElement.classList.add('close');

		// destroy the notification after 500ms 
		setTimeout(() => {
			notifyWrapper.removeChild(notificationElement.parentNode);
		}, 500);
	}

	renderNotification = () => {
		return this.state.notifications.map((notification, i) => (
			<NotifyPanel key={i} {...notification}></NotifyPanel>
		));
	}

	render() {
		const { id } = this.props;
		return (
            <NotifyPortal portalId={id}>
	            {this.renderNotification()}
            </NotifyPortal>
		);
	}
}

export default Notify;