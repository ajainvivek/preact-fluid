import React, { options as preactOptions, render, h } from 'preact';

let shouldRenderShallow;
let previousVNodeHook;

// wrap the Preact.render() to make it render shallow with a vnode hook
// adapted from https://gist.github.com/robertknight/88e9d10cff9269c55d453e5fb8364f47
export function createShallowRenderer({ prefix = 'h-', context = {} } = {}) {
    shouldRenderShallow = 2;
    const vnodeHook = node => {
        if (previousVNodeHook) {
            previousVNodeHook(node);
        }
        if (typeof node.nodeName === 'string') {
            return;
        }
        if (shouldRenderShallow <= 0) {
            node.nodeName = prefix + node.nodeName.name;
        }
        shouldRenderShallow--;
    };
    preactOptions.vnode = vnodeHook;
    return (vnode, parent, merge) => {
        const vnodeWithContext = h(ContextWrapper, { context }, vnode);
        render(vnodeWithContext, parent, merge);
        preactOptions.vnode = previousVNodeHook;
    };
}

// handy function to dispatch events and return a promise which is resolved after next tick
export function simulate(node, event) {
    // pass a selector or a dom node
    if (typeof node === 'string') {
        node = document.querySelector(node);
    }

    // pass an event object or an event name
    event = event instanceof window.Event ? event : new window.Event(event);
    node.dispatchEvent(event);
    // return a promise that resolves on next tick so the invoking code see the update
    return new Promise(resolve => {
        process.nextTick(() => {
            resolve();
        });
    });
}

// wraps the node under test so a test context can be injected
function ContextWrapper({ context, children }) {
    this.context = Object.assign(this.context, context);
    return <div> {children} </div>;
}
