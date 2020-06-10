# Methods for solve one of your problems!

### Install me using the command:
```shell
npm i @fagnersales/cm-js
```

```javascript
const cmjs = require('@fagnersales/cm-js')
```

### List of methods to use:

First we need to save all your messages before start using them, check the example below:

```javascript
// Directly
cmjs.messages.add('key', 'value')

// Array of Arrays
cmjs.messages.add([
    ['Array', 'of Arrays']
])

// Array of Objects
cmjs.messages.add([
    { key: 'Object', value: 'inside Array' }
])

// Object
cmjs.messages.add({
    "Hi from": "Object"
})

// Path literal for JSON file
const { join } = require('path')
cmjs.messages.add(join(__dirname, 'src', 'messages.json'))

console.log(cmjs.messages.messages)

// 'key' => 'value',
// 'Array' => 'of Arrays',
// 'Object' => 'inside Array',
// 'Hi from' => 'Object',
// 'Path' => 'Literal'
```

After saving them, you can use with the method `get` which allows you to use placeholders inside it, look at the example below:

```javascript
cmjs.messages.add('Awesome Project', 'This project is %1, don\'t you think?')

const result = cmjs.messages.get('Awesome Project', 'AWESOME')
console.log(result)
// => This project is AWESOME, don't you think?
```

If you are a Discord Programmer we have something to make your work easier!
Since you already saved your messages, you can use the key (holders are optional) like this:
```javascript
cmjs.messages.add('Awesome Bot', 'I am an awesome bot and you can\'t disagree!')

const send = cmjs.messages.discordSender(TextChannel)
send(`Awesome Bot`)
// Works as:
// TextChannel.send('I am an awesome bot and you can\'t disagree!')
// and returns Promise<Message>
```
