<b>Examples:</b>

1. Default AppBar:

```js
<AppBar
    title="Preact Fluid"
    icon=""
/>
```

2. Primary AppBar:

```js
const logoutBtn = <Button>Logout</Button>;
const welcomeBtn = <Button>Welcome</Button>;
<AppBar
    title="Preact Fluid"
    titleStyle={{color: 'white', padding: '0 10px'}}
    icon=""
    rightElement={logoutBtn}
    leftElement={welcomeBtn}
    primary
/>
```