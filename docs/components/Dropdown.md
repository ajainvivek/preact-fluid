<b>Examples:</b>

```js
const sections = [
    [
        {
            iconName: 'bookmark-o',
            text: 'Bookmark'
        },
        {
            iconName: 'commenting-o',
            text: 'Live Chat'
        }
    ],
    [
        {
            iconName: 'cog',
            text: 'Settings'
        },
        {
            iconName: 'sign-out',
            text: 'Logout'
        }
    ]
];

const selectItem = (item) => {
	console.log(item);
    dropdown.closeDropdown();
};

const listSections = () => {
    return sections.map((section) => {
        const items = section.map((item) => (
            <ListItem
                left={
                    <Icon
                        name={item.iconName}
                        size="xsmall"
                    />
                }
                onClick={selectItem}
            >
                {item.text}
            </ListItem>
        ));
        return (
            <ListSection>
                {items}
            </ListSection>
        );
    });
};

<Dropdown 
   component={
        <List>
           {listSections()}
        </List>
   }
   key='dropdown-1'
   ref={(comp) => dropdown = comp}
>
    <Button 
        rounded 
        style={
        `
            padding: 4px;
            height: 48px;
            width: 48px;
            border-radius: 50%;
        `
        }
    >
        <Icon
            name="cog"
            size="small"
        />
    </Button>
</Dropdown>
```


```js
initialState = {
    selectedCountry: 'Choose Country'	
};

const sections = [
    [
        {
        	iconName: 'flag',
            text: 'Australia'
        },
        {
        	iconName: 'flag',
            text: 'USA'
        },
        {
        	iconName: 'flag',
            text: 'INDIA'
        }
    ]
];

const selectItem = (item) => {
	setState({
	    selectedCountry: item.innerText
	}, () => {
		btndropdown.closeDropdown();
	});
};

const listSections = () => {
    return sections.map((section) => {
        const items = section.map((item) => (
            <ListItem
                left={
                    <Icon
                        name={item.iconName}
                        size="xsmall"
                    />
                }
                onClick={selectItem}
            >
                {item.text}
            </ListItem>
        ));
        return (
            <ListSection>
                {items}
            </ListSection>
        );
    });
};

<Dropdown 
   component={
        <List>
           {listSections()}
        </List>
   }
   key='dropdown-2'
   ref={(comp) => btndropdown = comp}
>
    <Button 
        primary
        right={
        	<Icon
                name="chevron-down"
                size="xsmall"
            />
        }
    >{state.selectedCountry}</Button>
</Dropdown>
```