<b>Examples:</b>

##### TextField Variations

```js
<div className="form-wrapper" >
    <TextField 
        label="Default Input"
        placeholder="Placeholder"
    />
    
    <TextField
        label="Animate Border"
        placeholder="Placeholder"
        effect="border" 
    />
    
    <TextField
        label="Animate Line Input"
        placeholder="Placeholder"
        effect="line" 
    />
    
    <TextField
        label="Animate Line Outwards Input"
        placeholder="Placeholder"
        effect="lineOutwards" 
    />

    <TextField
        label="Input with Icon"
        placeholder="Placeholder"
        effect="lineOutwards" 
        icon={
            <Icon
                name="search"
                size="xsmall"
            />
        }
    />

    <TextField
        placeholder="Full Width Input"
        effect="lineOutwards" 
        hideLabel
        cell={{
            middle: true,
            width: 12
        }}
    />
</div>
```

##### TextField Disabled

```js
<div className="form-wrapper" >
    <TextField
        label="Disabled Hint Text"
        placeholder="Placeholder"
        disabled
    />

    <TextField
        label="Disabled Value"
        value="Value"
        disabled
    />

    <TextField
        label="Disabled Line Input"
        placeholder="Placeholder"
        effect="lineOutwards" 
        disabled
    />
</div>
```

##### TextField Error Message

```js
<div className="form-wrapper" >
    <TextField
        label="Default Input"
        placeholder="Error Message"
        errorText="This field is required"
    />

    <TextField
        label="Input Line Outwards"
        placeholder="Error Message"
        effect="lineOutwards" 
        errorText="This field is required"
    />
</div>
```

##### TextField Controlled

```js
    initialState = { value: 'John Doe' };

    const handleChange = (input) => {
        setState({
            value: input.target.value
        });
    };

    <TextField
        label="Controlled Value"
        placeholder="Enter Your Name"
        value={state.value}
        onChange={handleChange}
    />
```