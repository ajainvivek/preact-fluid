import { keyframes } from 'styled-components';

const slideRightLeft = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
  
  35% {
    transform-origin: 0 0;
    transform: translateX(100%);
  }

  70% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }

  100% {
    transform-origin: 0 0;
    transform: translateX(-100%);
  }
`;

export default slideRightLeft;