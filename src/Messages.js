const replaceHolders = require('./replaceHolders')
const { readFileSync } = require('fs')

class Messages {
    constructor() {
        this.messages = new Map()
    }

    add = (key, value) => {
        if (typeof key == 'string') {
            this.messages.set(key, value)
            return this.messages.get(key)
        }
        if (Array.isArray(key)) key.forEach((elements) => {
            if (Array.isArray(elements)) this.messages.set(elements[0], elements[1])
            else this.messages.set(elements.key, elements.value)
        })
    }

    remove = (key) => this.messages.delete(key)

    get = (key) => this.messages.get(key)

    getAndReplace = (key, ...holders) => replaceHolders(this.messages.get(key) || 'message not found', ...holders)

    addFromJson = (fullPath) => {
        const json = JSON.parse(readFileSync(fullPath, 'utf-8'))
        Object.keys(json).forEach((key) => this.add(key, json[key]))
    }

}

module.exports = new Messages