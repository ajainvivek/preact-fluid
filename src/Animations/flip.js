import { keyframes } from 'styled-components';

const flip = keyframes`
    0% {
        opacity: 0;
        transform-style: preserve-3d;
        transform-origin: 0% 0%;
        transform: rotateX(-80deg);
    }

    100% {
        transform: rotateX(0deg); 
        opacity: 1;
    }
`;

export default flip;
