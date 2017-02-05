/*
 *快速排序
 */
function quickSort(arr) {
    if (arr.length <= 0) {
        return [];
    }
    var basicPoint = arr[0]; //选取第一个元素作为基准点
    var larger = []; //较基准点大的
    var smaller = []; //较基准点小的
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > basicPoint) {
            larger.push(arr[i]);
        } else {
            smaller.push(arr[i]);
        }
    }
    return quickSort(smaller).concat(basicPoint, quickSort(larger));;
}
var arr = [12, 3, 4, 55, 42, 6, 41, 8, 16]; //数据源
console.log(quickSort(arr));
