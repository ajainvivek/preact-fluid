<b>Examples:</b>

* Default Radio - Simple Effect

```js
    initialState = {
        checked: true
    };
    const toggleSelection = () => {
        setState({
            checked: !state.checked
        });
    };
    <div>
        <Radio
            checked={state.checked}
            value="male"
            label="Simple Radio Button"
            onChange={toggleSelection}
        />
    </div>
```

* Radio - Circle Effect

```js
    initialState = {
            checked: true
        };
        const toggleSelection = () => {
            setState({
                checked: !state.checked
            });
        };
        <div>
            <Radio
                checked={state.checked}
            value="male"
            label="Circle Effect Radio Button"
            onChange={toggleSelection}
            effect="circle"
        />
    </div>
```

* Radio - Drop Effect

```js
    initialState = {
            checked: true
        };
        const toggleSelection = () => {
            setState({
                checked: !state.checked
            });
        };
        <div>
             <Radio
                checked={state.checked}
                value="male"
                label="Drop Effect Radio Button"
                onChange={toggleSelection}
                effect="drop"
            />
        </div>
```