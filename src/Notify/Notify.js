import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import NotifyPortal from './NotifyPortal';
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
		 * Custom styles
		 */
        style: PropTypes.object,
        
        /**
		 * Unique id
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

	}

	add  = (notification) => {
		const notifications = this.state.notifications;
		notifications.push(notification);
		this.setState({
			notifications
		}, () => {
			this.setState({
				notifications: []
			});
		});
	}

	remove = () => {

	}

	dismiss = () => {

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