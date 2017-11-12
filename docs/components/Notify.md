<b>Examples:</b>

```js

const addNotification = () => {
    notification.add({
        title: "New Message",
        message: "File sent successfully.",
        type: "info"
    });	
};

<div>
    <Button onClick={addNotification}> Add Notification </Button>
    <Notify id="unique-id-1" ref={(comp) => notification = comp}/>
</div>
```