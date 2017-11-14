<b>Examples:</b>

* Default Radio - Simple Effect

```js
    initialState = {
        selectedValue: 'male'
    };
    const toggleSelection = () => {
        setState({
            selectedValue: state.selectedValue === 'male' ? 'female' : 'male'
        });
    };
    <div>
        <Radio
            selectedValue={state.selectedValue}
            value="male"
            label="Simple Radio Button"
            onChange={toggleSelection}
        />
    </div>
```

* Radio - Circle Effect

```js
    initialState = {
        selectedValue: 'male'
    };
    const toggleSelection = () => {
        setState({
            selectedValue: state.selectedValue === 'male' ? 'female' : 'male'
        });
    };
    <div>
        <Radio
            selectedValue={state.selectedValue}
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
        selectedValue: 'male'
    };
    const toggleSelection = () => {
        setState({
            selectedValue: state.selectedValue === 'male' ? 'female' : 'male'
        });
    };
    <div>
        <Radio
            selectedValue={state.selectedValue}
            value="male"
            label="Drop Effect Radio Button"
            onChange={toggleSelection}
            effect="drop"
        />
    </div>
```