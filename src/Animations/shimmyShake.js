import { keyframes } from 'styled-components';

const shimmyShake = keyframes`
    0% {
        transform: translateX(-1%)
    }

    20% {
        transform: translateX(1%)
    }

    40% {
        transform: translateX(-1%)
    }

    60% {
        transform: translateX(1%)
    }

    80% {
        transform: translateX(-1%)
    }

    100% {
        transform: translateX(0)
    }
`;

export default shimmyShake;