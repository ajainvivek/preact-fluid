<b>Examples:</b>

* Notification - Dismiss after 3 sec

```js
const addNotification = () => {
    notification.add({
        title: "New Message",
        message: "Hey there!",
        type: "info",
        autoDismiss: 3 //Default is 5sec
    });	
};

<div>
    <Button onClick={addNotification}> Click Here </Button>
    <Notify id="unique-id-1" ref={(comp) => notification = comp}/>
</div>
```

* Notification - Non dismissible

```js
const addNotification = () => {
    notification.add({
        title: "New Message",
        message: "Hey there!",
        type: "info",
        autoDismiss: 0 //Default is 5sec
    });	
};

<div>
    <Button onClick={addNotification}> Click Here </Button>
    <Notify id="unique-id-1" ref={(comp) => notification = comp}/>
</div>
```

* Notification with custom icon

```js
const addNotification = () => {
    notification.add({
        title: "New Message",
        message: "You have received a mail!",
        type: "info",
        iconName: 'envelope',
        iconSize: 'medium',
        iconColor: '#1D9C72'
    });	
};

<div>
    <Button onClick={addNotification}> Click Here </Button>
    <Notify id="unique-id-1" ref={(comp) => notification = comp}/>
</div>
```

* Notification with various type i.e info, success, error, warning

```js
const addNotification = (type, message) => {
    notification.add({
        title: "New Message",
        message,
        type
    });	
};

<div className="notification-wrapper">
    <Button onClick={() => {
        addNotification('info', 'You have received a mail!');
    }}> Info </Button> 
    <Button onClick={() => {
        addNotification('success', 'File sent successfully!');
    }}> Success </Button> 
    <Button onClick={() => {
        addNotification('error', 'Error uploading the image!');
    }}> Error </Button> 
    <Button onClick={() => {
        addNotification('warning', 'Do not update the record!');
    }}> Warning </Button> 
    <Notify id="unique-id-1" ref={(comp) => notification = comp}/>
</div>
```