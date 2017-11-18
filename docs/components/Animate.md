<b>Examples:</b>

Usage:

```js static
const AnimatedButton = <Button>Animate Button</Button>;

render(
  <Animate component={AnimatedButton} animation={{
        name: 'rotate',
        duration: '3s',
        iterationCount: 'infinite',
        timingFunction: 'linear'
    }} />
);
```

1. Simple Component Animation:

```js
const AnimatedButton = <Button 
    rounded 
    style={
    `
        padding: 10px;
        height: 64px;
        width: 64px;
        border-radius: 50%;
    `
    }
>
    <Icon
        name="thumbs-o-up"
        size="small"
    />
</Button>;
<Animate component={AnimatedButton} animation={{
	name: 'pulseShadow',
	duration: '3s',
	iterationCount: 'infinite',
	timingFunction: 'linear'
}} />
```

```js
initialState = { toggleAnimation: true };
const AnimatedButton = <Button onClick={() => {
	setState({
	   toggleAnimation: true
	})
}}>Shake Me</Button>;
<Animate component={AnimatedButton} animation={{
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
	    border-radius: 50%;
	    height: 64px;
	    width: 64px;
	`
}>
    <Icon
        name="hand-peace-o"
        size="small"
    />
</Button>;
<Animate component={AnimatedButton} animation={{
	name: 'pop',
	duration: '500ms',
	iterationCount: 1,
	timingFunction: 'linear',
	fillMode: 'forwards',
	active: state.toggleAnimation 
}} />
```

```js
initialState = { 
	toggleAnimation: true,
	animation: 'slideIn'
};
const AnimatedCard = (image) => {
	return (
		<Card>
		  <CardImage
             src={`https://placeimg.com/320/240/any/${image}`}
          />
          <CardHeader 
              title="Irish Girl lyrics" 
              subtitle="The Trees and the Wild"
           />
           <CardBody>
               Irish girl and Irish boy. Is all you need to break toys. That's all you need. That's all you want. That's all you need. Inside this grief.
           </CardBody>
       </Card>
	);
};
    
<Grid columns={3} gap="8px">
    <Cell width={3}>
        <Button onClick={() => {
        	setState({
        	    toggleAnimation: true,
        	    animation: state.animation === 'slideIn' ? 'slideOut' : 'slideIn'
        	})
        }}>{state.animation === 'slideIn' ? 'Slide Out' : 'Slide In'}</Button>
    </Cell>
    <Cell width={1}>
        <Animate component={AnimatedCard(1)} animation={{
        	name: state.animation,
        	duration: '800ms',
        	iterationCount: 1,
        	timingFunction: 'ease-in-out',
        	fillMode: 'forwards',
        	active: state.toggleAnimation 
        }} />
    </Cell>
</Grid>       
```

```js
initialState = { 
	toggleAnimation: true,
	animation: 'moveUp'
};
const AnimatedCard = (image) => {
	return (
		<Card>
		  <CardImage
              src={`https://placeimg.com/320/240/any/${image}`}
          />
          <CardHeader 
              title="Irish Girl lyrics" 
              subtitle="The Trees and the Wild"
           />
           <CardBody>
               Irish girl and Irish boy. Is all you need to break toys. That's all you need. That's all you want. That's all you need. Inside this grief.
            </CardBody>
       </Card>
	);
};
    
<Grid columns={3} gap="8px">
    <Cell width={3}>
        <Grid columns={2}>
            <Cell width={1}>
                <Button onClick={() => {
                    setState({
                        toggleAnimation: true,
                        animation: lodash.sample(['fadeIn', 'fallPerspective', 'flip', 'helix', 'moveUp', 'scaleUp', 'vanishIn'])
                    })
                }}>Random Animation</Button>
            </Cell>
            <Cell width={1} center middle style={{background: "#ccc"}}>
                <span style={{color: '#e85600', fontWeight: 'bold'}}>{state.animation}</span>
            </Cell>
        </Grid>
    </Cell>
    <Cell width={1}>
        <Animate component={AnimatedCard(1)} animation={{
        	name: state.animation,
        	duration: '800ms',
        	iterationCount: 1,
        	timingFunction: 'ease-in-out',
        	fillMode: 'forwards',
        	active: state.toggleAnimation 
        }} />
    </Cell>
    <Cell width={1}>
        <Animate component={AnimatedCard(2)} animation={{
            name: state.animation,
            duration: '800ms',
            iterationCount: 1,
            timingFunction: 'ease-in-out',
            fillMode: 'forwards',
            active: state.toggleAnimation 
        }} />
    </Cell>
    <Cell width={1}>
        <Animate component={AnimatedCard(3)} animation={{
            name: state.animation,
            duration: '800ms',
            iterationCount: 1,
            timingFunction: 'ease-in-out',
            fillMode: 'forwards',
            active: state.toggleAnimation 
        }} />
    </Cell>
</Grid>       
```
