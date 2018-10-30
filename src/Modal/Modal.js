import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledModal } from './styles';
import ModalPortal from './ModalPortal';

/**
 * Description
 *
 * @example ./../../docs/components/Modal.md
 */
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: false,
        };
    }

    static propTypes = {
        /**
         * Custom styles
         */
        style: PropTypes.object,
    };

    static defaultProps = {};

    static contextTypes = {
        theme: PropTypes.object,
    };

    show = content => {
        this.setState({ content });
    };

    hide = () => {
        this.setState({ content: false });
    };

    render() {
        const { style = {}, className } = this.props;
        const { theme } = this.context;

        return this.state.content ? (
            <ModalPortal>
                <StyledModal style={style} className={className} theme={theme}>
                    {this.state.content}
                </StyledModal>
            </ModalPortal>
        ) : null;
    }
}

export default Modal;
