<h4>Examples:</h4>

* Simple Tooltip

```js
<Tooltip 
    title="Hey there!"
>
    <Button>Hover me!</Button>
</Tooltip>
```

* Tooltip Effect

```js
<Grid columns={2}>
    <Cell width={1} overflow>
        <h4>Fade</h4>
        <Tooltip 
            title="Hey there!"
            effect="fade"
        >
            <Button>Hover me!</Button>
        </Tooltip>
    </Cell>
    <Cell width={1} overflow>
        <h4>Expand</h4>
        <Tooltip 
            title="Hey there!"
            effect="expand"
        >
            <Button>Hover me!</Button>
        </Tooltip>
    </Cell>
</Grid>
```

* Tooltip Position

```js
<Grid columns={4}>
    <Cell width={1} overflow>
        <h4>Top</h4>
        <Tooltip 
            title="Hey there!"
            effect="fade"
            position="top"
        >
            <Button>Hover me!</Button>
        </Tooltip>
    </Cell>
    <Cell width={1} overflow>
        <h4>Bottom</h4>
        <Tooltip 
            title="Hey there!"
            effect="fade"
            position="bottom"
        >
            <Button>Hover me!</Button>
        </Tooltip>
    </Cell>
    <Cell width={1} overflow>
        <h4>Left</h4>
        <Tooltip 
            title="Hey there!"
            effect="fade"
            position="left"
        >
            <Button>Hover me!</Button>
        </Tooltip>
    </Cell>
    <Cell width={1} overflow>
        <h4>Right</h4>
        <Tooltip 
            title="Hey there!"
            effect="fade"
            position="right"
        >
            <Button>Hover me!</Button>
        </Tooltip>
    </Cell>
</Grid>
```

* Fixed Width Tooltip

```js
<Tooltip 
    title="Irish girl and Irish boy. Is all you need to break toys. That's all you need. That's all you want. That's all you need. Inside this grief."
    width="150px"
>
    <Button>Hover me!</Button>
</Tooltip>
```