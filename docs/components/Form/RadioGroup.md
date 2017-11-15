<b>Examples:</b>

* Radio Group - Selection

```js
    <RadioGroup label="Choose Gender">
        <Radio
            value="male"
            label="Male"
        />
        <Radio
            value="female"
            label="Female"
        />
    </RadioGroup>
```

* Radio Group - Horizontal

```js
    <RadioGroup label="Choose Color" horizontal>
        <Radio
            value="red"
            label="Red"
            bgColor="#d43838"
        />
        <Radio
            value="blue"
            label="Blue"
            bgColor="#3a3abb"
        />
    </RadioGroup>
```

* Radio Group - Full width without label

```js
    <RadioGroup 
        hideLabel 
        horizontal 
        cell={{
            middle: true,
            width: 12
        }}
    >
        <Radio
            value="red"
            label="Red"
            bgColor="#d43838"
            effect="circle"
        />
        <Radio
            value="blue"
            label="Blue"
            bgColor="#3a3abb"
            effect="circle"
        />
    </RadioGroup>
```