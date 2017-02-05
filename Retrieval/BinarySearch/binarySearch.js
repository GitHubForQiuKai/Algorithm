/*
 *二分查找
 */
function binarySearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (upperBound >= lowerBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] > data) {
            upperBound = mid - 1;
        } else if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
var arr = [1, 23, 45, 67, 88, 991];
console.log(binarySearch(arr, 1));
