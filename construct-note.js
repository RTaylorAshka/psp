// add whatever parameters you deem necessary
function constructNote(note, letters) {
    const noteFreq = freqCounter(note)
    const lettFreq = freqCounter(letters)

    for ([key, val] of noteFreq) {
        if (!lettFreq.get(key)) return false
        if (lettFreq.get(key) < val) return false
    }

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

console.log(
    constructNote('aa', 'abc'),
    constructNote('abc', 'dcba'),
    constructNote('aabbcc', 'bcabcaddff')
)

module.exports = constructNote