//构建大(小)顶堆
function BulidMaxHead(arr) {
    //遍历每个父节点
    for (var i = Math.floor(arr.length / 2); i >= 0; --i) {
        maxHeapify(arr, i, arr.length);
    }
}

//对堆的每个节点进行排序
function maxHeapify(arr, index, len) {
    var left = index * 2 + 1; //当前节点的左子节点
    var right = index * 2 + 2; //当前节点的右子节点
    var largest = index; //用于标志父节点、左子节点、右子节点中的最大的值
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != index) {
        swap(arr, index, largest);
        //交换之后，子节点可能错乱，递归子节点
        maxHeapify(arr, largest, len);
    }

}
//交换位置
function swap(arr, index, changeIndex) {
    var temp = arr[index];
    arr[index] = arr[changeIndex];
    arr[changeIndex] = temp;
}

//堆排序
function HeapSort(arr) {
    BulidMaxHead(arr);
    //将大顶堆的顶拿出来，和未排序的序列中最后一个交换位置，再重新调整堆
    var len = arr.length;
    for(var i=arr.length-1;i>0;--i){
        //交换
        swap(arr,0,i);
        //排除已经排序过的
        //重新从栈顶开始排序堆
        maxHeapify(arr,0,i);
    }
}
var arr = [1, 23, 54, 656, 342, 43, 233, 99];
HeapSort(arr);
console.log(arr);


