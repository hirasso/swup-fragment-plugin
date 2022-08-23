# Swup Fragment Plugin

[Check out a the demo here](https://test.rassohilber.com/swup-fragment-plugin/test/)

## ⛔️ Warning
This is a core-feature plugin for [Swup](https://github.com/swup/swup). It is highly experimental and subject to frequent breaking changes. Do not use in production!

## Installation
This plugin should be installed directly from GitHub, for now:

```shell
npm install hirasso/swup-fragment-plugin --save
```

## Usage
To run this plugin, include an instance in the swup options.

```javascript
import Swup from 'swup';
import SwupDebugPlugin from '@swup/fragment-plugin';

const swup = new Swup({
  plugins: [new FragmentPlugin()]
});
```

If both the current page as well as the requested page contains elements with the attribute `[data-swup-fragment]` and a matching `[id]`, only these elements will be swapped by swup. 

To prevent transitions on links pointing towards URLs that contain one (or more) fragment, these links need `[data-swup-skip-transition]` added.

Then, in your css, you can "skip" the default transitions like this:

```css
/* Let's say the default animation is a fade: */
.transition-main {
  transition-property: opacity;
  transition-duration: 200ms;
  opacity: 1;
}
html.is-animating .transition-main {
  opacity: 0;
}
/* Then this is how we can skip the transition: */
html.skip-transition .transition-main {
  transition-duration: 0.1ms;
}
html.is-animating.skip-transition .transition-main,
html.is-leaving.skip-transition .transition-main {
  opacity: 0.99;
}
```