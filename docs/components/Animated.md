<b>Examples:</b>

Usage:

```js static
const AnimatedButton = <Button>Animate Button</Button>;

render(
  <Animated component={AnimatedButton} animation={{
        name: 'rotate',
        duration: '3s',
        iterationCount: 'infinite',
        timingFunction: 'linear'
    }} />
);
```

1. Simple Component Animation:

```js
initialState = { toggleAnimation: true };
const AnimatedButton = <Button onClick={() => {
	setState({
	   toggleAnimation: !state.toggleAnimation 
	})
}}>Click Animated Button</Button>;
<Animated component={AnimatedButton} animation={{
	name: 'rotate',
	duration: '3s',
	iterationCount: 'infinite',
	timingFunction: 'linear',
	active: state.toggleAnimation 
}} />
```

```js
initialState = { toggleAnimation: true };
const AnimatedButton = <Button onClick={() => {
	setState({
	   toggleAnimation: true
	})
}}>Shake Me</Button>;
<Animated component={AnimatedButton} animation={{
	name: 'shake',
	duration: '500ms',
	iterationCount: 1,
	timingFunction: 'linear',
	fillMode: 'forwards',
	active: state.toggleAnimation 
}} />
```