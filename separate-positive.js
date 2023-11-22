// add whatever parameters you deem necessary
function separatePositive(arr) {
    let lidx = 0
    let ridx = arr.length - 1

   while (lidx < ridx) {

        if (arr[lidx] > 0) {
            lidx++
        } else if (arr[ridx] < 0) {
            ridx--
        } else {
            temp = arr[ridx]
            arr[ridx] = arr[lidx]
            arr[lidx] = temp
            lidx++
            ridx--
        }

    }

    return arr

}

console.log(
    separatePositive([2, -1, -3, 6, -8, 10]),
    separatePositive([5, 10, -15, 20, 25]),
    separatePositive([-5, 5]),
    separatePositive([1, 2, 3])
)

module.exports = separatePositive
