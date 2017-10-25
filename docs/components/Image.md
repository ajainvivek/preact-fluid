<b>Examples:</b>

```js
<Grid columns={3} gap="8px">
    <Cell width={1}>
        <h4>With preload placeholder</h4>
        <Image
            responsive={[
                {
                    src: "./cat-640-480.jpeg",
                    media: "(min-width: 320px)"
                }
            ]}
            placeholder="./cat-placeholder.jpeg"
            src="./cat-320-240.jpeg"
        />
    </Cell>
    <Cell width={1}>
        <h4>Without preload placeholder</h4>
        <Image
            responsive={[
                {
                    src: "./cat-640-480.jpeg",
                    media: "(min-width: 320px)"
                }
            ]}
            src="./cat-320-240.jpeg"
        />
    </Cell>
    <Cell width={1}>
        <h4>Without responsive image loading</h4>
        <Image
            src="./cat-320-240.jpeg"
        />
    </Cell>
</Grid>
```