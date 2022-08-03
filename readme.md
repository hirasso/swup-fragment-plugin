# Swup Fragment Plugin

## ⛔️ Warning
This plugin is highly experimental and subject to frequent breaking changes.

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

If both the current page as well as the requested page contains an element `[data-swup-fragment]` with an `[id]`, only this element will be swapped by swup.

To prevent transitions on links pointing towards URLs that contain a fragment, these links need `[data-swup-skip-transition]` added.

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