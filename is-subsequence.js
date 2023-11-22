// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let idx1 = 0
    let idx2 = 0
    let copyString = ''

    while (idx2 < str2.length && idx1 < str1.length) {
        if (str2[idx2] == str1[idx1]) {
            copyString += str1[idx1]
            idx1++
        }
        idx2++
    }

    return copyString == str1
}


console.log(
    isSubsequence('hello', 'hello world'),
    isSubsequence('sing', 'sting'),
    isSubsequence('abc', 'abracadabra'),
    isSubsequence('abc', 'acb')
)

module.exports = isSubsequence