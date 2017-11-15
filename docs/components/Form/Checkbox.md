<b>Examples:</b>

* Default Checkbox - Simple

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
        <Checkbox
            checked={state.checked}
            value="light"
            label="Simple Checkbox"
            onChange={toggleSelection}
        />
    </div>
```