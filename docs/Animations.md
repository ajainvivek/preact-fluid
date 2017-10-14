A bunch of CSS3 animations with special effects.

Usage with styled components

```js static
import {Animations} from 'preact-fluid';
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
	display: inline-block;
	animation: ${Animations.rotate} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 1.2rem;
`;
render(
	<Rotate>Hello World!</Rotate>
);
```

| Supported Animations  |
| ------------- |
| slideUp, slideDown, slideLeft, slideRight, shake, rotate, puffIn, puffOut, perspectiveDown, perspectiveUp, perspectiveLeft, perspectiveRight, vanishIn, vanishOut  |
