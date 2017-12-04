<b>Examples:</b>

1. Default AppBar:

```js
<AppBar
    title="Preact Fluid"
/>
```

2. Primary AppBar:

```js
const logoutBtn = <Button secondary>Logout</Button>;
const welcomeBtn = <Button secondary>Welcome</Button>;
<AppBar
    title="Preact Fluid"
    titleStyle={{color: 'white', padding: '0 10px'}}
    rightSection={logoutBtn}
    leftSection={welcomeBtn}
    primary
/>
```