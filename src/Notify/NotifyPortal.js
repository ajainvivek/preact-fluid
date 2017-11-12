import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledNotifyWrapper } from './styles';

/**
 * Notification Portal Component
 */
class NotifyPortal extends Component {
	constructor (props) {
        super(props);
		this.portal = null;
	}
	componentDidMount () {
		let portal = this.props.portalId && document.getElementById(this.props.portalId);
		if (!portal) {
			portal = document.createElement('div');
            portal.id = this.props.portalId;
            portal.style.position = 'fixed';
            portal.style.bottom = 0;
            portal.style.right = 0;
            portal.style.overflow = 'hidden'; 
			document.body.appendChild(portal);
		}
		this.portal = portal;
		this.componentDidUpdate();
	}
	componentWillUnmount () {
		document.body.removeChild(this.portal);
	}
	componentDidUpdate () {
		React.render(<StyledNotifyWrapper {...this.props}>{this.props.children}</StyledNotifyWrapper>, this.portal);
	}
	render = () => null
}

export default NotifyPortal;