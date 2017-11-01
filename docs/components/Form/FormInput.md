<b>Examples:</b>

```js
<div style={`width: 80%;`} className="form-wrapper" >
    <FormInput 
        label="Default Input"
        placeholder="Placeholder"
        grid={{
            columns: '1fr 2fr'
        }} 
        cell={{
            middle: true
        }}
    />
    
    <FormInput
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
    
    <FormInput
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
    
    <FormInput
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
</div>
```