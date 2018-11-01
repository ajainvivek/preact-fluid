import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledModalWrapper } from './styles';

/**
 * Modal Portal Component
 */
class ModalPortal extends Component {
    constructor(props) {
        super(props);
        this.portal = null;
    }
    componentDidMount() {
        let portal =
            this.props.portalId && document.getElementById(this.props.portalId);
        if (!portal) {
            portal = document.createElement('div');
            portal.id = this.props.portalId;
            portal.style.position = 'fixed';
            portal.style[this.props.position] = '0';
            portal.style.top = '0';
            portal.style.left = '0';
            portal.style.width = '100vw';
            portal.style.height = '100vh';
            portal.style.overflow = 'hidden';
            portal.style.display = 'flex';
            portal.style.alignItems = 'center';
            portal.style.justifyContent = 'center';
            portal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            document.body.appendChild(portal);
        }
        this.portal = portal;
        this.componentDidUpdate();
    }
    componentWillUnmount() {
        const element = document.getElementById(this.props.portalId);
        if (element) {
            document.body.removeChild(this.portal);
        }
    }
    componentDidUpdate() {
        if (!this.props.children.length) {
            return;
        }
        React.render(
            <StyledModalWrapper {...this.props}>
                {this.props.children}
            </StyledModalWrapper>,
            this.portal
        );
    }
    render = () => null;
}

export default ModalPortal;
