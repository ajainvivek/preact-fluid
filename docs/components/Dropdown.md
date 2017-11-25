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
   ref={(comp) => dropdown = comp}
>
    <Button>Dropdown</Button>
</Dropdown>
```