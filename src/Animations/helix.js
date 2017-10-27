import { keyframes } from 'styled-components';

const helix = keyframes`
    0% {
        opacity: 0;
        transform-style: preserve-3d;
        transform: rotateY(-180deg);
    }

    100% {
        transform: rotateY(0deg);
        opacity: 1;
    }
`;

export default helix;