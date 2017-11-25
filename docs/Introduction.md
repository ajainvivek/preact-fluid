<p align="center">
<a href="https://ajainvivek.github.io/preact-fluid/" target="_blank">
<img alt="Preact Fluid" title="Preact Fluid" src="https://i.imgur.com/pZZG2Cm.png" width="550">
</a>
</p>
<p align="center">Minimal <b>UI Kit</b> for Preact, with reusable components.</p>

[![PeerDependencies](https://img.shields.io/david/peer/ajainvivek/preact-fluid.svg)](https://david-dm.org/ajainvivek/preact-fluid#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/ajainvivek/preact-fluid.svg)](https://david-dm.org/ajainvivek/preact-fluid)
[![DevDependencies](https://img.shields.io/david/dev/ajainvivek/preact-fluid.svg)](https://david-dm.org/ajainvivek/preact-fluid#info=devDependencies&view=list)
[![HitCount](http://hits.dwyl.io/ajainvivek/preact-fluid.svg)](http://hits.dwyl.io/ajainvivek/preact-fluid)

<iframe src="https://ghbtns.com/github-btn.html?user=ajainvivek&repo=preact-fluid&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
<iframe src="https://ghbtns.com/github-btn.html?user=ajainvivek&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220px" height="30px"></iframe>

## Installation

Preact Fluid is available as an [npm package](https://www.npmjs.com/package/preact-fluid).

```sh
npm install preact-fluid --save
```

## Usage

Here is a quick example to get you started, it's all you need:

```jsx static
import { render } from 'preact';
import { Button } from 'preact-fluid';

function App() {
  return (
    <Button>
            Hello World
        </Button>
  );
}

render(<App />, document.querySelector('#app'));
```