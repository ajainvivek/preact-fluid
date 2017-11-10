import { keyframes } from 'styled-components';

const slideInRight = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateX(100%);
  }

  100% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
`;

export default slideInRight;