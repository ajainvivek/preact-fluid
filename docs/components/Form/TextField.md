<b>Examples:</b>

```js
<div style={`width: 80%;`} className="form-wrapper" >
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
</div>
```