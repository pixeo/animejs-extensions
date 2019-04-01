# animejs-extensions

## Installation
```bash
npm i -s @pixeo/animejs-extensions animejs@3 deepmerge@3
```

This package uses following browser functionalities that, depending on your support of browsers, whether or not should be polyfilled.
- InterectionObserver
- Array.reducer
- Array.isArray
- Array.indexOf
- Element.prototype.dataset

## Usage
```js
import animate from "animatejs-extensions";

animate(options);
```

## TODO
- Catch hover event
- Catch focus & blur event
- Catch multiple on events
- Cleanup
