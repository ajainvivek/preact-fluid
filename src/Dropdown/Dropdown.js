import React, { Component } from 'preact';
import PropTypes from 'prop-types';
import Animate from './../Animate';
import { StyledDropdown, slideDown, slideUp } from './styles';

/**
 * Description
 *
 * @example ./../../docs/components/Dropdown.md
 */
class Dropdown extends Component {
	static propTypes = {
		/**
		 * Custom styles
		 */
		style: PropTypes.object

	};

	static defaultProps = {
		component: ''
    };

	static contextTypes = {
		theme: PropTypes.object
	};

	toggleDropdown = (value) => {
		const { toggleDropdown } = this.props;

		this.setState({
			toggleDropdown: value || !this.state.toggleDropdown
		}, () => {
			if (typeof toggleDropdown === 'function') {
				toggleDropdown(this.state.toggleDropdown);
			}
		});
	}

	closeDropdown = () => {
		this.toggleDropdown(false);
	}

	openDropdown = () => {
		this.toggleDropdown(true);
	}

	render() {
		const { style = {}, className, children, component } = this.props;
		const { theme } = this.context;
		const { toggleDropdown = null } = this.state;

		return (
			<StyledDropdown
				style={style}
				className={className}
				theme={theme}
			>
				<div onClick={() => {this.toggleDropdown()}}>
					{children}
				</div>
				<div className="dropdown">
					<Animate component={component} animation={{
						name: toggleDropdown ? slideDown : slideUp,
						duration: '300ms',
						iterationCount: 1,
						timingFunction: 'linear',
						fillMode: 'forwards'
					}} />
				</div>
			</StyledDropdown>
		);
	}
}

export default Dropdown;