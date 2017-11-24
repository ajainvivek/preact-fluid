import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

/**
 * This button is used to add dimension to mostly flat layouts and emphasizes important functions on your page.
 *
 * @example ./../../docs/components/Button.md
 */
class Button extends Component {

	static propTypes = {

		/**
		 * Button label.
		 */
		children: PropTypes.string.isRequired,

		/**
		 * The size of the Button
		 */
		size: PropTypes.oneOf(['small', 'normal', 'large']),

		/**
		 * If true, the button will be rounded corners
		 */
		rounded: PropTypes.bool,

		/**
		 * If true, the button will use the theme's primary color
		 */
		primary: PropTypes.bool,

		/**
		 * If true, the button will use the theme's secondary color
		 */
		secondary: PropTypes.bool,

		/**
		 * Gets called when the user clicks on the button
		 *
		 * @param {SyntheticEvent} event The react `SyntheticEvent`
		 */
		onClick: PropTypes.func
	};

	static defaultProps = {
		primary: false,
		secondary: false,
		clicked: false
	};

	static contextTypes = {
		theme: PropTypes.object
	};

	_handleClick = (event) => {
		this.setState({
			clicked: true
		});

		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => this.setState({ clicked: false }), 500);

		const onClick = this.props.onClick;
		if (onClick) {
			onClick(event);
		}
	}

	componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	render() {
		const clicked = this.state.clicked ? 'clicked' : '';
		const {badge='', loading=false, className, left, right} = this.props;
		const { theme } = this.context;

		return (
			<StyledButton {...this.props} onClick={this._handleClick} className={`${clicked} ${loading && 'loading'} ${className}`} theme={theme}>
				<span className="item-left">
					{left}
				</span>
				{this.props.children}
				<span className="item-right">
					{right}
				</span>
				<span className={`${badge && 'badge'}`}>{badge && badge.value}</span>
			</StyledButton>
		);
	}
}

export default Button;
