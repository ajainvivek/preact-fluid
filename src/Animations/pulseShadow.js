import { keyframes } from 'styled-components';

const pulseShadow = keyframes`
    0% {
	    box-shadow: 0 0;
	}
	
	30% {
	    box-shadow: 0 0;
	}
	
	80% {
	    box-shadow: 0 0 5px 10px rgba(255,255,255,0);
	}
	
	100% {
	    box-shadow: 0 0 0 0 rgba(255,255,255,0);
	}
`;

export default pulseShadow;