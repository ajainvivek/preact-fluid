<b>Examples:</b>

```js
<Button>Default Button</Button>
```

```js
<Button rounded>Rounded Button</Button>
```

```js
<Button primary>Primary Button</Button>
```

```js
<Button secondary>Secondary Button</Button>
```

```js
<Button 
    primary
    left={
    	<Icon
            name="envelope-o"
            size="xsmall"
        />
    }
>Email</Button>
```

```js
<Button 
    primary
    right={
    	<Icon
            name="chevron-down"
            size="xsmall"
        />
    }
>Choose Country</Button>
```

Badge

```js
const badge = { value: 3 };

<Button primary badge={badge}>Primary Button</Button>
```

Loading

```js
<Button loading>Loading Button</Button>
```

```js
<Button primary loading>Loading Button</Button>
```