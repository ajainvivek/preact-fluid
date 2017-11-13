import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import NotifyPortal from './NotifyPortal';
import lodash from 'lodash';
import Icon from './../Icon';
import colors from './../theme';
import NotifyPanel from './NotifyPanel';
import { StyledNotify } from './styles';


/**
 * Notification system for application
 *
 * @example ./../../docs/components/Notify.md
 */
class Notify extends Component {
	static propTypes = {
        
        /**
		 * Unique id for the notification wrapper
		 */
		id: PropTypes.string.required

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
		this.setState({
			notifications
		}, () => {
			const {autoDismiss = 5} = notification;
			if (autoDismiss !== 0 && typeof autoDismiss === 'number') {
				setTimeout(() => {
					this.dismiss(notification);
				}, autoDismiss * 1000);
			}
			this.setState({
				notifications: []
			});
		});
	}

	dismiss = (notification) => {
		const { id } = this.props;
		const notifyWrapper = document.getElementById(id);
		const notificationElement = document.getElementById(notification.guid);
		notificationElement.classList.add('close');
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