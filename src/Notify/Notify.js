import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import NotifyPortal from './NotifyPortal';
import Icon from './../Icon';
import colors from './../theme';
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
        this.notifications = [];
    }
    renderMessage = () => {
        const { style, className, title='', type='info', children } = this.props;
        this.notifications.push(this.props);
        return (
            this.notifications.map((notification, i) => {
                return (
                    <StyledNotify key={i} type={notification.type} style={notification.style}>
                        <div className="notification-icon">
                            <Icon
                                name="bell-o"
                                size="large"
                                color={colors.grayColorDark}
                            />
                        </div>
                        <div className="notification-body">
                            <div className="notification-close"></div>
                            <h1 className="notification-title">{notification.title}</h1>
                            <p className="notification-message">{notification.children}</p>
                        </div>  
                    </StyledNotify>
                );
            })
        );
    }
	render() {
		const { style, title='', type='info', id } = this.props;
		return (
            <NotifyPortal portalId={id}>
                {this.renderMessage()}
            </NotifyPortal>
		);
	}
}

export default Notify;