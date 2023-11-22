// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.
function averagePair(arr, target) {

    if (arr.length == 0) return false
    let lidx = 0;
    let ridx = arr.length - 1
    let avgHelper = () => { return (arr[lidx] + arr[ridx]) / 2 }

    while (lidx <= ridx) {
        let avg = avgHelper()
        if (avg == target) return true
        else if (avg < target) lidx++
        else ridx--
    }
    return false
}

console.log(
    averagePair([1, 2, 3], 2.5),
    averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8),
    averagePair([-1, 0, 3, 4, 5, 6], 4.1),
    averagePair([], 4)
)


module.exports = averagePair