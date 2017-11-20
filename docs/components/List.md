<b>Examples:</b>

```js
const sections = [
    [
        {
            active: 'true',
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

const customHeaderProfile = (
    <div>
        <Image
            src="https://avatars1.githubusercontent.com/u/1182600?s=460&v=4"
            style={`height: 60px; width: 60px;float: left; margin-right: 20px;`}
            rounded
        />
        <h3 style={{float: 'left'}}>Ajain Vivek</h3>
    </div>
);

const customHeaderSearch = (
    <TextField
        placeholder="Search"
        effect="lineOutwards" 
        hideLabel
        icon={
            <Icon
                name="search"
                size="xsmall"
            />
        }
        cell={{
            middle: true,
            width: 12
        }}
    />
);

const listSections = () => {
    return sections.map((section) => {
        const items = section.map((item) => (
            <ListItem
                active={item.active}
                left={
                    <Icon
                        name={item.iconName}
                        size="xsmall"
                    />
                }
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

<Grid columns={3} gap="8px">
    <Cell width={1}>
        <List>
            <ListHeader title="Title" subtitle="Sub Title"/>
           {listSections()}
        </List>
    </Cell>

    <Cell width={1}>
        <List>
            <ListHeader custom={
                customHeaderProfile
            }/>
            {listSections()}
        </List>
    </Cell>
    <Cell width={1}>
        <List>
            <ListHeader custom={
                customHeaderSearch
            }/>
            {listSections()}
        </List>
    </Cell>
    <Cell width={1}>
        <List>
           {listSections()}
        </List>
    </Cell>
    <Cell width={1}>
        <List>
           {listSections()}
           <ListFooter
                left={
                	<Button>Share</Button>
                }
                right={
                	<Button 
                	    primary
                	    left={
                	    	<Icon
                                name="play-circle"
                                size="xsmall"
                            />
                	    }
                	>Play</Button>
                }
           />
        </List>
    </Cell>
</Grid>
```