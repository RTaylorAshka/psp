// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0
    let numSet = new Set(arr)

    numSet.forEach((v) => {

        let diff = target - v
        numSet.delete(v)
        if (numSet.has(diff)) {
            count++
            numSet.delete(diff)
        }

    })

    return count

}

console.log(
    countPairs([1, 2, 3, 4, 5], 10),
    countPairs([4, 6, 2, 7], 10)
)
module.exports = countPairs

