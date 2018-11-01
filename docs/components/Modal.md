

<b>Examples:</b>

```js
const handleOk = () => {
  // do your stuff here
  modal.hide()
}

const handleCancel = () => {
  modal.hide()
}

const showModal = () => {
    modal.show(
        <Card style={{width: 400}}>
          <CardHeader 
              title="Modals Are Cool" 
              subtitle="Super-cool"
           />
           <CardBody>
              This is a modal-card.
           </CardBody>
           <CardFooter
              left={
                <Button onClick={handleCancel}> Cancel </Button>
              }
              right={
                <Button primary onClick={handleOk}> Ok </Button>
              }
            />
          </Card>
    ) 
};

<div>
    <Button onClick={showModal}> Click Here </Button>
    <Modal id="unique-id-1" ref={(comp) => modal = comp}/>
</div>
```