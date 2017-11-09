<b>Examples:</b>

##### TextField Variations

```js
<div className="form-wrapper" >
    <TextField 
        label="Default Input"
        placeholder="Placeholder"
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
    />
    
    <TextField
        label="Animate Border"
        placeholder="Placeholder"
        effect="border" 
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
    />
    
    <TextField
        label="Animate Line Input"
        placeholder="Placeholder"
        effect="line" 
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
    />
    
    <TextField
        label="Animate Line Outwards Input"
        placeholder="Placeholder"
        effect="lineOutwards" 
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
    />

    <TextField
        label="Input with Icon"
        placeholder="Placeholder"
        effect="lineOutwards" 
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
        icon={
            <Icon
                name="search"
                size="small"
            />
        }
    />

    <TextField
        placeholder="Full Width Input"
        effect="lineOutwards" 
        grid={{
            columns: '0fr 1fr'
        }} 
        cell={{
            middle: true
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
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
        disabled
    />

    <TextField
        label="Disabled Value"
        value="Value"
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
        disabled
    />

    <TextField
        label="Disabled Line Input"
        placeholder="Placeholder"
        effect="lineOutwards" 
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
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
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
        errorText="This field is required"
    />

    <TextField
        label="Input Line Outwards"
        placeholder="Error Message"
        effect="lineOutwards" 
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
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
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
    />
```