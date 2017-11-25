import styled, {css} from 'styled-components';
import defaultTheme from '../theme';

const StyledTooltip = styled.div`
	position: relative;
	display: table;
	cursor: pointer;
	
	&:before,
	&:after {
		display: block;
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	
	&:after {
	    content: '';
	    height: 0;
	    width: 0;
	    
	    ${props => props.position === 'top' && css`
	        border-right: 6px solid transparent;
			border-top: 6px solid rgba(0,0,0,.75); 
		    border-left: 6px solid transparent;
	        bottom: 100%;
	        left: 50%;
		    margin-bottom: 5px;
		`}
	    
	    ${props => props.position === 'bottom' && css`
		    border-right: 6px solid transparent;
			border-bottom: 6px solid rgba(0,0,0,.75); 
		    border-left: 6px solid transparent;
	        top: 100%;
	        left: 50%;
		    margin-top: 5px;
		`}
		
		${props => props.position === 'left' && css`
		    border-top: 6px solid transparent;
			border-left: 6px solid rgba(0,0,0,.75); 
		    border-bottom: 6px solid transparent;
	        top: 50%;
	        right: 100%;
		    margin-right: 5px;
		`}
		
		${props => props.position === 'right' && css`
		    border-top: 6px solid transparent;
			border-right: 6px solid rgba(0,0,0,.75); 
		    border-bottom: 6px solid transparent;
	        top: 50%;
	        left: 100%;
		    margin-left: 5px;
		`}
	}
	
	&:before {
		background: rgba(0,0,0,.75);
		border-radius: 4px;
		color: #fff;
		content: attr(data-title);
		font-size: 14px;
		padding: 6px 10px;
		white-space: nowrap;
		
		${props => props.position === 'top' && css`
			bottom: 100%;
			left: 50%;
		    margin-bottom: 11px;
		`}
		
		${props => props.position === 'bottom' && css`
			top: 100%;
			left: 50%;
		    margin-top: 11px;
		`}
		
		${props => props.position === 'left' && css`
			top: 50%;
	        right: 100%;
		    margin-right: 11px;
		`}
		
		${props => props.position === 'right' && css`
			top: 50%;
	        left: 100%;
		    margin-left: 11px;
		`}
		
		${props => props.width  && css`
		    width: ${props.width};
		    white-space: normal;
		`}
	}
	
	&.fade:after,
	&.fade:before {
		transition: all .15s ease-in-out;
		
		${props => props.position === 'top' && css`
		    transform: translate3d(-50%,-10px,0);
		`}
		
		${props => props.position === 'bottom' && css`
		    transform: translate3d(-50%,-10px,0);
		`}
		
		${props => props.position === 'left' && css`
		    transform: translate3d(-10px, -50%, 0);
		`}
		
		${props => props.position === 'right' && css`
		    transform: translate3d(-10px, -50%, 0);
		`}
	}
	
	&.fade:hover:after,
	&.fade:hover:before {
		opacity: 1;
		
		${props => props.position === 'top' && css`
		    transform: translate3d(-50%,0,0);
		`}
		
		${props => props.position === 'bottom' && css`
		    transform: translate3d(-50%,0,0);
		`}
		
		${props => props.position === 'left' && css`
		    transform: translate3d(0,-50%,0);
		`}
		
		${props => props.position === 'right' && css`
		    transform: translate3d(0,-50%,0);
		`}
	}
	
	&.expand:before {
		transition: all .2s ease-in-out;
		
		${props => props.position === 'top' && css`
		    transform: translate3d(-50%,0,0) scale3d(.2,.2,1);
		`}
		
		${props => props.position === 'bottom' && css`
		    transform: translate3d(-50%,0,0) scale3d(.2,.2,1);
		`}
		
		${props => props.position === 'left' && css`
		    transform: translate3d(0,-50%,0) scale3d(.2,.2,1);
		`}
		
		${props => props.position === 'right' && css`
		    transform: translate3d(0,-50%,0) scale3d(.2,.2,1);
		`}
	}
	
	&.expand:after {
		transition: all .1s ease-in-out;
		
		${props => props.position === 'top' && css`
		    transform: translate3d(-50%,0,0);
		`}
		
		${props => props.position === 'bottom' && css`
		    transform: translate3d(-50%,0,0);
		`}
		
		${props => props.position === 'left' && css`
		    transform: translate3d(0,-50%,0);
		`}
		
		${props => props.position === 'right' && css`
		    transform: translate3d(0,-50%,0);
		`}
	}
	
	&.expand:hover:before,
	&.expand:hover:after {
		opacity: 1;
		${props => props.position === 'top' && css`
		    transform: translate3d(-50%,0,0) scale3d(1,1,1);
		`}
		
		${props => props.position === 'bottom' && css`
		    transform: translate3d(-50%,0,0) scale3d(1,1,1);
		`}
		
		${props => props.position === 'left' && css`
		    transform: translate3d(0,-50%,0) scale3d(1,1,1);
		`}
		
		${props => props.position === 'right' && css`
		    transform: translate3d(0,-50%,0) scale3d(1,1,1);
		`}
	}
	
	&.expand:hover:after {
		transition: all .2s .1s ease-in-out;
	}
	
	${props => props.style && css`
		${props.style}
	`}
`;

StyledTooltip.defaultProps = {
	theme: defaultTheme
};

export {
	StyledTooltip
};