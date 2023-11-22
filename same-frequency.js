// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const freq1 = freqCounter(num1.toString())
    const freq2 = freqCounter(num2.toString())

    for ([key, val] of freq1) {
        if (freq2.get(key) != val) return false
        freq2.delete(key)
    }

    if (freq2.size) return false

    return true
}

function freqCounter(str) {
    let freqMap = new Map()

    for (char of str) {
        let freq = freqMap.get(char)
        if (freq) freqMap.set(char, freq + 1)
        else freqMap.set(char, 1)
    }

    return freqMap
}

module.exports = sameFrequency