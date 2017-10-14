import React from 'preact';
import styled, { css } from 'styled-components';
import Animations from './../Animations';

/**
 * Wrapper for animating the external component
 *
 * @example ./../../docs/components/Animated.md
 */
const Animated = ({component, animation}) => {

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

	const AnimatedComponent = ({className}) => React.cloneElement(component, {
		className
	});

	const StyledComponent = styled(AnimatedComponent)`
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
        <StyledComponent />
    );
};


export default Animated;