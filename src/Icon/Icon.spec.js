import React, { h } from 'preact';
import { createShallowRenderer, simulate } from '../test-helpers';
import Icon from './Icon';

test('Icon Component', async () => {
    // shallow rendering
    let render = createShallowRenderer();
    render(
        <Icon name="smile-o" size="xsmall" onClick="{callback}" />,
        document.body
    );

    // with shallow rendering, the <Icon> becomes <h-styledcomponent> because we use
    // styled components
    let icon = document.querySelector('h-styledcomponent');
    expect(icon.getAttribute('size')).toBe('xsmall');
    expect(icon.getAttribute('name')).toBe('smile-o');
});
