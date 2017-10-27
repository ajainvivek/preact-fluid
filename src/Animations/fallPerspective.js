import { keyframes } from 'styled-components';

const fallPerspective = keyframes`
    0% {
        opacity: 0;
        transform-style: preserve-3d;
        transform: translateZ(400px) translateY(300px) rotateX(-90deg);
    }

    100% {
        transform: translateZ(0px) translateY(0px) rotateX(0deg);
        opacity: 1;
    }
`;

export default fallPerspective;