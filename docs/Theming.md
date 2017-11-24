<b>Predefined Theme:</b>

Default theme is located under `preact-fluid/src/theme`.

<b>Custom Theme:</b>
 
Custom themes can be defined by using `ThemeProvider` as described in the usage below. 

```jsx static

import { ThemeProvider } from 'preact-fluid';

const theme = {
    primaryColor: "#E91E63",
    primaryColorDark: '#C2185B',
    primaryColorLight: '#F8BBD0',
    secondaryColor: '#E91E63',
    secondaryColorDark: '#C2185B',
    secondaryColorLight: '#F8BBD0',
    linkColor: '#E040FB',
    linkColorDark: '#E040FB',
    darkColor: '#212121',
    lightColor: '#fffff',
    grayColor: '#757575',
    grayColorLight: '#757575',
    grayColorDark: '#757575',
    borderColor: '#BDBDBD',
    borderColorDark: '#BDBDBD',
    bgColor: '#FFFFFF',
    bgColorDark: '#CCCCCC',
    bgColorLight: '#FFFFFF',
    controlSuccessColor: '#32b643',
    controlWarningColor: '#ffb700',
    controlErrorColor: '#e85600',
    codeColor: '#e06870',
    highlightColor: '#ffe9b3',
    notifyBgColor: '#ececec'
};

<ThemeProvider theme={theme}>
    <Button primary>Default Button</Button>
</ThemeProvider>

```

```js
const theme = {
    primaryColor: "#E91E63",
    primaryColorDark: '#C2185B',
    primaryColorLight: '#F8BBD0',
    secondaryColor: '#E91E63',
    secondaryColorDark: '#C2185B',
    secondaryColorLight: '#F8BBD0',
    linkColor: '#FFFFFF',
    linkColorDark: '#E040FB',
    darkColor: '#212121',
    lightColor: '#fffff',
    grayColor: '#757575',
    grayColorLight: '#757575',
    grayColorDark: '#757575',
    borderColor: '#BDBDBD',
    borderColorDark: '#BDBDBD',
    bgColor: '#FFFFFF',
    bgColorDark: '#CCCCCC',
    bgColorLight: '#FFFFFF',
    controlSuccessColor: '#32b643',
    controlWarningColor: '#ffb700',
    controlErrorColor: '#e85600',
    codeColor: '#e06870',
    highlightColor: '#ffe9b3',
    notifyBgColor: '#ececec'
};
<ThemeProvider theme={theme}>
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
</ThemeProvider>
```

<b>ThemeProvider</b>

This component takes a theme as a property and passes it down with context. This should preferably be at the root of your component tree. The example demonstrates it's usage.