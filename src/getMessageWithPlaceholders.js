/*
 My problem here is that I want to collect specific messages
 putting variable values inside the text, for example:
 Input: This %1 is being %2 with some %3!
 Output: This message is being modified with some variables! 
*/

const messages = {
    '1': 'This %1 is being %2 with some %3!',
    '2': 'Hello %1',
    '3': 'foo %1',
    '4': 'Your message couldn\'t be delivered because: %1',
    '5': 'Write below your %1',
    '6': 'I really love to %1 %2'
}


const replaceAllOcurrences = (message, holders, index = 1) => index > holders.length ? message : replaceAllOcurrences(
    message.replace(`%${index}`, holders[index - 1]),
    holders,
    index + 1
)

const getMessage = (id, ...holders) => replaceAllOcurrences(messages[id] || 'message not found', holders)

// This function takes 0.200ms to 0.250ms
const data = getMessage('1', 'message', 'modified', 'variables')
console.log(data)
// => This message is being modified with some variables!

/*
const tests = [
    ['1', 'message', 'modified', 'variables'],
    ['2', 'World'],
    ['3', 'bar'],
    ['4', 'you need to connect to the internet, lol'],
    ['5', 'there is nothing here!']
]

for (const [index, test] of tests.entries()) 
console.log(`[${index}]Input   ->`, 
test, 
`\n[${index}]Message ->`, 
messages[index], 
`\n[${index}]Output  ->`, 
getMessage(...test), 
`\n`)
*/