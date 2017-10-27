<b>Examples:</b>

```js
<Grid columns={3} gap="8px">
    <Cell width={1}>
        <Card>
            <CardHeader 
                title="Irish Girl lyrics" 
                subtitle="The Trees and the Wild"
             />
             <CardBody>
                 Irish girl and Irish boy. Is all you need to break toys. That's all you need. That's all you want. That's all you need. Inside this grief.
              </CardBody>
             <CardImage
                src="https://placeimg.com/320/240/animals"
             />
        </Card>
    </Cell>
    <Cell width={1}>
        <Card>
            <CardImage
                src="https://placeimg.com/320/240/arch/5"
             />
            <CardHeader 
                title="Irish Girl lyrics" 
                subtitle="The Trees and the Wild"
             />
        </Card>
    </Cell>
    <Cell width={1}>
        <Card>
            <CardHeader 
                title="Irish Girl lyrics" 
                subtitle="The Trees and the Wild"
             />
             <CardBody>
                Irish girl and Irish boy. Is all you need to break toys. That's all you need. That's all you want. That's all you need. Inside this grief.
             </CardBody>
             <CardFooter
                left={
                	<Button>Share</Button>
                }
                right={
                	<Button 
                	    primary
                	    left={
                	    	<Icon
                                name="play-circle"
                                size="small"
                            />
                	    }
                	>Play</Button>
                }
             />
        </Card>
    </Cell>
    <Cell width={1}>
        <Card>
            <CardImage
                src="https://i.pinimg.com/564x/04/11/f9/0411f9b687c4e6a6d7fc6dd9b83a8418.jpg"
                overlay={{
                	title: 'Sydney',
                	subtitle: 'Australia'
                }}
             />
        </Card>
    </Cell>
</Grid>
```