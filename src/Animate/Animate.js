import React, {Component, cloneElement} from 'preact';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Animations from './../Animations';

/**
 * Wrapper for animating the external component
 *
 * @example ./../../docs/components/Animate.md
 */
class Animate extends Component {

	static propTypes = {

		/**
		 * Component to be animated
		 */
		component: PropTypes.element.isRequired,

		/**
		 * Animation properties
		 */
		animation: PropTypes.shape({
			active: PropTypes.bool,
			duration: PropTypes.number,
			timingFunction: PropTypes.string,
			delay: PropTypes.string,
			iterationCount: PropTypes.number,
			direction: PropTypes.string,
			fillMode: PropTypes.string,
			playState: PropTypes.string
		}),

		/**
		 * Element attributes
		 */
		attrs: PropTypes.object
	};

	static defaultProps = {
		animation: {},
		attrs: {}
	};

	componentWillMount() {
		const {component} = this.props;
		this.component = (props) => cloneElement(component, {
			...props
		});
	}

	render() {
		const {animation, attrs={}} = this.props;

		const {
			duration = '500ms',
			timingFunction = 'linear',
			delay = '0s',
			iterationCount = 0,
			direction = '',
			fillMode = '',
			playState = '',
			active = true
		} = animation;

		const name = Animations[animation.name] || '';

		const AnimatedComponent = styled(this.component).attrs({
			...attrs
		})`
	        ${active && css`
	            animation-name: ${name};
	            animation-duration: ${duration};
	            animation-timing-function: ${timingFunction};
	            animation-delay: ${delay};
	            animation-iteration-count: ${iterationCount};
	            animation-direction: ${direction};
	            animation-fill-mode: ${fillMode};
	            animation-play-state: ${playState};
	        `}
	     `;

		return (
			<AnimatedComponent />
		);
	}
};


export default Animate;