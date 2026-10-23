import Dropdown from './Dropdown';

function createDropdown(props = {}) {
    const dropdown = new Dropdown(props);
    dropdown.state = { isOpened: false };
    dropdown.setState = (state, callback) => {
        dropdown.state = { ...dropdown.state, ...state };
        if (callback) {
            callback();
        }
    };
    return dropdown;
}

test('opens when the optional callback is omitted', () => {
    const dropdown = createDropdown();

    expect(() => dropdown.openDropdown()).not.toThrow();
    expect(dropdown.state.isOpened).toBe(true);
});

test('invokes the open callback only once', () => {
    const openDropdown = jest.fn(() => () => {});
    const dropdown = createDropdown({ openDropdown });

    dropdown.openDropdown();

    expect(dropdown.state.isOpened).toBe(true);
    expect(openDropdown).toHaveBeenCalledTimes(1);
});
