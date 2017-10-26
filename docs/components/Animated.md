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
initialState = { animate: false };
const toggleAnimation = (animate) => {
	setState({
	    animate
	});
}
const AnimatedButton = <Button onMouseEnter={() => {
	if (!state.animate) {
	    toggleAnimation(true);	
	}
}} onMouseOut={() => {
	toggleAnimation(false);
}}>Hover Animated Button</Button>;
<Animated component={AnimatedButton} animation={{
	name: 'pulseShadow',
	duration: '3s',
	iterationCount: 'infinite',
	timingFunction: 'linear',
	active: state.animate
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
```js
initialState = { toggleAnimation: true };
const AnimatedButton = <Button secondary onClick={() => {
	setState({
	   toggleAnimation: true
	})
}} style={
	`
	    padding: 10px;
	    border-radius: 100%;
	    height: 80px;
	    width: 80px;
	`
}>
    <Icon
        name="hand-peace-o"
        size="large"
    />
</Button>;
<Animated component={AnimatedButton} animation={{
	name: 'pop',
	duration: '500ms',
	iterationCount: 1,
	timingFunction: 'linear',
	fillMode: 'forwards',
	active: state.toggleAnimation 
}} />
```