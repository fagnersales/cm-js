const replaceAllOcurrences = (message, holders, index = 1) => index > holders.length ? message : replaceAllOcurrences(
    message.replace(`%${index}`, holders[index - 1]),
    holders,
    index + 1
)

const replaceHolders = (message, ...holders) => {
    if (typeof message !== 'string') throw new Error("Parameter message is not a string")
    const invalidHolder = holders.find(holder => !['string', 'number'].includes(typeof holder))
    if (invalidHolder) throw new Error(`Invalid holder: ${invalidHolder}`)
    return replaceAllOcurrences(message, holders)
}

module.exports = replaceHolders
