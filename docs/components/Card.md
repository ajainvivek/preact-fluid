<b>Examples:</b>

```js
<Grid columns={3} gap="8px">
    <Cell width={1}>
        <Card>
            <CardHeader 
                title="Card title" 
                subtitle="Card subtitle"
             />
             <CardImage
                src="https://placeimg.com/320/240/animals"
             />
        </Card>
    </Cell>
    <Cell width={1}>
        <Card>
            <CardImage
                src="https://placeimg.com/320/240/any"
             />
            <CardHeader 
                title="Card title" 
                subtitle="Card subtitle"
             />
        </Card>
    </Cell>
    <Cell width={1}>
        <Card>
            <CardHeader 
                title="Card title" 
                subtitle="Card subtitle"
             />
             <CardImage
                responsive={[
                    {
                        src: "https://placeimg.com/640/480/nature",
                        media: "(min-width: 320px)"
                    }
                ]}
                src="https://placeimg.com/320/240/nature"
             />
        </Card>
    </Cell>
</Grid>
```