# Methods for solve one of your problems!

### Install me using the command:
```shell
npm i cm-js
```

```javascript
const cmjs = require('cm-js')
```

### List of methods to use:

replaceHolders - Create custom messages with placeholders

```javascript
const cmjs = require('cm-js')

const message = cmjs.replaceHolders('Hello %1', 'World')
console.log(message)
// => Hello World
```