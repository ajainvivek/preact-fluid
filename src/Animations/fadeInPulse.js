import { keyframes } from 'styled-components';

const fadeInPulse = keyframes`
    0% {
        opacity: 0;
        transform: scale(.8)
    }

    50% {
        opacity: 1
    }

    100%,70% {
        transform: scale(1)
    }
`;

export default fadeInPulse;
